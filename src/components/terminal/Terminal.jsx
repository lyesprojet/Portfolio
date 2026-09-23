import { useState } from 'react'
import useTypewriter from '../../hooks/useTypewriter'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'
import { executerCommande } from '../../data/commands.config'

function Terminal() {
  const [history, setHistory] = useState([])

  const line1 = useTypewriter('Bonjour, bienvenue sur mon portfolio.', 30, 0)
  const line2 = useTypewriter('Tape help pour voir les commandes disponibles.', 30, 1500)
  const line3 = useTypewriter('Tape exit pour accéder à la version classique du site.', 30, 3300)

  const handleSubmit = (input) => {
    const result = executerCommande(input)

    if (result.type === 'clear') {
    setHistory([])
    return
  }
    setHistory((prev) => [
        ...prev,
        { type: 'command', text: input },
        { type: 'output', data: result },
    ])
  }

  return (
    <div className="min-h-screen p-3">
      <div
        className="w-full h-[calc(100vh-1.5rem)] rounded-lg border overflow-hidden flex flex-col"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
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
          className="flex-1 p-6 font-mono text-sm overflow-y-auto"
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
      </div>
    </div>
  )
}

export default Terminal