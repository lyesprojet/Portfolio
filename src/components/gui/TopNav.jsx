function TopNav({ activeSection, onNavigate, onBackToTerminal }) {
  const sections = [
    { id: 'accueil', label: 'accueil' },
    { id: 'projets', label: 'projets' },
    { id: 'skills', label: 'skills' },
    { id: 'contact', label: 'contact' },
  ]

  return (
    <div
      className="w-full flex items-center justify-between px-8 py-2 border-b"
      style={{ backgroundColor: 'var(--gui-bg)', borderColor: 'var(--gui-border)' }}
    >
      <p
        className="text-xl font-heading font-bold"
        style={{ color: 'var(--gui-text)' }}
      >
        Elias
      </p>

      <nav className="flex gap-12 font-body text-sm">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onNavigate(s.id)}
            style={{
              color: activeSection === s.id ? 'var(--gui-text-accent)' : 'var(--gui-text)',
              fontWeight: activeSection === s.id ? 700 : 400,
              textTransform: 'uppercase',
            }}
          >
            {s.label}
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