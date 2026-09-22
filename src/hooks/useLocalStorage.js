import { useState } from 'react'

function useFirstVisit() {
  const [isFirstVisit] = useState(() => {
    const visited = localStorage.getItem('dejaVisite')
    if (!visited) {
      localStorage.setItem('dejaVisite', 'true')
      return true
    }
    return false
  })

  return isFirstVisit
}

export default useFirstVisit