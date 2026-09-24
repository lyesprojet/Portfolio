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

function SkillCard({ categoryKey, techs, isOpen, onClick }) {
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

        {isOpen && (
          <div className="flex flex-wrap gap-2">
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
        )}
      </div>
    </div>
  )
}

function Hero() {
  const [openCategory, setOpenCategory] = useState(null)
  const categories = Object.entries(skills)

  return (
    <div className="relative px-16 py-16 w-full overflow-hidden">
    <img
    src={logo}
    alt=""
    className="absolute pointer-events-none"
    style={{
        top: '-120px',
        right: '-120px',
        width: '650px',
        height: '650px',
        opacity: 0.08,
        objectFit: 'contain',
    }}
    />

      <div className="relative">
        <h1 className="font-heading font-bold text-4xl mb-4" style={{ color: '#f5fff8' }}>
          Développeur <span style={{ color: 'var(--gui-text-accent)' }}>full-stack</span>
        </h1>
        <p
          className="font-body text-base mb-16 max-w-xl"
          style={{ color: '#a9cbb0', lineHeight: 1.7 }}
        >
          Étudiant en BUT Informatique, je conçois des interfaces claires et des
          applications robustes, avec une attention particulière portée aux détails.
          Curieux d'apprendre en continu, autant sur le plan technique qu'humain.
        </p>

        <h2
          className="font-heading font-bold text-xl mb-6"
          style={{ color: '#f5fff8' }}
        >
          Mes skills
        </h2>

        <div className="flex gap-3">
          {categories.map(([key, techs]) => (
            <SkillCard
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