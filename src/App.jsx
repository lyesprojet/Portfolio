import { useState } from 'react'
import LoadingScreen from './components/shared/LoadingScreen'
import Terminal from './components/terminal/Terminal'
import GuiApp from './components/gui/GuiApp'
import useFirstVisit from './hooks/useLocalStorage'

function App() {
  const isFirstVisit = useFirstVisit()
  const [loading, setLoading] = useState(isFirstVisit)
  const [mode, setMode] = useState(() => localStorage.getItem('modePrefere') || 'terminal')

  const switchToGui = () => {
    setMode('gui')
    localStorage.setItem('modePrefere', 'gui')
  }

  const switchToTerminal = () => {
    setMode('terminal')
    localStorage.setItem('modePrefere', 'terminal')
  }

  return (
    <div className="min-h-screen">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && mode === 'terminal' && <Terminal onExit={switchToGui} />}
      {!loading && mode === 'gui' && <GuiApp onBackToTerminal={switchToTerminal} />}
    </div>
  )
}

export default App