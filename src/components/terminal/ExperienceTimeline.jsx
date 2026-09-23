import { experiences } from '../../data/experiences'

function ExperienceTimeline() {
  return (
    <div
      className="mt-2 mb-4 border rounded-md p-4"
      style={{ borderColor: 'var(--border)' }}
    >
      {experiences.map((exp) => {
        const estImbrique = exp.type === 'imbrique'

        return (
          <div
            key={exp.id}
            className="relative mb-2 last:mb-0"
            style={{
              borderLeft: '1px solid var(--border)',
              paddingLeft: estImbrique ? '28px' : '14px',
            }}
          >
            <span
              className="absolute rounded-full"
              style={{
                width: estImbrique ? '7px' : '8px',
                height: estImbrique ? '7px' : '8px',
                backgroundColor: estImbrique ? '#ffb000' : 'var(--text)',
                left: estImbrique ? '10px' : '-4.5px',
                top: '3px',
              }}
            />

            <p className="text-xs">
              <span style={{ color: '#ffb000' }}>{exp.periode}</span>
              {exp.contexte && <span> · {exp.contexte}</span>}
              {exp.enCours && <span> · <span className="en-cours">en cours</span></span>}
            </p>
            <p className="text-sm font-bold">{exp.titre}</p>
            {exp.lieu && <p className="text-xs opacity-70">{exp.lieu}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default ExperienceTimeline