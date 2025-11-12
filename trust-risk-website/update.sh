#!/bin/bash

echo "🔄 Arrêt des processus Node..."
killall node 2>/dev/null

echo "📥 Récupération des changements depuis GitHub..."
git pull origin claude/project-description-011CUxigBXJ3H86LyAERvnS2

echo "🚀 Démarrage du serveur..."
npm run dev
