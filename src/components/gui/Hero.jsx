import { useState } from 'react'
import { skills } from '../../data/skills'
import { projects } from '../../data/projects'
import { experiences } from '../../data/experiences'
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

/* Carte cliquable commune aux 3 aperçus (div role=button pour pouvoir y mettre un lien) */
function PreviewCard({ kicker, cta, onClick, children }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className="group rounded-[18px] p-[1.5px] cursor-pointer transition-transform duration-200 hover:-translate-y-1"
      style={{ background: 'var(--gui-card-border-grad)' }}
    >
      <div
        className="relative overflow-hidden rounded-[18px] p-6 md:p-7 h-full flex flex-col"
        style={{ background: 'var(--gui-card-bg-grad)', minHeight: '300px' }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-40%', left: '-20%', width: '140%', height: '100%',
            background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06) 45%, transparent 60%)',
          }}
        />
        <p
          className="font-mono text-xs mb-3 relative"
          style={{ color: 'var(--gui-text-accent)' }}
        >
          {kicker}
        </p>
        <div className="relative flex flex-col flex-1">{children}</div>
        <p
          className="font-mono text-xs relative pt-5 mt-auto transition-all duration-200 group-hover:tracking-wider"
          style={{ color: 'var(--gui-text-accent)' }}
        >
          {cta}
        </p>
      </div>
    </div>
  )
}

function Hero({ onNavigate, onHintTerminal }) {
  const [openCategory, setOpenCategory] = useState(null)
  const categories = Object.entries(skills)

  // Données lues automatiquement
  const dernierProjet = projects[projects.length - 1]
  const nbProjets = projects.length
  const formationActuelle = experiences.find((e) => e.enCours)

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

        {/* Aperçus des autres pages */}
        <h2
          className="font-heading font-bold text-lg md:text-xl mt-12 md:mt-[72px] mb-4 md:mb-6"
          style={{ color: '#f5fff8' }}
        >
          Pour aller plus loin
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Projets */}
          <PreviewCard
            kicker="PROJETS"
            cta="Voir les projets →"
            onClick={() => onNavigate('projets')}
          >
            <p
              className="font-heading font-bold leading-none mb-2"
              style={{ color: 'var(--gui-text-accent)', fontSize: '44px' }}
            >
              {nbProjets}
            </p>
            {dernierProjet && (
              <>
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: '#f5fff8' }}>
                  {dernierProjet.titre}
                </h3>
                <p className="font-body text-xs" style={{ color: '#a9cbb0', lineHeight: 1.6 }}>
                  {dernierProjet.description}
                </p>
                {dernierProjet.images && dernierProjet.images[0] && (
                  <img
                    src={dernierProjet.images[0]}
                    alt=""
                    className="w-full object-cover rounded-[10px] mt-4"
                    style={{ height: '86px', border: '1px solid rgba(159,255,196,0.2)' }}
                  />
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {dernierProjet.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 rounded-full"
                      style={{ color: 'var(--gui-text-accent)', border: '1px solid rgba(159,255,196,0.3)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </PreviewCard>

          {/* Parcours */}
          <PreviewCard
            kicker="PARCOURS"
            cta="Voir le parcours →"
            onClick={() => onNavigate('parcours')}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <h3 className="font-heading font-bold text-xl" style={{ color: '#f5fff8' }}>
                BUT Informatique, 3e année
              </h3>
              {formationActuelle && (
                <span className="en-cours font-mono text-xs">en cours</span>
              )}
            </div>
            <p className="font-body text-xs" style={{ color: '#a9cbb0', lineHeight: 1.6 }}>
              {formationActuelle ? `${formationActuelle.lieu}. ` : ''}
              Du bac STI2D à ma première expérience professionnelle, retrouve toutes
              les étapes de ma formation.
            </p>
          </PreviewCard>

          {/* Contact */}
          <PreviewCard
            kicker="CONTACT"
            cta="Voir les contacts →"
            onClick={() => onNavigate('contact')}
          >
            <p className="mb-3">
              <span className="en-cours font-mono text-xs">disponible</span>
            </p>
            <h3 className="font-heading font-bold text-xl mb-2" style={{ color: '#f5fff8' }}>
              Alternance dès septembre 2027
            </h3>
            <p className="font-body text-xs" style={{ color: '#a9cbb0', lineHeight: 1.6 }}>
              Email, GitHub, LinkedIn : tous mes moyens de contact sont sur la page Contact.
            </p>
            <a
              href="/documents/cv-elias.pdf"
              download
              onClick={(e) => e.stopPropagation()}
              className="block text-center font-mono text-xs py-2.5 rounded-[10px] mt-4"
              style={{ color: '#0a1c0f', backgroundColor: 'var(--gui-text-accent)' }}
            >
              Télécharger mon CV
            </a>
          </PreviewCard>
        </div>

        {/* Bannière terminal */}
        <div
          onClick={onHintTerminal}
          className="rounded-[18px] p-[1.5px] cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 mt-12 md:mt-[72px]"
          style={{ background: 'var(--gui-card-border-grad)' }}
        >
          <div
            className="rounded-[18px] p-6 md:px-9 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            style={{ background: 'var(--gui-card-bg-grad)' }}
          >
            <div>
              <p className="font-mono text-xs mb-2" style={{ color: 'var(--gui-text-accent)' }}>
                VERSION DÉVELOPPEUR
              </p>
              <h3 className="font-heading font-bold text-xl mb-2" style={{ color: '#f5fff8' }}>
                Tu préfères les terminaux ?
              </h3>
              <p className="font-body text-xs" style={{ color: '#a9cbb0', lineHeight: 1.6 }}>
                Ce portfolio existe aussi en ligne de commande. Tape{' '}
                <code className="font-mono" style={{ color: 'var(--gui-text-accent)' }}>help</code>{' '}
                pour voir ce qui est possible.
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onHintTerminal()
              }}
              aria-label="Remonter vers le bouton terminal"
              className="flex items-center justify-center rounded-full shrink-0 self-start md:self-auto transition-transform duration-200 hover:scale-110"
              style={{
                width: '48px',
                height: '48px',
                color: 'var(--text)',
                border: '1.5px solid #3ad96b',
                backgroundColor: '#04120a',
                boxShadow: '0 0 12px rgba(90,255,140,0.35)',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero