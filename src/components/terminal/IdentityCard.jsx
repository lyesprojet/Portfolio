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
          className="w-32 h-36 flex-shrink-0 flex items-center justify-center border"
          style={{ borderColor: 'var(--border)', backgroundColor: '#0a0a0a' }}
        >
          <span className="opacity-30 text-xs text-center">PHOTO</span>
        </div>

        <div className="flex-1 space-y-2">
          <p><span className="opacity-50">Nom :</span> SEMIANE</p>
          <p><span className="opacity-50">Prénom :</span> Elias</p>
          <p><span className="opacity-50">Statut :</span> Étudiant développeur</p>
          <p><span className="opacity-50">Formation :</span> BUT Informatique, 3e année</p>
          <p><span className="opacity-50">Localisation :</span> Paris </p>
          <p><span className="opacity-50">Disponibilité :</span> A la recherche d'une alternance dès que possible ou d'un stage du 8 mars au 11 juin 2027</p>
          <p><span className="opacity-50">Langues :</span> Français, Anglais</p>
          <p><span className="opacity-50">Passions :</span> Basketball, Cinéma, Football, Voyager et découvrir</p>
        </div>
      </div>

      <div
        className="px-4 py-3 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <p className="opacity-50 mb-1">À propos :</p>
        <p style={{ color: 'var(--text)' }}>
          [Ton texte libre ici. Par exemple : ce qui te motive dans le développement,
          ta manière de travailler, un projet qui t'a marqué, ou simplement ce que tu
          aimes faire en dehors du code.]
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