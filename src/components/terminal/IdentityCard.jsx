import avatar from '../../assets/avatar.png'

function IdentityCard() {
  return (
    <div
      className="mt-4 mb-6 w-full max-w-3xl border rounded-md overflow-hidden font-mono text-sm"
      style={{ borderColor: 'var(--border)' }}
    >
      <div
        className="flex justify-between items-center px-4 py-2 border-b"
        style={{ borderColor: 'var(--border)', backgroundColor: '#0f1a0f' }}
      >
        <span style={{ color: 'var(--text-bright)' }}>PORTFOLIO // CARTE D'IDENTITÉ</span>
        <span className="opacity-50">N° 2026-DEV-001</span>
      </div>

      <div className="p-6 flex gap-6">
        <div
          className="w-32 h-36 flex-shrink-0 border overflow-hidden"
          style={{ borderColor: 'var(--border)', backgroundColor: '#0a0a0a' }}
        >
          <img
            src={avatar}
            alt="Elias Semiane"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
        </div>

        <div className="flex-1 space-y-2">
          <p><span className="opacity-50">Nom :</span> SEMIANE</p>
          <p><span className="opacity-50">Prénom :</span> Elias</p>
          <p><span className="opacity-50">Statut :</span> Étudiant développeur</p>
          <p><span className="opacity-50">Formation :</span> BUT Informatique, 3e année</p>
          <p><span className="opacity-50">Localisation :</span> Paris </p>
          <p><span className="opacity-50">Disponibilité :</span> Stage du 8 mars au 11 juin 2027</p>
          <p><span className="opacity-50">Langues :</span> Français, Anglais</p>
          <p><span className="opacity-50">Passions :</span> Basketball, Cinéma, Football, Voyager et découvrir</p>
        </div>
      </div>

      <div
        className="px-4 py-3 border-t space-y-2"
        style={{ borderColor: 'var(--border)' }}
      >
        <p className="opacity-50 mb-1">À propos :</p>
        <p style={{ color: 'var(--text)' }}>
          J'ai toujours été à l'aise avec le numérique. Ce qui m'attire dans le
          développement, c'est de construire quelque chose et de le voir progresser.
        </p>
        <p style={{ color: 'var(--text)' }}>
          J'aime particulièrement la phase de conception : imaginer à quoi ressemblera
          un site, ce qu'il contiendra, comment l'organiser.
        </p>
        <p style={{ color: 'var(--text)' }}>
          J'attends de l'entreprise une expérience professionnelle qui me servira pour
          le travail, mais aussi pour la vie.
        </p>
      </div>

      <div
        className="flex justify-between items-center px-4 py-2 border-t text-[10px] opacity-40"
        style={{ borderColor: 'var(--border)' }}
      >
        <span>Document généré automatiquement</span>
        <span>Validité : jusqu'à ce que tu changes de stack</span>
      </div>
    </div>
  )
}

export default IdentityCard