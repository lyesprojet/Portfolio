import { useState } from 'react'
import LoadingScreen from './components/shared/LoadingScreen'
import Terminal from './components/terminal/Terminal'
import useFirstVisit from './hooks/useLocalStorage'

function App() {
  const isFirstVisit = useFirstVisit()
  const [loading, setLoading] = useState(isFirstVisit)

  return (
    <div className="min-h-screen">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && <Terminal />}
    </div>
  )
}

export default App