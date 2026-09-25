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
  experiences: () => ({ type: 'experiences' }),
  contact: () => ({ type: 'contact' }),
  clear: () => ({ type: 'clear' }),
  exit: () => ({ type: 'exit' }),
}

export const helpContent = {
  lines: [
    'Commandes disponibles :',
    '  whoami       - qui je suis',
    '  projets      - mes réalisations',
    '  skills       - mes compétences',
    '  experiences  - mon parcours',
    '  contact      - me contacter',
    '  exit         - version classique du site',
  ],
}

export const commandesInactives = [
  'ls', 'sudo', 'rm', 'cd', 'pwd', 'cat', 'mkdir', 'touch', 'grep', 'man',
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