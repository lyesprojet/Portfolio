import { useState } from 'react'
import LoadingScreen from './components/shared/LoadingScreen'
import Terminal from './components/terminal/Terminal'
import useFirstVisit from './hooks/useLocalStorage'
import GuiApp from './components/gui/GuiApp'

function App() {
  const isFirstVisit = useFirstVisit()
  const [loading, setLoading] = useState(isFirstVisit)

  return (
    <div className="min-h-screen">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && <GuiApp/>}
    </div>
  )
}

export default App