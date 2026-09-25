import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TopNav from './TopNav'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import ParcoursSection from './ParcoursSection'
import ContactSection from './ContactSection'

const sectionComponents = {
  accueil: Hero,
  projets: ProjectsSection,
  parcours: ParcoursSection,
  contact: ContactSection,
}

function GuiApp({ onBackToTerminal, isMobile }) {
  const [activeSection, setActiveSection] = useState('accueil')
  const [showMobileWarning, setShowMobileWarning] = useState(false)

  const handleTerminalClick = () => {
    if (isMobile) {
      setShowMobileWarning(true)
    } else {
      onBackToTerminal()
    }
  }

  const confirmerMalgreTout = () => {
    setShowMobileWarning(false)
    onBackToTerminal()
  }

  const ActiveSection = sectionComponents[activeSection]

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--gui-bg)' }}>
      <TopNav
        activeSection={activeSection}
        onNavigate={setActiveSection}
        onBackToTerminal={handleTerminalClick}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <ActiveSection />
        </motion.div>
      </AnimatePresence>

      {showMobileWarning && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={() => setShowMobileWarning(false)}
        >
          <div
            className="rounded-2xl p-[1.5px] max-w-sm"
            style={{ background: 'var(--gui-card-border-grad)', boxShadow: 'var(--gui-glow)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl p-6 text-center"
              style={{ background: 'var(--gui-card-bg-grad)' }}
            >
              <p className="font-heading font-bold text-lg mb-2" style={{ color: '#f5fff8' }}>
                Expérience optimisée pour PC
              </p>
              <p className="font-body text-sm mb-6" style={{ color: '#a9cbb0' }}>
                Le mode terminal est pensé pour un clavier physique. Sur mobile ou
                tablette, l'expérience sera moins confortable. Continuer quand même ?
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowMobileWarning(false)}
                  className="font-mono text-xs px-4 py-2 rounded-lg border"
                  style={{ color: 'var(--gui-text-accent)', borderColor: 'var(--gui-text-accent)' }}
                >
                  Non, rester ici
                </button>
                <button
                  onClick={confirmerMalgreTout}
                  className="font-mono text-xs px-4 py-2 rounded-lg"
                  style={{ color: '#0a1c0f', backgroundColor: 'var(--gui-text-accent)' }}
                >
                  Oui, continuer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GuiApp