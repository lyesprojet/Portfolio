import { useState } from 'react'
import { projects } from '../../data/projects'

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="border rounded-md mb-3 overflow-hidden cursor-pointer"
      style={{ borderColor: 'var(--border)' }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-3">
        <p className="font-bold" style={{ color: 'var(--text)' }}>{project.titre}</p>
        <p className="opacity-70 text-xs mt-1">{project.description}</p>
        <p className="text-xs mt-2" style={{ color: '#ffb000' }}>
          {project.stack.join(' · ')}
        </p>
        <p className="text-xs mt-2 opacity-40">
          {expanded ? '[- réduire]' : '[+ voir plus]'}
        </p>
      </div>

      {expanded && (
        <div
          className="px-3 pb-3 pt-1 border-t text-xs space-y-2"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="opacity-80">{project.detail}</p>
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ color: '#ffb000' }}
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
                style={{ color: '#ffb000' }}
              >
                Démo &gt;
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectsList() {
  return (
    <div className="mt-2 mb-4 w-full max-w-2xl">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}

export default ProjectsList