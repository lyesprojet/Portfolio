import { skills } from '../../data/skills'

function SkillsBlock() {
  const entries = Object.entries(skills)

  return (
    <div className="mt-2 mb-4 text-sm">
      <p>{'{'}</p>
      {entries.map(([categorie, liste], i) => (
        <p key={categorie} className="pl-4">
          <span style={{ color: '#ffb000' }}>{categorie}</span>: {liste.join(', ')}
          {i < entries.length - 1 ? ',' : ''}
        </p>
      ))}
      <p>{'}'}</p>
    </div>
  )
}

export default SkillsBlock