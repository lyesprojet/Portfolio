import { contactInfo } from '../../data/contact'

function ContactBlock() {
  return (
    <div className="mt-2 mb-4 flex flex-col gap-2 max-w-md">
      {contactInfo.map((c) => (
        <a
          key={c.id}
          href={c.lien}
          target={c.id === 'email' ? undefined : '_blank'}
          rel={c.id === 'email' ? undefined : 'noreferrer'}
          className="block border rounded-md px-3 py-2 cursor-pointer hover:opacity-80"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: '#ffb000' }}>{c.label}</p>
          <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>{c.valeur}</p>
          <p className="text-xs opacity-40 mt-1">{c.action}</p>
        </a>
      ))}
    </div>
  )
}

export default ContactBlock