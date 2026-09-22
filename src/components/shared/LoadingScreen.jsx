import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

function LoadingScreen({ onFinish }) {
  const [visible, setVisible] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), 1700)
    const endTimer = setTimeout(() => {
      setVisible(false)
      onFinish()
    }, 2000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(endTimer)
    }
  }, [onFinish])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center gap-6 bg-black transition-opacity duration-300 ${
        fadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img src={logo} alt="Logo" className="w-80 h-80 blink" />
      <div
        className="w-48 h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--border)' }}
      >
        <div
          className="h-full rounded-full"
          style={{
            backgroundColor: 'var(--text)',
            animation: 'loading-bar 1.7s linear forwards',
          }}
        />
      </div>
    </div>
  )
}

export default LoadingScreen