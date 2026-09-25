import { contactInfo } from '../../data/contact'

const ICONS = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.19-3.37-1.19-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.38-2.02 1.01-2.73-.1-.26-.44-1.3.1-2.71 0 0 .82-.27 2.7 1.04a9.18 9.18 0 0 1 4.92 0c1.88-1.31 2.7-1.04 2.7-1.04.54 1.41.2 2.45.1 2.71.63.71 1.01 1.62 1.01 2.73 0 3.91-2.35 4.77-4.58 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.63c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.73-2.55 3.5V23h-4V8.5z" />
    </svg>
  ),
}

function ContactCard({ contact }) {
  return (
    <a
      href={contact.lien}
      target={contact.id === 'email' ? undefined : '_blank'}
      rel={contact.id === 'email' ? undefined : 'noreferrer'}
      className="block rounded-2xl p-[1.5px] transition-transform hover:-translate-y-1"
      style={{ background: 'var(--gui-card-border-grad)', boxShadow: 'var(--gui-glow)' }}
    >
      <div
        className="relative rounded-2xl p-5 md:p-8 overflow-hidden h-full"
        style={{ background: 'var(--gui-card-bg-grad)' }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-40%', left: '-20%', width: '140%', height: '100%',
            background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06) 45%, transparent 60%)',
          }}
        />

        <div
        className="absolute pointer-events-none"
        style={{
            right: '0',
            top: '0',
            bottom: '0',
            width: '45%',
            color: 'rgba(159,255,196,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        {ICONS[contact.id]}
        </div>

        <p
          className="font-mono text-xs mb-3 md:mb-4 relative"
          style={{ color: 'var(--gui-text-accent)' }}
        >
          {contact.label}
        </p>
        <p
          className="font-heading font-bold text-base md:text-xl relative break-words"
          style={{ color: '#f5fff8' }}
        >
          {contact.valeur}
        </p>
        <p
          className="font-body text-xs mt-3 md:mt-5 relative opacity-50"
          style={{ color: '#a9cbb0' }}
        >
          {contact.action}
        </p>
      </div>
    </a>
  )
}

function ContactSection() {
  return (
    <div className="px-6 py-10 md:px-16 md:py-16 w-full">
      <div className="max-w-2xl mb-10 md:mb-16">
        <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4 md:mb-5" style={{ color: '#f5fff8' }}>
          Discutons de votre <span style={{ color: 'var(--gui-text-accent)' }}>projet</span>
        </h2>
        <p className="font-body text-sm md:text-base" style={{ color: '#a9cbb0', lineHeight: 1.7 }}>
          Étudiant en dernière année de BUT Informatique, actuellement à la recherche
          d'une alternance. Que ce soit pour une opportunité, une question technique
          ou simplement échanger, n'hésitez pas à me contacter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
        {contactInfo.map((c) => (
          <ContactCard key={c.id} contact={c} />
        ))}
      </div>

      <div
        className="rounded-2xl p-[1.5px]"
        style={{ background: 'var(--gui-card-border-grad)', boxShadow: 'var(--gui-glow)' }}
      >
        <div
          className="rounded-2xl px-6 py-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ background: 'var(--gui-card-bg-grad)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span className="en-cours font-mono text-xs font-bold">disponible</span>
            <span className="font-body text-sm" style={{ color: '#a9cbb0' }}>
              pour une alternance à partir de septembre 2027
            </span>
          </div>
          <a
            href="/documents/cv-elias.pdf"
            download
            className="font-mono text-xs px-4 py-2 rounded-lg text-center"
            style={{ color: '#0a1c0f', backgroundColor: 'var(--gui-text-accent)' }}
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactSection