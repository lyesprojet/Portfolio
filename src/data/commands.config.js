export const commandesActives = {
  whoami: () => ({ type: 'identity' }),
  help: () => ({ type: 'text', lines: [
    'Commandes disponibles :',
    '  whoami       - qui je suis',
    '  projets      - mes réalisations',
    '  skills       - mes compétences',
    '  experiences  - mon parcours',
    '  contact      - me contacter',
    '  exit         - version classique du site',
  ]}),
  projets: () => ({ type: 'projects' }),
  skills: () => ({ type: 'skills' }),
  experiences: () => ({ type: 'text', lines: ['Section expériences à venir.'] }),
  contact: () => ({ type: 'text', lines: ['Section contact à venir.'] }),
  exit: () => ({ type: 'text', lines: ['Basculement vers le mode classique (à implémenter étape 9).'] }),
}

export const commandesInactives = [
  'ls', 'sudo', 'rm', 'cd', 'pwd', 'cat', 'mkdir', 'clear', 'touch', 'grep', 'man',
]

export function executerCommande(input) {
  const commande = input.trim().toLowerCase()

  if (commandesActives[commande]) {
    return commandesActives[commande]()
  }
  if (commandesInactives.includes(commande)) {
    return { type: 'text', lines: ["Commande reconnue mais non active ici. Tape 'help' pour voir les commandes disponibles."] }
  }
  return { type: 'text', lines: [`command not found: ${commande}`] }
}