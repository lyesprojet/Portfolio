import { useState } from 'react'
import TopNav from './TopNav'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'

function GuiApp() {
  const [activeSection, setActiveSection] = useState('accueil')

  return (
    <div className="min-h-screen" style={{ background: 'var(--gui-bg)' }}>
      <TopNav
        activeSection={activeSection}
        onNavigate={setActiveSection}
        onBackToTerminal={() => console.log('retour terminal, à implémenter étape 9')}
      />

      {activeSection === 'accueil' && <Hero />}
      {activeSection === 'projets' && <ProjectsSection />}
      {activeSection !== 'accueil' && activeSection !== 'projets' && (
        <div className="p-8 font-mono" style={{ color: 'var(--gui-text)' }}>
          Section active : {activeSection}
        </div>
      )}
    </div>
  )
}

export default GuiApp