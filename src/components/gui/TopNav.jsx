function TopNav({ activeSection, onNavigate, onBackToTerminal }) {
  const sections = [
    { id: 'accueil', label: 'accueil' },
    { id: 'projets', label: 'projets' },
    { id: 'skills', label: 'skills' },
    { id: 'contact', label: 'contact' },
  ]

  return (
    <div
      className="w-full flex items-center justify-between px-8 py-4 border-b"
      style={{ borderColor: 'var(--gui-topbar-border)' }}
    >
      <p
        className="text-xl font-heading font-bold"
        style={{ color: 'var(--gui-text)' }}
      >
        Elias
      </p>

      <nav className="flex gap-10 font-body text-xs" style={{ letterSpacing: '0.08em' }}>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            className="relative pb-1"
            style={{
              color: activeSection === s.id ? 'var(--gui-text-accent)' : 'var(--gui-text-dim)',
              fontWeight: activeSection === s.id ? 700 : 500,
              textTransform: 'uppercase',
            }}
          >
            {s.label}
            {activeSection === s.id && (
              <span
                className="absolute left-0 right-0 -bottom-0.5"
                style={{
                  height: '2px',
                  background: 'var(--gui-text-accent)',
                  boxShadow: '0 0 8px rgba(159,255,196,0.8)',
                  borderRadius: '2px',
                }}
              />
            )}
          </button>
        ))}
      </nav>

      <button
        onClick={onBackToTerminal}
        className="text-xs font-mono px-3 py-2 rounded"
        style={{
          color: 'var(--text)',
          border: '2px solid var(--text)',
          backgroundColor: 'var(--bg)',
        }}
      >
        _TERMINAL
      </button>
    </div>
  )
}

export default TopNav