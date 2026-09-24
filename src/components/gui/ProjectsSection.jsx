import { useState } from 'react'
import { projects } from '../../data/projects'

function Lightbox({ images, activeIndex, onClose, onChangeIndex }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 font-mono text-sm"
        style={{ color: '#f5fff8' }}
      >
        [ fermer ]
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onChangeIndex((activeIndex - 1 + images.length) % images.length) }}
          className="absolute left-6 font-mono text-2xl"
          style={{ color: 'var(--gui-text-accent)' }}
        >
          &#8592;
        </button>
      )}

      <img
        src={images[activeIndex]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-[80vw] max-h-[80vh] rounded-lg"
      />

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onChangeIndex((activeIndex + 1) % images.length) }}
          className="absolute right-6 font-mono text-2xl"
          style={{ color: 'var(--gui-text-accent)' }}
        >
          &#8594;
        </button>
      )}
    </div>
  )
}

function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const hasImages = images.length > 0

  const goPrev = (e) => {
    e.stopPropagation()
    setCurrent((current - 1 + images.length) % images.length)
  }

  const goNext = (e) => {
    e.stopPropagation()
    setCurrent((current + 1) % images.length)
  }

  return (
    <>
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: '#0d1f14' }}
      >
        {hasImages ? (
          <img
            src={images[current]}
            alt=""
            onClick={() => setLightboxOpen(true)}
            className="w-full h-full object-cover cursor-zoom-in"
          />
        ) : (
          <p className="font-mono text-xs opacity-30" style={{ color: 'var(--gui-text-accent)' }}>
            Aucune image pour l'instant
          </p>
        )}

        {hasImages && images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: 'rgba(10,25,15,0.55)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(159,255,196,0.4)',
                boxShadow: '0 0 16px rgba(159,255,196,0.25)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#9fffc4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: 'rgba(10,25,15,0.55)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(159,255,196,0.4)',
                boxShadow: '0 0 16px rgba(159,255,196,0.25)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="#9fffc4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {lightboxOpen && hasImages && (
        <Lightbox
          images={images}
          activeIndex={current}
          onClose={() => setLightboxOpen(false)}
          onChangeIndex={setCurrent}
        />
      )}
    </>
  )
}

function ProjectCard({ project, imageOnLeft }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="rounded-2xl p-[1.5px] mb-6 last:mb-0 w-full cursor-pointer transition-all duration-300"
      style={{ background: 'var(--gui-card-border-grad)', boxShadow: 'var(--gui-glow)' }}
      onClick={() => setExpanded(!expanded)}
    >
      <div
        className="relative rounded-2xl overflow-hidden flex"
        style={{
          background: 'var(--gui-card-bg-grad)',
          flexDirection: imageOnLeft ? 'row-reverse' : 'row',
        }}
      >
        <div className="p-10 flex-1 min-w-0">
          <p className="font-mono text-xs mb-2" style={{ color: 'var(--gui-text-accent)' }}>
            {project.stack.join(' · ')}
          </p>
          <h3 className="font-heading font-bold text-3xl mb-3" style={{ color: '#f5fff8' }}>
            {project.titre}
          </h3>
          <p className="font-body text-sm max-w-md" style={{ color: '#a9cbb0', lineHeight: 1.7 }}>
            {project.description}
          </p>

          {expanded && (
            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(159,255,196,0.2)' }}>
              <p className="font-body text-sm max-w-lg mb-4" style={{ color: '#a9cbb0', lineHeight: 1.7 }}>
                {project.detail}
              </p>
              <div className="flex gap-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs px-4 py-2 rounded-lg"
                    style={{ color: '#0a1c0f', backgroundColor: 'var(--gui-text-accent)' }}
                  >
                    GitHub &gt;
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs px-4 py-2 rounded-lg border"
                    style={{ color: 'var(--gui-text-accent)', borderColor: 'var(--gui-text-accent)' }}
                  >
                    Démo &gt;
                  </a>
                )}
              </div>
            </div>
          )}

          <p className="font-mono text-xs mt-6 opacity-50" style={{ color: 'var(--gui-text-accent)' }}>
            {expanded ? '[ réduire ]' : '[ cliquer pour en savoir plus ]'}
          </p>
        </div>

        <div
          className="relative flex-shrink-0 transition-all duration-300 flex items-center"
          style={{
            width: expanded ? '420px' : '256px',
            backgroundColor: '#0d1f14',
          }}
        >
          {!expanded ? (
            <>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: project.images[0] ? `url(${project.images[0]})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: imageOnLeft
                    ? 'linear-gradient(270deg, rgba(10,25,15,1) 0%, rgba(10,25,15,0.6) 40%, rgba(10,25,15,0) 100%)'
                    : 'linear-gradient(90deg, rgba(10,25,15,1) 0%, rgba(10,25,15,0.6) 40%, rgba(10,25,15,0) 100%)',
                }}
              />
            </>
          ) : (
            <ImageGallery images={project.images} />
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  return (
    <div className="px-8 py-10 w-full">
      <h2 className="font-heading font-bold text-2xl mb-8" style={{ color: '#f5fff8' }}>
        Projets
      </h2>

      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} imageOnLeft={i % 2 === 1} />
      ))}
    </div>
  )
}

export default ProjectsSection