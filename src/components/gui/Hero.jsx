import { useState } from 'react'
import { skills } from '../../data/skills'
import logo from '../../assets/logo_3d.png'

const CATEGORY_LABELS = {
  langages: 'Langages',
  frontend: 'Frontend',
  backend: 'Backend',
  'bases de données': 'Bases de données',
  outils: 'Outils',
  méthodologie: 'Méthodologie',
}

function SkillCardDesktop({ categoryKey, techs, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-2xl p-[1.5px] cursor-pointer transition-all duration-300"
      style={{
        background: 'var(--gui-card-border-grad)',
        boxShadow: isOpen ? 'var(--gui-glow)' : 'none',
        flex: isOpen ? '2.4 1 0%' : '1 1 0%',
      }}
    >
      <div
        className="rounded-2xl h-full transition-all duration-300"
        style={{
          background: 'var(--gui-card-bg-grad)',
          padding: isOpen ? '24px' : '18px 8px',
        }}
      >
        <p
          className="font-heading font-bold text-center transition-all duration-300"
          style={{
            color: '#f5fff8',
            fontSize: isOpen ? '15px' : '11px',
            textAlign: isOpen ? 'left' : 'center',
            marginBottom: isOpen ? '14px' : '0',
          }}
        >
          {CATEGORY_LABELS[categoryKey]}
        </p>

        <div
          className="flex flex-wrap gap-2 transition-opacity duration-200"
          style={{
            opacity: isOpen ? 1 : 0,
            maxHeight: isOpen ? 'none' : '0',
            overflow: isOpen ? 'visible' : 'hidden',
            transitionDelay: isOpen ? '300ms' : '0ms',
          }}
        >
          {techs.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1 rounded-full"
              style={{ color: 'var(--gui-text-accent)', border: '1px solid rgba(159,255,196,0.3)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillRowMobile({ categoryKey, techs, isOpen, onClick }) {
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(159,255,196,0.15)' }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4"
      >
        <span className="font-heading font-bold text-base" style={{ color: '#f5fff8' }}>
          {CATEGORY_LABELS[categoryKey]}
        </span>
        <span
          className="transition-transform duration-300"
          style={{
            color: 'var(--gui-text-accent)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            fontSize: '20px',
          }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '200px' : '0px' }}
      >
        <div className="flex flex-wrap gap-2 pb-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1.5 rounded-full"
              style={{ color: 'var(--gui-text-accent)', border: '1px solid rgba(159,255,196,0.3)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const [openCategory, setOpenCategory] = useState(null)
  const categories = Object.entries(skills)

  return (
    <div className="relative px-6 py-10 md:px-16 md:py-16 w-full min-h-screen overflow-x-hidden">
      <img
        src={logo}
        alt=""
        className="hidden md:block absolute pointer-events-none"
        style={{
          top: '-180px',
          right: '-180px',
          width: '850px',
          height: '850px',
          opacity: 0.08,
          objectFit: 'contain',
        }}
      />

      <div className="relative">
        <h1 className="font-heading font-bold text-2xl md:text-4xl mb-4" style={{ color: '#f5fff8' }}>
          Développeur <span style={{ color: 'var(--gui-text-accent)' }}>full-stack</span>
        </h1>
        <p
          className="font-body text-sm md:text-base mb-10 md:mb-16 max-w-xl"
          style={{ color: '#a9cbb0', lineHeight: 1.7 }}
        >
          Étudiant en BUT Informatique, je conçois des interfaces claires et des
          applications robustes, avec une attention particulière portée aux détails.
          Curieux d'apprendre en continu, autant sur le plan technique qu'humain.
        </p>

        <h2
          className="font-heading font-bold text-lg md:text-xl mb-4 md:mb-6"
          style={{ color: '#f5fff8' }}
        >
          Mes skills
        </h2>

        {/* Version desktop : cartes qui se poussent */}
        <div className="hidden md:flex gap-3">
          {categories.map(([key, techs]) => (
            <SkillCardDesktop
              key={key}
              categoryKey={key}
              techs={techs}
              isOpen={openCategory === key}
              onClick={() => setOpenCategory(openCategory === key ? null : key)}
            />
          ))}
        </div>

        {/* Version mobile : accordéon vertical plein écran */}
        <div className="md:hidden">
          {categories.map(([key, techs]) => (
            <SkillRowMobile
              key={key}
              categoryKey={key}
              techs={techs}
              isOpen={openCategory === key}
              onClick={() => setOpenCategory(openCategory === key ? null : key)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero