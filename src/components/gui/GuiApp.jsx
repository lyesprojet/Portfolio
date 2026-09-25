import { useState } from 'react'
import TopNav from './TopNav'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import ParcoursSection from './ParcoursSection'
import ContactSection from './ContactSection'

function GuiApp({ onBackToTerminal }) {
  const [activeSection, setActiveSection] = useState('accueil')

  return (
    <div className="min-h-screen" style={{ background: 'var(--gui-bg)' }}>
      <TopNav
        activeSection={activeSection}
        onNavigate={setActiveSection}
        onBackToTerminal={onBackToTerminal}
      />

      {activeSection === 'accueil' && <Hero />}
      {activeSection === 'projets' && <ProjectsSection />}
      {activeSection === 'parcours' && <ParcoursSection />}
      {activeSection === 'contact' && <ContactSection />}
    </div>
  )
}

export default GuiApp