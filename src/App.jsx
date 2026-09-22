import { useState } from 'react'
import LoadingScreen from './components/shared/LoadingScreen'
import useFirstVisit from './hooks/useLocalStorage'

function App() {
  const isFirstVisit = useFirstVisit()
  const [loading, setLoading] = useState(isFirstVisit)

  return (
    <div className="min-h-screen">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="flex items-center justify-center min-h-screen">
          <p style={{ color: 'var(--text)' }}>Terminal arrive à l'étape 4</p>
        </div>
      )}
    </div>
  )
}

export default App  