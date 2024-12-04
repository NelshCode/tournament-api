#!/bin/bash

# Étape 1 : Installation des dépendances
echo "Installation des dépendances..."
npm install

# Étape 2 : Compilation du projet
echo "Compilation du projet..."
npm run build

# Étape 3 : Lancement du service
echo "Lancement du service..."
npm run start
