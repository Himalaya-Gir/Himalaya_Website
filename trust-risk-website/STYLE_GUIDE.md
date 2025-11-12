# Guide de Style - Trust & Risk Research Website

## 🎨 Palette de Couleurs

### Couleurs Principales
```css
--cream: #FFF9ED        /* Fond principal */
--navy: #003049         /* Texte principal, titres */
--burgundy: #780000     /* Accents, emphases, liens */
--light-blue: #669bbc   /* Détails secondaires */
```

### Utilisation des Couleurs

#### ✅ FAIRE:
- Fond de page: `#FFF9ED` (cream)
- Texte principal: `#003049` (navy)
- Titres: `#003049` (navy)
- Accents/Liens: `#780000` (burgundy)
- Détails secondaires: `#669bbc` (light blue)
- Sections foncées: `#003049` avec texte `#FFF9ED`

#### ❌ NE JAMAIS FAIRE:
- **PAS de fond blanc (`#FFFFFF` ou `bg-white`)** - Toujours utiliser `#FFF9ED`
- **PAS de rouge sur bleu** - Non lisible
- **PAS de bleu sur rouge** - Non lisible

### Combinaisons Valides

| Fond | Texte | Usage |
|------|-------|-------|
| `#FFF9ED` | `#003049` | Page principale, sections claires |
| `#003049` | `#FFF9ED` | Sections foncées, footer |
| `#780000` | `#FFF9ED` | Boutons actifs, tags importants |
| `#669bbc` | `white` | Tags secondaires |

---

## 📝 Typographie

### Police
- **Unique**: Figtree pour tout
- Classe: `font-figtree`

### Hiérarchie
```css
h1: text-5xl md:text-6xl font-bold text-[#003049]
h2: text-3xl md:text-4xl font-bold text-[#003049]
h3: text-xl font-semibold text-[#780000] ou text-[#003049]
Body: text-base text-[#003049]/80
Small: text-sm text-[#003049]/70
```

### Emphase
- **Bold**: `<strong>` ou `font-bold`
- **Italique**: `<em class="italic">` pour nuances subtiles
- **Mix**: Combiner bold + italique si besoin

---

## 🎯 Composants Standard

### Boutons

#### Bouton Principal
```html
<button class="font-figtree px-6 py-3 bg-[#780000] text-[#FFF9ED] rounded-lg hover:bg-[#780000]/90 transition-all font-semibold">
  Texte
</button>
```

#### Bouton Secondaire
```html
<button class="font-figtree px-6 py-3 bg-[#FFF9ED] text-[#003049] border-2 border-[#003049] rounded-lg hover:bg-[#003049] hover:text-[#FFF9ED] transition-all font-semibold">
  Texte
</button>
```

#### Bouton Toggle/Filtre
```html
<!-- Inactif -->
<button class="font-figtree px-4 py-2 bg-[#FFF9ED] text-[#003049] border-2 border-[#003049] rounded-lg transition-all">
  Catégorie
</button>

<!-- Actif -->
<button class="font-figtree px-4 py-2 bg-[#780000] text-[#FFF9ED] border-2 border-[#780000] rounded-lg transition-all">
  Catégorie
</button>
```

### Champs de Saisie

```html
<input
  type="text"
  class="w-full px-6 py-4 font-figtree text-lg bg-[#FFF9ED] border-2 border-[#003049]/20 rounded-lg focus:border-[#780000] focus:outline-none focus:ring-2 focus:ring-[#780000]/20 transition-all"
  placeholder="Rechercher..."
/>
```

**IMPORTANT**:
- ❌ PAS `bg-white`
- ✅ `bg-[#FFF9ED]`

### Tags/Badges

```html
<span class="inline-block px-3 py-1.5 bg-[#780000] text-[#FFF9ED] rounded-lg text-sm font-semibold">
  Tag
</span>
```

**IMPORTANT**:
- ❌ PAS `rounded-full` (forme patate)
- ✅ `rounded-lg` (rectangle avec bords arrondis)
- ❌ PAS d'emojis dans les tags ou textes

### Cartes

```html
<div class="bg-[#FFF9ED] border-l-4 border-[#780000] rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
  <!-- Contenu -->
</div>
```

---

## 📐 Sections

### Section avec Numéro Vertical

Utiliser le composant `<SectionNumbered>`:

```astro
<SectionNumbered
  number="01"
  title="Titre de la section"
  bgColor="bg-[#780000]"
  textColor="text-[#FFF9ED]"
>
  <p>Contenu...</p>
</SectionNumbered>
```

**Alternance des couleurs**:
- Sections impaires: `bg-[#780000]`
- Sections paires: `bg-[#003049]`

### Section avec Bordure Gauche

Utiliser le composant `<SectionBordered>`:

```astro
<SectionBordered
  title="Titre"
  borderColor="border-[#669bbc]"
>
  <p>Contenu...</p>
</SectionBordered>
```

**Couleurs de bordure courantes**:
- `border-[#669bbc]` (bleu clair)
- `border-[#780000]` (burgundy)
- `border-[#003049]` (navy)

### Section Fond Foncé

Utiliser le composant `<DarkSection>`:

```astro
<DarkSection
  title="Titre Important"
  bgColor="bg-[#003049]"
>
  <p class="text-[#FFF9ED]">Contenu...</p>
</DarkSection>
```

---

## 🔲 Bordures et Arrondis

### Standards
- **Boutons**: `rounded-lg` (8px)
- **Cartes**: `rounded-lg` (8px)
- **Tags**: `rounded-lg` (8px) - **JAMAIS `rounded-full`**
- **Inputs**: `rounded-lg` (8px)
- **Sections**: `rounded-lg` (8px)

### Bordures
- **Épaisseur standard**: `border-2`
- **Bordure gauche accent**: `border-l-4`
- **Couleurs**: Toujours `border-[#003049]`, `border-[#780000]`, ou `border-[#669bbc]`

---

## 🎭 États Interactifs

### Hover
```css
hover:shadow-xl
hover:-translate-y-1
hover:bg-[#780000]/90
```

### Focus (pour inputs)
```css
focus:border-[#780000]
focus:outline-none
focus:ring-2
focus:ring-[#780000]/20
```

### Active (pour boutons toggle)
```css
/* Ajouter la classe 'active' via JavaScript */
.active {
  background-color: #780000;
  border-color: #780000;
  color: #FFF9ED;
}
```

---

## 📱 Responsive

### Breakpoints Tailwind
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Utilisation
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl">Titre</h1>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## 🚫 Règles Absolues

### ❌ JAMAIS:
1. **Fond blanc** (`bg-white` ou `#FFFFFF`) - Utiliser `bg-[#FFF9ED]`
2. **Rouge sur bleu** - Non lisible
3. **Forme patate** (`rounded-full`) - Utiliser `rounded-lg`
4. **Emojis** - Utiliser des mots ou icônes SVG
5. **Polices différentes** - Uniquement Figtree
6. **Couleurs hors palette** - Uniquement #FFF9ED, #003049, #780000, #669bbc
7. **Tirets cadratin (—)** - Toujours remplacer par des virgules

### ✅ TOUJOURS:
1. **Figtree** pour toute typographie
2. **#FFF9ED** pour fonds clairs
3. **#003049** pour texte principal
4. **#780000** pour accents/liens
5. **rounded-lg** pour tous les éléments (8px)
6. **Transitions** sur hover (`transition-all`)

---

## 🎨 Exemples de Couleurs de Tags

```css
/* Core/Important */
.tag-core {
  background-color: #780000;
  color: #FFF9ED;
}

/* Primary category */
.tag-primary {
  background-color: #003049;
  color: #FFF9ED;
}

/* Secondary category */
.tag-secondary {
  background-color: #669bbc;
  color: white;
}
```

**Rotation pour multiples tags**:
1. Burgundy (#780000) + cream text
2. Navy (#003049) + cream text
3. Light blue (#669bbc) + white text
4. Répéter

---

## 📋 Checklist Avant Commit

- [ ] Aucun `bg-white`
- [ ] Aucun emoji
- [ ] Aucun `rounded-full`
- [ ] Aucun tiret cadratin (—)
- [ ] Uniquement palette de couleurs autorisée
- [ ] Uniquement `font-figtree`
- [ ] Pas de rouge sur bleu
- [ ] Transitions sur hover
- [ ] Responsive (`md:`, `lg:`)

---

**Dernière mise à jour**: 9 Novembre 2025
