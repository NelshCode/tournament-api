# Tournament Player Ranking API

Cette API permet de gérer un tournoi en suivant le classement des joueurs. Elle permet d'ajouter des joueurs, de mettre à jour leurs points, de récupérer leurs informations (avec classement), de retourner la liste des joueurs triés et de supprimer tous les joueurs à la fin du tournoi.

## Table des matières

- [Technologies](#technologies)
- [Installation](#installation)
- [Lancer le projet](#lancer-le-projet)
- [Routes API](#routes-api)
- [Tests](#tests)

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

Le serveur sera disponible à l'adresse <http://localhost:3000>.

### Mode production

1. Compile le projet TypeScript en JavaScript : :

    ```bash
    npm run build
    ```

2. Lance le projet compilé :

    ```bash
    npm run start
    ```

Le serveur sera disponible à l'adresse <http://localhost:3000>.

## Routes API

### 1. Ajouter un joueur

#### Méthode: POST /api/players

**Corps de la requête**

```json
{
  "pseudo": "NomDuJoueur"
}
```

**Réponse**

```json
{
  "message": "Joueur ajouté : NomDuJoueur"
}

```

### 2. Mettre à jour les points d'un joueur

#### Méthode : PUT /api/players/:pseudo/points

**Paramètres**

- pseudo : Le pseudo du joueur
Corps de la requête :

```json
{
  "points": 50
}

```

**Réponse**

```json
{
  "message": "Points mis à jour pour : NomDuJoueur"
}

```

### 3. Récupérer les informations d'un joueur (avec son classement)

#### Méthode : GET /api/players/:pseudo

**Réponse**

```json
{
  "pseudo": "NomDuJoueur",
  "points": 50,
  "rank": 1
}

```

### 4. Récupérer tous les joueurs

#### Méthode : GET /api/players

**Réponse**

```json
[
  {
    "pseudo": "NomDuJoueur1",
    "points": 50
  },
  {
    "pseudo": "NomDuJoueur2",
    "points": 30
  }
]
```

### 5. Supprimer tous les joueurs

#### Méthode : DELETE /api/players

**Réponse**

```json
{
  "message": "Tous les joueurs ont été supprimés."
}

```

## Tests

### Lancer les tests

Les tests sont réalisés avec Jest et Supertest. Pour les exécuter :

1. Lance les tests :

```bash
npm run test

```

Cela exécutera tous les tests définis dans le répertoire tests/.

### Tests inclus

- Ajouter un joueur
- Mettre à jour les points d'un joueur
- Vérifier le classement d'un joueur
- Supprimer tous les joueurs
- Vérification des routes de l'API