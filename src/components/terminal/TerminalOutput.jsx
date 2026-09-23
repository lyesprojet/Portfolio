import IdentityCard from './IdentityCard'
import ProjectsList from './ProjectsList'
import SkillsBlock from './SkillsBlock'
import ExperienceTimeline from './ExperienceTimeline'

function TerminalOutput({ history }) {
  return (
    <div>
      {history.map((entry, i) => (
        <div key={i}>
          {entry.type === 'command' && (
            <div className="flex gap-2">
              <span style={{ color: '#ffb000' }}>visiteur@portfolio:~$</span>
              <span>{entry.text}</span>
            </div>
          )}
          {entry.type === 'output' && entry.data.type === 'text' &&
            entry.data.lines.map((line, j) => <p key={j}>{line}</p>)}
          {entry.type === 'output' && entry.data.type === 'identity' && <IdentityCard />}
          {entry.type === 'output' && entry.data.type === 'projects' && <ProjectsList />}
          {entry.type === 'output' && entry.data.type === 'skills' && <SkillsBlock />}
          {entry.type === 'output' && entry.data.type === 'experiences' && <ExperienceTimeline />}
        </div>
      ))}
    </div>
  )
}

export default TerminalOutput