import { useEffect, useRef } from 'react'

const CHARS = 'アイウエオカキクケコサシスセソ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const FONT_SIZE = 18

function MatrixTransition({ direction, onMidpoint, onComplete }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId = null
    let drops = []
    let speedFactor = 1

    function initDrops(columns) {
      const totalRows = canvas.height / FONT_SIZE
      if (direction === 'down') {
        drops = new Array(columns).fill(0).map(() => Math.random() * -totalRows)
      } else {
        drops = new Array(columns).fill(0).map(() => totalRows + Math.random() * totalRows)
      }
    }

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDrops(Math.floor(canvas.width / FONT_SIZE))
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = FONT_SIZE + 'px monospace'
      const totalRows = canvas.height / FONT_SIZE

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const y = drops[i] * FONT_SIZE
        const trailOffset = direction === 'down' ? FONT_SIZE : -FONT_SIZE

        ctx.fillStyle = '#c8ffd8'
        ctx.fillText(char, i * FONT_SIZE, y)
        ctx.fillStyle = '#33ff66'
        ctx.fillText(char, i * FONT_SIZE, y + trailOffset)

        if (direction === 'down') {
          if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
          drops[i] += 0.5 * speedFactor
        } else {
          if (y < 0 && Math.random() > 0.975) drops[i] = totalRows
          drops[i] -= 0.5 * speedFactor
        }
      }

      animationId = requestAnimationFrame(draw)
    }
    draw()

    let accel = 1
    const accelInterval = setInterval(() => {
      accel += 0.6
      speedFactor = accel
      if (accel >= 5) clearInterval(accelInterval)
    }, 80)

    const midTimer = setTimeout(() => onMidpoint(), 550)
    const completeTimer = setTimeout(() => onComplete(), 1450)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
      clearInterval(accelInterval)
      clearTimeout(midTimer)
      clearTimeout(completeTimer)
    }
  }, [direction, onMidpoint, onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  )
}

export default MatrixTransition