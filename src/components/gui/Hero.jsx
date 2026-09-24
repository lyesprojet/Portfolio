function Hero() {
  return (
    <div className="relative px-8 py-10">
      <div
        className="rounded-2xl p-[1.5px]"
        style={{ background: 'var(--gui-card-border-grad)', boxShadow: 'var(--gui-glow)' }}
      >
        <div
          className="relative rounded-2xl p-10 overflow-hidden"
          style={{ background: 'var(--gui-card-bg-grad)' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-40%',
              left: '-20%',
              width: '140%',
              height: '100%',
              background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 45%, transparent 60%)',
            }}
          />

          <h1
            className="font-heading font-bold text-4xl relative"
            style={{ color: '#f5fff8' }}
          >
            Développeur <span style={{ color: 'var(--gui-text-accent)' }}>full-stack</span>
          </h1>

          <p
            className="font-body text-sm mt-4 max-w-md relative"
            style={{ color: '#a9cbb0', lineHeight: 1.7 }}
          >
            Étudiant en BUT Informatique, je conçois des interfaces claires et des
            applications robustes, avec une attention particulière portée aux détails.
          </p>

          <button
            className="font-body text-sm font-semibold mt-6 px-5 py-2.5 rounded-lg relative"
            style={{
              color: '#0a1c0f',
              backgroundColor: 'var(--gui-text-accent)',
              boxShadow: '0 0 25px rgba(159,255,196,0.55)',
            }}
          >
            Voir mes projets
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero