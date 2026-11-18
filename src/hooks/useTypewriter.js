import { useState, useEffect } from 'react'

function useTypewriter(text, speed = 30, startDelay = 0) {
  // On mémorise le texte auquel correspond la progression : si le texte change,
  // la progression repart de zéro sans avoir à réinitialiser l'état dans l'effet.
  const [progress, setProgress] = useState({ text, count: 0 })

  useEffect(() => {
    let index = 0
    let intervalId

    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        index++
        setProgress({ text, count: index })

        if (index >= text.length) {
          clearInterval(intervalId)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startTimer)
      clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  const count = progress.text === text ? progress.count : 0
  const displayedText = text.slice(0, count)
  const isDone = count >= text.length

  return { displayedText, isDone }
}

export default useTypewriter