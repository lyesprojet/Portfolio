import { useState, useRef, useEffect } from 'react'

function TerminalInput({ onSubmit }) {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      onSubmit(value)
      setValue('')
    }
  }

  return (
    <div className="flex items-center gap-2 mt-1">
      <span style={{ color: '#ffb000' }}>visiteur@portfolio:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent outline-none border-none appearance-none font-mono text-sm"
        style={{ color: 'var(--text)', caretColor: 'var(--text)', border: 'none', boxShadow: 'none' }}
        autoFocus
        spellCheck={false}
      />
    </div>
  )
}

export default TerminalInput