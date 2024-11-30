# Tournament Player Ranking API

Cette API permet de gérer un tournoi en suivant le classement des joueurs. Elle permet d'ajouter des joueurs, de mettre à jour leurs points, de récupérer leurs informations (avec classement), de retourner la liste des joueurs triés et de supprimer tous les joueurs à la fin du tournoi.

## Table des matières

- [Technologies](#technologies)
- [Installation](#installation)
- [Lancer le projet](#lancer-le-projet)
- [Routes API](#routes-api)
- [Tests](#tests)
- [Déploiement](#déploiement)
- [Ressources](#ressources)

## Technologies

- **Node.js** : Serveur web
- **TypeScript** : Langage de programmation
- **Express** : Framework web pour construire l'API
- **SQLite** : Base de données légère pour stocker les joueurs et leurs points
- **Jest** : Framework de tests unitaires
- **Supertest** : Outil pour tester les routes de l'API

## Installation

### Prérequis

Avant d'installer le projet, assure-toi d'avoir installé [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/).

### Étapes d'installation

1. Clone ce repository :
    ```bash
    git clone https://github.com/ton-compte/tournament-api.git
    ```

2. Installe les dépendances :
    ```bash
    cd tournament-api
    npm install
    ```

## Lancer le projet

### Mode développement

Pour lancer le serveur en mode développement, qui utilise `ts-node` (sans avoir à compiler manuellement le code TypeScript) :

```bash
npm run dev
```

Le serveur sera disponible à l'adresse http://localhost:3000.

### Mode production

1. Compile le projet TypeScript en JavaScript : :
    ```bash
    npm run build
    ```

2. Lance le projet compilé :
    ```bash
    npm run start
    ```
Le serveur sera disponible à l'adresse http://localhost:3000.

## Routes API
### 1. Ajouter un joueur
####  Méthode: POST /api/players
#### Corps de la requête :
    ```bash
    {
  "pseudo": "NomDuJoueur"
}

    ```