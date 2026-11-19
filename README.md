# Portfolio d'Elias Semiane

Portfolio personnel d'un étudiant en BUT Informatique (parcours réalisation d'applications), à la recherche d'un stage de développement web du 8 mars au 11 juin 2027.

Site en ligne : https://elias-semiane.vercel.app

## Présentation

Le site propose deux façons de naviguer, avec exactement le même contenu :

- **Mode GUI** (par défaut) : une interface web classique avec des sections Accueil, Projets, Parcours et Contact.
- **Mode terminal** : une interface inspirée de Matrix, pilotée par des commandes écrites au clavier.

Le dernier mode choisi est mémorisé dans le navigateur. Une animation d'introduction n'est jouée qu'une fois par onglet.

## Commandes du terminal

| Commande | Effet |
| --- | --- |
| `help` | Liste des commandes disponibles |
| `whoami` | Carte d'identité et présentation |
| `projets` | Liste des réalisations |
| `skills` | Compétences techniques |
| `experiences` | Parcours |
| `contact` | Moyens de me contacter |
| `clear` | Efface le terminal |
| `exit` | Bascule vers la version classique |

Quelques commandes Unix courantes (`ls`, `sudo`, `cd`...) sont reconnues mais volontairement inactives.

## Technologies

- React 19 et Vite 8
- Tailwind CSS 4
- Framer Motion pour les animations
- Polices Cascadia Code, Space Grotesk et Sora via Fontsource
- ESLint pour la qualité du code
- Déploiement sur Vercel, avec redéploiement automatique à chaque push sur `main`

## Structure du projet

```
src/
  assets/        images importées (avatar, logos)
  components/    composants du terminal et de l'interface classique
  data/          contenu du site (projets, expériences, compétences, contact, commandes)
  hooks/         hooks personnalisés (effet machine à écrire, détection mobile)
public/
  documents/     CV téléchargeable
  images/        captures des projets
```

Le contenu est séparé du code : pour modifier un projet, une compétence ou une information de contact, il suffit d'éditer le fichier correspondant dans `src/data/`.

## Lancer le projet en local

Prérequis : Node.js 20 ou plus récent.

```
git clone https://github.com/lyesprojet/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Le site est alors disponible sur l'adresse affichée dans le terminal (par défaut `http://localhost:5173`).

Autres commandes :

```
npm run build     # génère la version de production dans dist/
npm run preview   # prévisualise la version de production
npm run lint      # vérifie le code avec ESLint
```

## Contact

- Email : elias.semiane@etu.u-pec.fr
- LinkedIn : https://www.linkedin.com/in/elias-semiane
- GitHub : https://github.com/lyesprojet

## Licence

Code distribué sous licence MIT. Les textes, images et le CV restent la propriété de leur auteur.
