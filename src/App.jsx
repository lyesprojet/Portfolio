import { useState, useCallback } from 'react'
import LoadingScreen from './components/shared/LoadingScreen'
import MatrixTransition from './components/shared/MatrixTransition'
import Terminal from './components/terminal/Terminal'
import GuiApp from './components/gui/GuiApp'
import useFirstVisit from './hooks/useLocalStorage'
import useIsMobile from './hooks/useIsMobile'

function App() {
  const isFirstVisit = useFirstVisit()
  const isMobile = useIsMobile()
  const [loading, setLoading] = useState(isFirstVisit)
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return 'gui'
    return localStorage.getItem('modePrefere') || 'terminal'
  })
  const [transitioning, setTransitioning] = useState(false)
  const [pendingMode, setPendingMode] = useState(null)

  const startTransition = (target) => {
    setPendingMode(target)
    setTransitioning(true)
  }

  const handleMidpoint = useCallback(() => {
    setMode(pendingMode)
    localStorage.setItem('modePrefere', pendingMode)
  }, [pendingMode])

  const handleComplete = useCallback(() => {
    setTransitioning(false)
    setPendingMode(null)
  }, [])

  return (
    <div className="min-h-screen">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {!loading && mode === 'terminal' && (
        <Terminal onExit={() => startTransition('gui')} />
      )}
      {!loading && mode === 'gui' && (
        <GuiApp
          onBackToTerminal={() => startTransition('terminal')}
          isMobile={isMobile}
        />
      )}

      {transitioning && (
        <MatrixTransition
          direction={pendingMode === 'gui' ? 'down' : 'up'}
          onMidpoint={handleMidpoint}
          onComplete={handleComplete}
        />
      )}
    </div>
  )
}

export default App