import { useState } from 'react'
import terminalBtn from '../../assets/btn-terminal.png'

function TopNav({ activeSection, onNavigate, onBackToTerminal }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const sections = [
    { id: 'accueil', label: 'accueil' },
    { id: 'projets', label: 'projets' },
    { id: 'parcours', label: 'parcours' },
    { id: 'contact', label: 'contact' },
  ]

  const handleNavigate = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  return (
    <>
      <div
        className="w-full flex items-center justify-between px-4 md:px-8 border-b"
        style={{ borderColor: 'var(--gui-topbar-border)', height: '72px' }}
      >
        <p
          className="text-xl font-heading font-bold"
          style={{ color: 'var(--gui-text)' }}
        >
          Elias
        </p>

        {/* Nav desktop, inchangée */}
        <nav className="hidden md:flex gap-10 font-body text-xs" style={{ letterSpacing: '0.08em' }}>
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

        <div className="hidden md:flex">
          <button
            onClick={onBackToTerminal}
            className="transition-transform hover:scale-105 flex items-center"
          >
            <img src={terminalBtn} alt="Retour au terminal" style={{ height: '56px' }} />
          </button>
        </div>

        {/* Bouton hamburger, mobile uniquement */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span style={{ width: '22px', height: '2px', backgroundColor: 'var(--gui-text)' }} />
          <span style={{ width: '22px', height: '2px', backgroundColor: 'var(--gui-text)' }} />
          <span style={{ width: '22px', height: '2px', backgroundColor: 'var(--gui-text)' }} />
        </button>
      </div>

      {/* Panneau menu mobile */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col"
          style={{ background: 'var(--gui-bg)', top: '72px' }}
        >
          <nav className="flex flex-col gap-6 p-8 font-body text-lg">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavigate(s.id)}
                className="text-left"
                style={{
                  color: activeSection === s.id ? 'var(--gui-text-accent)' : 'var(--gui-text-dim)',
                  fontWeight: activeSection === s.id ? 700 : 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto p-8">
            <button
              onClick={() => {
                setMenuOpen(false)
                onBackToTerminal()
              }}
              className="flex items-center"
            >
              <img src={terminalBtn} alt="Retour au terminal" style={{ height: '56px' }} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default TopNav