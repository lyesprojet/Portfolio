export const projects = [
  {
    id: 'plania',
    titre: 'PlanIA',
    enCours: true,
    description: "Gestionnaire de tâches assisté par IA, en cours de développement",
    stack: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'Prisma'],
    detail:
      "Projet personnel mené à deux, avec un principe directeur : l'IA comprend et propose, l'algorithme décide, l'utilisateur valide. Fonctionnalités prévues : saisie de tâches en langage naturel, décomposition en sous-tâches, planification automatique dans les créneaux libres, point de reprise au retour dans l'application et bilan hebdomadaire commenté par l'IA. Le projet vient de démarrer : le socle technique est en place (monorepo pnpm, intégration continue, base PostgreSQL, modèle de langage Ollama en local puis Gemini en production). La prochaine étape est la todo list avec comptes utilisateurs, déployée en ligne.",
    github: 'https://github.com/lyesprojet/PlanIA',
    demo: '',
    images: ['/images/plania/plania-architecture.webp', '/images/plania/plania-roadmap.webp'],
  },
  {
    id: 'velibopt',
    titre: 'VelibOptim',
    description: "Carte interactive du réseau Vélib' reliant les stations par triangulation de Delaunay",
    stack: ['Python', 'SciPy', 'NumPy', 'Folium'],
    detail:
      "Projet universitaire que j’ai dirigé en tant que chef de projet, dans une équipe de 5 personnes. La carte affiche les 1 473 stations de Paris et de la petite couronne, reliées par une triangulation de Delaunay (4 401 liens) colorés du vert au rouge selon leur longueur. Les distances réelles sont calculées avec la formule de haversine, et chaque station reçoit un indice d’espacement qui mesure son isolement par rapport au réseau, de très dense à isolée. La carte propose aussi un regroupement des stations selon le zoom et trois fonds de carte. Les données viennent du flux ouvert Vélib’ Métropole.",
    github: 'https://github.com/lyesprojet/VelibOptim',
    demo: 'https://lyesprojet.github.io/VelibOptim/maCarte.html',
    images: ['/images/veliboptim/1.webp', '/images/veliboptim/2.webp', '/images/veliboptim/3.webp'],
  },
  {
    id: 'hydroclair',
    titre: 'HydroClair',
    description: "Application web de suivi de la qualité de l'eau potable en France",
    stack: ['Python', 'Flask', 'SQLite', 'Jinja2'],
    detail:
      "Projet universitaire réalisé en équipe. L'application s'appuie sur l'API Hub'eau pour permettre de rechercher une commune et de consulter la conformité de son eau paramètre par paramètre. Elle propose aussi une carte interactive qui regroupe les départements par région et une vue dédiée au réseau de l'utilisateur. Les analyses sont importées dans une base SQLite qui peut atteindre plusieurs gigaoctets, avec des scripts d'import dédiés.",
    github: 'https://github.com/lyesprojet/HydroClair',
    demo: '',
    images: ['/images/hydroclair/1.webp', '/images/hydroclair/2.webp', '/images/hydroclair/3.webp'],
  },
]