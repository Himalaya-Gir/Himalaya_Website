# 💡 Brainstorming Website - Idées et Décisions

**Date:** 8 novembre 2025
**Participants:** Toi + Claude (cluster)
**Contexte:** Discussion sur création d'un site web pour la recherche Trust vs Risk

---

## 🎯 OBJECTIFS CONFIRMÉS

### Ton objectif principal
> "Vulgarisation scientifique - Expliquer ton étude au grand public, mais aussi Portfolio académique - Montrer ton travail aux chercheurs/superviseurs"

### Publics cibles
1. **Grand public / Famille / Amis** - Comprendre ta recherche sans background académique
2. **Recruteurs PhD / Communauté scientifique** - Évaluer ta rigueur et tes compétences

### Contraintes identifiées
- ⏰ **URGENT** - 1 semaine pour v1.0 (applications PhD)
- 🎓 **Débutante en web** - Besoin d'apprentissage guidé
- 💻 **Travail local** - Sur ton ordi, pas le cluster
- 🔒 **Pas de code partagé** - Recherche en cours
- ✅ **Noms réels OK**
- 🛠️ **Code robuste** - Maintenable et évolutif

---

## ✨ CONCEPT CHOISI: STORY-DRIVEN INTERACTIF

### Pourquoi ce choix ?
> "L'option story driven a l'air magique!!!"

**Avantages identifiés:**
- ✅ **Unique** - Pas beaucoup de sites de recherche comme ça
- ✅ **Accessible** - N'importe qui peut comprendre
- ✅ **Académiquement crédible** - Montre rigueur ET créativité
- ✅ **Portfolio impressionnant** - Pour futurs emplois/PhD
- ✅ **Évolutif** - On peut ajouter des sections au fur et à mesure
- ✅ **Fun** - À créer et à visiter !

### Inspirations citées
- **Explorable Explanations** (Nicky Case) - Narratif, interactif, pédagogique
- **Distill.pub** - Académique mais accessible
- Focus sur "montrer" plutôt que "dire"

---

## 🏗️ STRUCTURE PROPOSÉE (10 SECTIONS)

### 1. Landing Page - The Hook
**Objectif:** Capturer l'attention immédiatement

**Idée clé:**
```
Question accrocheuse: "Feriez-vous confiance à un inconnu avec 10€?"
→ Choix interactif (Oui/Non/Ça dépend)
→ Réponse personnalisée selon le choix
→ Scroll reveal: "Mais si c'était un dé qui décidait?"
```

**Éléments:**
- Animation eye-catching
- Question provocante
- Transition smooth vers l'histoire

---

### 2. The Question
**Objectif:** Présenter le problème de recherche

**Contenu:**
- Pourquoi Trust ≠ Risk (même si économie dit oui)
- Comparaison visuelle côte à côte
- **Interactive:** Jouer aux deux jeux, ressentir la différence

---

### 3. The Science - Prospect Theory
**Objectif:** Expliquer le framework théorique

**Contenu:**
- Intro gentle à la Prospect Theory
- Les 4 paramètres (β, γ+, γ-, λ)
- **Interactive: Parameter Explorer**
  - Sliders pour chaque paramètre
  - Graphiques live (value function, weighting function)
  - Exemples de scénarios qui se mettent à jour en temps réel

---

### 4. The Challenge - Experimental Design
**Objectif:** Montrer l'innovation méthodologique

**Contenu:**
- Problème: Comment estimer 4 paramètres efficacement ?
- Approche naïve: 500 trials = 3h = participant épuisé
- Solution: Fisher Information optimization
- Visuel: 17,955 → 286 trials
- **Interactive:** Click-through du process de sélection

---

### 5. The Validation - Parameter Recovery
**Objectif:** Montrer la rigueur scientifique

**Contenu:**
- Question: "La théorie dit que ça marche. Mais en vrai ?"
- Timeline visuelle de notre investigation (aujourd'hui!)
  - Inquiétudes initiales
  - Test de l'hypothèse "local minima"
  - Résultats de validation finale
- **Interactive: Explore Recovery Quality**
  - Scatterplots (true vs estimated)
  - Filtres (paramètre, noise level)
  - Voir simulations individuelles

---

### 6. The Innovation - Inverted Trust Game
**Objectif:** Expliquer la contribution méthodologique

**Contenu:**
- Problème: Trust Game classique a des confounds
- Solution: Inverted design
- **Interactive:** Jouer les deux versions, voir la différence

---

### 7. Where We Are - Timeline
**Objectif:** Contextualiser le projet

**Contenu:**
- Timeline visuelle:
  - ✅ Design complété
  - ✅ Validation complétée
  - 🔄 Étude pilote (prochain)
  - ⏳ Étude principale
  - ⏳ fMRI
  - ⏳ Publication

---

### 8. Behind the Scenes - Learning Journey
**Objectif:** Humaniser la recherche

**Contenu:**
- Histoire personnelle: Apprendre à coder, surmonter défis
- "Je veux vraiment faire les choses bien, même si ça prend plus de temps"
- Lessons learned
- Encouragement pour autres étudiants
- Remerciements

---

### 9. For Researchers - Technical Details
**Objectif:** Satisfaire les lecteurs académiques

**Contenu:**
- Sections collapsibles avec:
  - Méthodologie complète
  - Détails statistiques
  - Lien GitHub (quand ready)
  - Preprint (quand ready)
  - Références

---

### 10. Contact & Links
**Objectif:** Faciliter la connexion

**Contenu:**
- Email, LinkedIn, ResearchGate, etc.
- Formulaire de contact (optionnel)

---

## 🎨 DESIGN AESTHETIC

### Couleurs Suggérées
**Thème:** Professionnel mais chaleureux

- **Primaire:** Bleus/Teals (trust, science, professionnalisme)
- **Accent:** Orange/Coral (engagement, chaleur, accessibilité)
- **Background:** Blanc/Gris clair (clarté, lisibilité)
- **Code blocks:** Syntax highlighting subtil

### Typographie
- **Headers:** Sans-serif moderne (Inter, Poppins, Montserrat)
- **Body:** Serif lisible OU sans-serif clean (Lora, Source Sans Pro, Open Sans)
- **Code:** Monospace (Fira Code, JetBrains Mono)

### Interactions
- **Scroll animations** - Smooth mais pas overwhelming
- **Hover effects** - Indices d'interactivité clairs
- **Transitions** - Fluides et naturelles
- **Responsive** - Mobile-first design
- **Performance** - Fast loading (images optimisées)

---

## 💻 TECH STACK RECOMMANDÉE

### Framework: Astro
**Pourquoi:**
- ✅ Super rapide (static site generation)
- ✅ Facile à apprendre pour débutant
- ✅ Support Markdown (pour contenu)
- ✅ Composants réutilisables
- ✅ Parfait pour mix static + interactive
- ✅ Excellente documentation

**Alternative considérée:** Next.js (plus complexe, overkill pour ce projet)

### Styling: Tailwind CSS
**Pourquoi:**
- ✅ Design moderne sans CSS complexe
- ✅ Responsive automatique
- ✅ Utility-first = prototyping rapide
- ✅ Customizable facilement
- ✅ Grande communauté

**Alternative considérée:** CSS pur (plus de travail, plus difficile)

### Interactivité
- **Vanilla JavaScript** pour custom interactions
- **Plotly.js** pour visualisations de données
- **Simple animations** avec CSS/GSAP
- **Pas de framework lourd** (React, Vue) - pas nécessaire

### Hébergement: GitHub Pages
**Pourquoi:**
- ✅ Gratuit
- ✅ Simple à setup
- ✅ URL professionnelle (username.github.io)
- ✅ Facile à update (git push)
- ✅ Custom domain support (optionnel)

**Alternative considérée:** Netlify (aussi bien, choix au goût)

---

## 🎮 ÉLÉMENTS INTERACTIFS PRIORITAIRES

### Must-Have (v1.0)

#### 1. Trust Game Simulator
**Concept:**
- Interface simple: Slider pour montant d'investissement
- Visualisation de l'outcome basé sur taux de retour
- Comparaison: Expected Value vs Certainty Equivalent
- Permet de "ressentir" la décision

**Technologie:** Vanilla JS + CSS

#### 2. Prospect Theory Parameter Explorer
**Concept:**
- 4 sliders (β, γ+, γ-, λ)
- Live updates de:
  - Value function graph
  - Probability weighting function graph
  - Exemple de décision d'investissement
- Voir comment paramètres affectent comportement

**Technologie:** Plotly.js pour graphiques, JS pour logique

#### 3. Parameter Recovery Explorer (basique)
**Concept:**
- Scatterplot: True vs Estimated parameters
- Dropdown pour choisir paramètre (β, γ+, γ-, λ)
- Statistiques affichées (MAE, correlation)

**Technologie:** Plotly.js

### Nice-to-Have (v1.1+)

#### 4. Model Comparison Tree
**Concept:**
- Arbre interactif des 32 modèles
- Click pour voir spécification
- Highlights des différences

#### 5. Timeline Interactive
**Concept:**
- Scroll-triggered animations
- Zoom sur chaque étape
- Photos/screenshots des étapes

#### 6. Quiz "Quel est ton profil PT ?"
**Concept:**
- Quelques questions de décisions
- Estimation rough des paramètres
- Fun et engageant !

---

## 📚 TON ET VOIX PAR SECTION

### Pour Sections Grand Public (1-6, 8)
**Style:**
- Conversationnel: "Tu", direct address
- Curieux: Questions, invitations à explorer
- Humble: Reconnaître complexité
- Engageant: Raconter une histoire
- Visuel: Montrer > Dire

**Exemple:**
> "Imagine qu'un inconnu te propose un deal: donne-lui 10€, il va les tripler, et peut-être t'en rendre une partie. Tu lui ferais confiance ? Maintenant imagine le même deal, mais c'est un dé qui décide combien tu récupères. Mêmes probabilités, sensation différente. Cette différence ? C'est exactement ce qu'on étudie."

### Pour Sections Académiques (9)
**Style:**
- Précis: Terminologie correcte
- Rigoureux: Méthodologie claire
- Transparent: Reconnaître limitations
- Complet: Liens vers détails
- Professionnel: Ton académique mais pas pompeux

**Exemple:**
> "Nous avons employé un design expérimental D-optimal utilisant la Fisher Information Matrix pour sélectionner 286 trials parmi un pool de 17,955 candidats, obtenant une réduction de 98.4% tout en maintenant une précision acceptable pour les quatre paramètres de Prospect Theory (β, γ+, γ-, λ). La validation subséquente par parameter recovery (N=500 simulations) a confirmé une qualité de récupération modérée adaptée aux comparaisons intra-sujet."

### Pour Behind-the-Scenes (8)
**Style:**
- Authentique: Vrais défis, vrai apprentissage
- Réflectif: Ce qui a marché, pas marché
- Encourageant: Pour autres étudiants
- Humain: OK de galérer, science = itératif

**Exemple:**
> "Quand le premier test de parameter recovery a montré des erreurs énormes, j'ai paniqué. 'Est-ce que toute l'étude est fichue ?' On a investigué systématiquement - testé si c'était un problème d'optimisation (non), considéré si on avait besoin de plus de trials (impossible d'en ajouter). Finalement compris: c'est un problème d'identifiabilité, et en fait c'est OK vu nos questions de recherche. Leçon: Parfois 'assez bon' est scientifiquement rigoureux."

---

## ⏱️ TIMELINE RÉALISTE (1 SEMAINE)

### Jour 1-2: Fondations
- Setup environnement (Astro + Tailwind)
- Structure du projet
- Landing page prototype
- Validation du design avec toi

### Jour 3-4: Contenu Core
- Sections 2-4 développées
- Contenu inséré
- Design responsive
- Navigation fonctionnelle

### Jour 5-6: Interactivité
- Trust Game simulator
- PT Parameter Explorer
- Parameter Recovery plots basiques
- Tests sur différents devices

### Jour 7: Polish & Deploy
- Behind-the-scenes section
- Contact section
- Peaufinage design
- Tests finaux
- Déploiement GitHub Pages
- **URL PRÊTE !**

---

## 🎓 PHILOSOPHIE D'APPRENTISSAGE

### Ce Que Tu as Exprimé
> "Je veux vraiment faire les choses de manière robuste en code, je ne veux pas faire n'importe quoi car je ne saurais pas debugger bien. Je préfère aller doucement et être sûre de tout bien faire."

### Approche Pédagogique Recommandée
1. **Expliquer avant de coder** - Comprendre le "pourquoi"
2. **Coder étape par étape** - Pas de gros blocs mystérieux
3. **Commenter abondamment** - Code = documentation
4. **Tester fréquemment** - Voir résultat à chaque étape
5. **Encourager questions** - Pas de question bête
6. **Itérer** - v1.0 puis améliorer, pas perfection immédiate

---

## 📋 CRITÈRES DE SUCCÈS

### Pour le Site
- [ ] Loads < 3 secondes
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Accessible (keyboard, screen reader)
- [ ] Interactive elements smooth
- [ ] Contenu précis et clair
- [ ] Balance vulgarisation/rigueur
- [ ] Visiteur comprend la recherche après visite
- [ ] Impressionne comités PhD

### Pour Ton Apprentissage
- [ ] Tu comprends HTML/CSS/JS basics
- [ ] Tu comprends static site generation
- [ ] Tu peux modifier le contenu seule
- [ ] Tu peux déployer updates seule
- [ ] Tu te sens empowered, pas overwhelmed
- [ ] Tu es fière du résultat !

---

## 💡 IDÉES ADDITIONNELLES (BACKLOG)

### Fonctionnalités Futures (Post-v1.0)
- **Blog section** - Documenter le parcours de recherche au fur et à mesure
- **Multi-langue** - Français + Anglais
- **Newsletter** - Pour tenir au courant des avancées
- **Animated diagrams** - Expliquer concepts complexes visuellement
- **Video embeds** - Si tu fais des présentations
- **Data download** - Pour chercheurs intéressés (après publication)

### Améliorations UX
- **Dark mode** - Toggle pour mode sombre
- **Accessibility features** - Taille de texte ajustable, contraste
- **Print-friendly version** - Pour sections académiques
- **Share buttons** - Partage facile sur réseaux sociaux

### Analytics (Optionnel)
- **Google Analytics** - Voir qui visite, d'où
- **Heatmaps** - Comprendre comment visiteurs interagissent
- **A/B testing** - Tester différentes versions de sections

---

## ✅ DÉCISIONS FINALES

### Confirmé
- ✅ **Story-driven interactif** - Pas statique
- ✅ **Astro + Tailwind** - Tech stack
- ✅ **1 semaine timeline** - v1.0 pour applications PhD
- ✅ **Apprentissage intégré** - Expliquer en codant
- ✅ **Travail local** - Sur ton ordi, pas cluster
- ✅ **Code robuste** - Maintenable et évolutif

### À Confirmer avec Nouveau Claude
- Couleurs exactes (ton choix final)
- Priorités précises pour v1.0 (si manque de temps)
- Détails des interactions (animations, transitions)

---

## 🚀 PROCHAINE ÉTAPE

**Tu es prête à:**
1. Lire `WEBSITE_PROJECT_BRIEF.md` (contexte complet)
2. Personnaliser `WEBSITE_STARTUP_PROMPT.md` (avec tes infos)
3. Lancer nouvelle conversation sur ton ordi
4. Créer quelque chose de magnifique ! ✨

**Tout est documenté. Tout est prêt. Go ! 🎉**
