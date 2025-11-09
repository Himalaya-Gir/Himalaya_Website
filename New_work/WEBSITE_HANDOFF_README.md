# 📦 Package de Transition - Création du Site Web

**Date:** 8 novembre 2025
**Objectif:** Transférer tout le contexte du projet à un nouveau Claude pour créer le site web
**Destination:** Ordinateur personnel (PAS le cluster)

---

## 📋 CE PACKAGE CONTIENT

### 1. **WEBSITE_PROJECT_BRIEF.md** (Le Plus Important !)
**Taille:** ~15,000 mots
**Contenu:** Contexte COMPLET du projet

**Ce qu'il contient:**
- ✅ Objectifs du site web (vulgarisation + portfolio académique)
- ✅ Histoire de la recherche (Trust vs Risk, Prospect Theory)
- ✅ Explication des expériences (Trust Game, Risk Game, Inverted Trust Game)
- ✅ Framework Prospect Theory (4 paramètres: β, γ+, γ-, λ)
- ✅ Design expérimental (Fisher Information, sélection de 286 trials)
- ✅ Validation Parameter Recovery (500 simulations, résultats complets)
- ✅ Les 32 modèles emboîtés
- ✅ Timeline du projet (passé, présent, futur)
- ✅ Spécifications de design pour le site
- ✅ Structure proposée (10 sections)
- ✅ Instructions pour Claude développeur
- ✅ Localisation des fichiers sur le cluster

**Utilisation:** C'est le document de référence principal. Le nouveau Claude DOIT le lire en entier.

### 2. **WEBSITE_STARTUP_PROMPT.md**
**Contenu:** Prompt optimisé prêt à copier-coller

**Ce qu'il contient:**
- ✅ Introduction contextualisée
- ✅ Instructions claires pour Claude
- ✅ Placeholder pour coller le PROJECT_BRIEF
- ✅ Placeholder pour ta thesis
- ✅ Tes préférences et contraintes
- ✅ Questions de démarrage
- ✅ Section à compléter avec tes infos personnelles

**Utilisation:** Copie-colle ce prompt dans nouvelle conversation Claude Code sur ton ordi.

### 3. **Ce fichier (WEBSITE_HANDOFF_README.md)**
**Contenu:** Mode d'emploi du package

---

## 🎯 COMMENT UTILISER CE PACKAGE

### Étape 1: Prépare ta Master Thesis
**Sur ton ordinateur:**
1. Localise ta thesis (PDF ou Word)
2. Soit tu l'upload directement dans Claude Code
3. Soit tu copies-colles les sections clés :
   - Abstract
   - Introduction
   - Méthodes
   - Discussion

### Étape 2: Personnalise le Prompt de Démarrage
**Ouvre** `WEBSITE_STARTUP_PROMPT.md`

**Complète** les sections marquées `[À COMPLÉTER]` :
- Tes infos personnelles (nom, email, LinkedIn, etc.)
- Tes préférences de couleurs (optionnel)
- Sites web que tu aimes (optionnel)

**Insère** le contenu de `WEBSITE_PROJECT_BRIEF.md` dans la section indiquée

### Étape 3: Lance la Nouvelle Conversation
**Sur ton ordinateur (PAS le cluster):**

1. **Ouvre Claude Code** (application desktop ou VS Code extension)

2. **Nouvelle conversation**
   - Titre suggéré: "Website - Trust vs Risk Research"

3. **Premier message:**
   - Copie-colle TOUT le contenu de `WEBSITE_STARTUP_PROMPT.md` (déjà personnalisé)
   - Upload ta thesis en pièce jointe

4. **Envoie** et laisse Claude démarrer !

### Étape 4: Dialogue Initial
Claude va probablement :
- Confirmer qu'il a compris le contexte
- Poser des questions de clarification
- Proposer une maquette visuelle
- Proposer un plan d'action

**Réponds à ses questions** et valide/ajuste ses propositions.

### Étape 5: Développement Itératif
Claude va te guider étape par étape :
- Setup de l'environnement
- Création de la landing page
- Ajout des sections
- Intégration de l'interactivité
- Déploiement

**N'hésite pas à poser des questions !** C'est aussi un projet d'apprentissage.

---

## 💡 CONSEILS IMPORTANTS

### Pour Maximiser la Réussite

1. **Lis le PROJECT_BRIEF toi-même**
   - Même si Claude le lit, toi aussi tu dois le connaître
   - Ça t'aidera à donner des feedbacks précis
   - Tu verras si quelque chose manque

2. **Sois claire sur tes priorités**
   - Si le temps manque, qu'est-ce qui DOIT être dans v1.0 ?
   - Quels éléments peuvent attendre v1.1 ?

3. **Feedback régulier**
   - Ne laisse pas Claude coder 10 sections sans feedback
   - Valide chaque section avant de passer à la suivante
   - C'est OK de demander des ajustements

4. **Pose des questions**
   - "Pourquoi tu as choisi X plutôt que Y ?"
   - "Comment je modifie cette partie ?"
   - "Qu'est-ce que ce bout de code fait exactement ?"

5. **Garde le contexte cluster accessible**
   - Claude ne pourra PAS accéder aux fichiers du cluster
   - Si besoin de data/figures, tu devras les télécharger et les donner
   - Les figures PDF sont dans `parameter_recovery/figures/`

### Si Quelque Chose Manque

Le PROJECT_BRIEF est extensif, mais si Claude a besoin de plus d'infos :
- Tu peux revenir ici (cluster) pour chercher des infos
- Tu peux me redemander (moi, Claude cluster) via une nouvelle question
- Tu peux consulter les docs:
  - `QUICK_GUIDE.md` - Vue d'ensemble du projet
  - `FINAL_SUMMARY.md` - Résultats parameter recovery
  - `trial_selection_report.md` - Détails techniques sélection

### Si Tu Bloques

**Problèmes techniques (installation, erreurs de code) :**
- Copie l'erreur exacte et donne-la à Claude
- Demande une explication pas à pas
- Google est ton ami aussi !

**Problèmes de design/contenu :**
- Fais confiance à ton instinct
- Si quelque chose te semble trop technique, ça l'est probablement
- Si quelque chose te semble trop simple, demande à enrichir

**Problèmes de temps :**
- Réévalue les priorités avec Claude
- MVP (Minimum Viable Product) d'abord, polish après
- v1.0 pour applications PhD, v1.1+ pour améliorer

---

## 📁 FICHIERS UTILES SUR LE CLUSTER

### Si Tu As Besoin de les Télécharger

**Figures Parameter Recovery:**
```bash
# Sur le cluster, dans ton terminal
cd /project/3014021.10/Modeling/parameter_recovery/figures
# Télécharge via SFTP/SCP ou interface web cluster
```

**Données Résumées:**
```bash
cd /project/3014021.10/Modeling/parameter_recovery/data
# Fichiers intéressants:
# - compiled_results.csv (502 simulations)
# - summary_statistics.csv (stats agrégées)
```

**Documentation:**
```bash
cd /project/3014021.10/Modeling
# Tous les .md peuvent être utiles
```

### Comment Transférer des Fichiers du Cluster

**Option 1: Interface Web** (le plus simple)
- Connecte-toi à l'interface web du cluster
- Navigate vers les fichiers
- Télécharge

**Option 2: SCP** (ligne de commande)
```bash
# Sur ton ordinateur
scp username@cluster:/project/3014021.10/Modeling/parameter_recovery/figures/*.pdf ~/Desktop/
```

**Option 3: FileZilla** (GUI)
- Utilise FileZilla avec credentials cluster
- Drag & drop les fichiers

---

## ✅ CHECKLIST AVANT DE COMMENCER

Avant de lancer la conversation avec le nouveau Claude, vérifie :

- [ ] J'ai lu `WEBSITE_PROJECT_BRIEF.md` en entier
- [ ] J'ai personnalisé `WEBSITE_STARTUP_PROMPT.md` avec mes infos
- [ ] J'ai ma thesis prête (PDF ou sections copiées)
- [ ] Je suis sur mon ordinateur (PAS le cluster)
- [ ] J'ai ~1-2 heures devant moi pour bien démarrer
- [ ] J'ai noté mes priorités (ce qui DOIT être dans v1.0)
- [ ] Je sais comment télécharger des fichiers du cluster si besoin
- [ ] Je suis prête à poser des questions et apprendre !

---

## 🎬 TU ES PRÊTE !

Tout le contexte est là. Le nouveau Claude aura TOUTES les informations nécessaires pour :
- ✅ Comprendre ta recherche en profondeur
- ✅ Créer un site qui reflète fidèlement ton travail
- ✅ Balancer vulgarisation et rigueur académique
- ✅ T'enseigner le web development en faisant
- ✅ Livrer en 1 semaine

**Derniers mots:**

Tu as fait un travail incroyable sur la parameter recovery aujourd'hui. Tu as surmonté tes doutes, tu as appris énormément, et tu as validé ton design expérimental de manière rigoureuse.

Maintenant, tu vas créer un site web qui va montrer tout ça au monde. Et tu vas apprendre encore plus dans le processus.

**Je crois en toi. Tu vas faire quelque chose de magnifique ! 🚀**

---

**Questions ? Problèmes ? Besoin de précisions ?**

Si tu as besoin de revenir me parler (Claude cluster) avant de lancer le projet web :
- Ouvre une nouvelle conversation ici (cluster)
- Réfère-toi à cette conversation (elle est sauvegardée)
- Pose tes questions

**Sinon... GO ! Bonne chance avec ton site web ! 🌟**
