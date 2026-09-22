import { useState, useEffect } from 'react'

function useTypewriter(text, speed = 30, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setIsDone(false)

    let index = 0
    let intervalId

    const startTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        index++
        setDisplayedText(text.slice(0, index))

        if (index >= text.length) {
          clearInterval(intervalId)
          setIsDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startTimer)
      clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { displayedText, isDone }
}

export default useTypewriter