# Tournament Player Ranking API

## Table des matières

- [Installation](#installation)
- [Lancer le projet](#lancer-le-projet)
- [Routes API](#routes-api)
- [Tests](#tests)
- [TODO](#todo)

## Installation

### Prérequis

[Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/).

### Étapes d'installation

1. Clone:

    ```bash
    git clone https://github.com/ton-compte/tournament-api.git
    ```

2. Install:

    ```bash
    cd tournament-api
    npm install
    ```

## Lancer le projet

### Mode développement

Pour lancer le serveur en mode développement :

```bash
npm run dev
```

Le serveur sera disponible à l'adresse <http://localhost:3000>.

### Mode production

Pour lancer le services, deux options :

 ```bash
npm i & npm start:full
```
OU
```bash
./start-service.sh
```

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

1. Lance les tests unitaires :

```bash
npm run test

```

2. Lancer les tests d'intégration

```bash
npm run integration

```

Cela exécutera tous les tests définis dans le répertoire tests/unit ou tests/integration.

## TODO : Liste des tâches à accomplir

- Sécuriser les routes (type d'entré)
- Mise en place d'un middleware pour les erreurs
- Mise en place de log (Datadog ?)
- Mise en place d'une sécurité type authent JWT
- Déployer une base de données indépendantes (Mongo ?)
- Tester la gestion des erreurs
- Tester l'environnement avec un gros tournoi et de nombreux appels
- Configurer un environnement de production sur AWS.
- Mettre en place un pipeline de déploiement (Jenkins/github action).
