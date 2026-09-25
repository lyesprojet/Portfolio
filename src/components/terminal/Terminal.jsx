import { useState, useRef, useEffect } from 'react'
import useTypewriter from '../../hooks/useTypewriter'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'
import { executerCommande, helpContent } from '../../data/commands.config'

function Terminal({ onExit }) {
  const [history, setHistory] = useState([])
  const [hasUsedHelp, setHasUsedHelp] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const scrollRef = useRef(null)

  const line1 = useTypewriter('Bonjour, bienvenue sur mon portfolio.', 30, 0)
  const line2 = useTypewriter('Tape help pour voir les commandes disponibles.', 30, 1500)
  const line3 = useTypewriter('Tape exit pour accéder à la version classique du site.', 30, 3300)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (input) => {
    const result = executerCommande(input)

    if (result.type === 'clear') {
      setHistory([])
      return
    }

    if (result.type === 'exit') {
      onExit()
      return
    }

    if (input.trim().toLowerCase() === 'help') {
      setHasUsedHelp(true)
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: input },
      { type: 'output', data: result },
    ])
  }

  return (
    <div className="p-1 sm:p-3" style={{ minHeight: '100dvh' }}>
      <div
        className="relative w-full rounded-lg border overflow-hidden flex flex-col"
        style={{
          borderColor: 'var(--border)',
          backgroundColor: 'var(--bg)',
          height: 'calc(100dvh - 0.5rem)',
        }}
      >
        <div
          className="flex gap-2 px-4 py-3 border-b"
          style={{ borderColor: 'var(--border)', backgroundColor: '#111' }}
        >
          <span className="w-3 h-3 rounded-full bg-neutral-700" />
          <span className="w-3 h-3 rounded-full bg-neutral-700" />
          <span className="w-3 h-3 rounded-full bg-neutral-700" />
        </div>

        <div
          ref={scrollRef}
          className="flex-1 p-3 sm:p-6 font-mono text-xs sm:text-sm overflow-y-auto"
          style={{ color: 'var(--text)' }}
        >
          <p>{line1.displayedText}</p>

          <p>
            {line2.isDone ? (
              <>Tape <strong>help</strong> pour voir les commandes disponibles.</>
            ) : (
              line2.displayedText
            )}
          </p>

          <p>
            {line3.isDone ? (
              <>Tape <strong>exit</strong> pour accéder à la version classique du site.</>
            ) : (
              line3.displayedText
            )}
          </p>

          {line3.isDone && (
            <>
              <TerminalOutput history={history} />
              <TerminalInput onSubmit={handleSubmit} />
            </>
          )}
        </div>

        {hasUsedHelp && (
          <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-10">
            {panelOpen && (
              <div
                className="mb-2 rounded-lg border font-mono text-xs sm:text-sm p-3 sm:p-4"
                style={{ borderColor: 'var(--border)', backgroundColor: '#0f0f0f', color: 'var(--text)' }}
              >
                {helpContent.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
            <button
              onClick={() => setPanelOpen(!panelOpen)}
              className="flex items-center gap-2 rounded-full border px-3 py-2 font-mono text-xs"
              style={{ borderColor: 'var(--border)', backgroundColor: '#111', color: 'var(--text)' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  transform: panelOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                ▲
              </span>
              voir les commandes
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Terminal