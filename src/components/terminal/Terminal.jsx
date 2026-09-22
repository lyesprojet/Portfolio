function Terminal() {
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
          <p>Bonjour, bienvenue sur mon portfolio.</p>
          <p>
            Tape <span style={{ color: 'var(--text-bright)' }}>help</span> pour voir les commandes disponibles.
          </p>
          <p>
            Tape <span style={{ color: 'var(--text-bright)' }}>exit</span> pour accéder à la version classique du site.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <span style={{ color: 'var(--text-bright)' }}>visiteur@portfolio:~$</span>
            <span
              className="w-2 h-4 blink"
              style={{ backgroundColor: 'var(--text)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terminal