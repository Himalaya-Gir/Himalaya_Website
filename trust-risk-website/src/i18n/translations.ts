export const languages = {
  en: 'English',
  fr: 'Français'
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.journey': 'Research Journey',
    'nav.about': 'About',
    'nav.references': 'References',
    'nav.explore': 'Explore the Research',
    'nav.language': 'FR',

    // Hero Section
    'hero.title': 'Would you trust a <em class="italic">stranger</em><br/>with €10?',
    'hero.subtitle': 'What if it was a dice roll instead?',
    'hero.intro': 'Traditional economics treats trust and risk as identical. But <em class="italic">behaviorally</em>, they\'re profoundly different. This research uses <strong>Prospect Theory</strong> to understand why.',

    // Question Section
    'question.title': 'The Question: Why Trust ≠ Risk',
    'question.trust.title': 'Trust Game',
    'question.trust.step1': 'You have €10',
    'question.trust.step2': '→ Invest with Partner B',
    'question.trust.step3': '→ Amount <span class="font-bold">triples</span>',
    'question.trust.step4': '→ Partner decides what to return',
    'question.trust.uncertainty': 'The uncertainty:',
    'question.trust.uncertaintyDesc': 'Will they be generous or selfish?',
    'question.risk.title': 'Risk Game',
    'question.risk.step1': 'You have €10',
    'question.risk.step2': '→ Invest in lottery',
    'question.risk.step3': '→ Amount <span class="font-bold">triples</span>',
    'question.risk.step4': '→ Computer randomly returns money',
    'question.risk.uncertainty': 'The uncertainty:',
    'question.risk.uncertaintyDesc': 'Pure chance, no human decision',
    'question.quote': '"The fact that investments and returns are positive in most experiments is a puzzle from a game-theoretic viewpoint."',
    'question.quoteAuthor': 'Berg, Dickhaut, & McCabe (1995)',

    // About Section
    'about.title': 'About This Research',
    'about.intro': 'This research project investigates whether <strong>Prospect Theory</strong>, a <em class="italic">Nobel Prize-winning</em> framework for understanding risk decisions, can explain trust behavior when we properly control for the type of <em class="italic">uncertainty</em> involved.',
    'about.stat1': 'Nested Models<br/>Tested',
    'about.stat2': 'Optimally Selected<br/>Trials',
    'about.stat3': 'Parameters<br/>Estimated',
    'about.researcher': 'Researcher:',
    'about.position': 'Research Assistant',
    'about.institution': 'Institution:',
    'about.institutionName': 'Radboud University, Donders Institute',
    'about.lab': 'Lab:',
    'about.labName': 'Decision Neuroscience Lab',
    'about.supervisors': 'Supervisors:',
    'about.supervisorNames': 'Elijah Galvan, Cătălina Rățală, Alan Sanfey',

    // Research Process Timeline
    'process.title': 'Research Journey',
    'process.subtitle': 'Building a robust framework for understanding trust and risk',
    'process.step1.title': 'Literature Review',
    'process.step1.period': 'Phase 1',
    'process.step1.desc': 'Extensive review of trust game paradigms, Prospect Theory applications, and behavioral economics literature to identify the theoretical gap.',
    'process.step2.title': 'Experimental Design',
    'process.step2.period': 'Phase 2',
    'process.step2.desc': 'Designed the Trust Game and Risk Game with matched probability distributions. Developed the Inverted Trust Game as a methodological control.',
    'process.step3.title': 'Trial Set Optimization',
    'process.step3.period': 'Phase 3',
    'process.step3.desc': 'Used Fisher Information Matrix and Bayesian optimization to select 286 optimal trials across 32 nested models for maximum parameter discriminability.',
    'process.step4.title': 'Implementation',
    'process.step4.period': 'Phase 4',
    'process.step4.desc': 'Building the experimental platform with robust computational modeling pipeline and real-time data validation.',
    'process.step5.title': 'Data Collection',
    'process.step5.period': 'Upcoming',
    'process.step5.desc': 'Planned recruitment and testing phase to empirically validate the theoretical framework.',

    // Footer
    'footer.position': 'Research Assistant in Cognitive Neuroscience',
    'footer.rights': '© 2025 Himalaya Girard. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.journey': 'Parcours de Recherche',
    'nav.about': 'À Propos',
    'nav.references': 'Références',
    'nav.explore': 'Explorer la Recherche',
    'nav.language': 'EN',

    // Hero Section
    'hero.title': 'Feriez-vous confiance à un inconnu<br/>avec 10€ ?',
    'hero.subtitle': 'Et si c\'était un lancer de dés ?',
    'hero.intro': 'L\'économie traditionnelle traite la confiance et le risque comme identiques. Mais <em class="italic">comportementalement</em>, ils sont profondément différents. Cette recherche utilise la <strong>Théorie des Perspectives</strong> pour comprendre pourquoi.',

    // Question Section
    'question.title': 'La Question : Pourquoi Confiance ≠ Risque',
    'question.trust.title': 'Jeu de Confiance',
    'question.trust.step1': 'Vous avez 10€',
    'question.trust.step2': '→ Investir avec Partenaire B',
    'question.trust.step3': '→ Montant <span class="font-bold">triple</span>',
    'question.trust.step4': '→ Le partenaire décide du retour',
    'question.trust.uncertainty': 'L\'incertitude :',
    'question.trust.uncertaintyDesc': 'Sera-t-il généreux ou égoïste ?',
    'question.risk.title': 'Jeu de Risque',
    'question.risk.step1': 'Vous avez 10€',
    'question.risk.step2': '→ Investir dans une loterie',
    'question.risk.step3': '→ Montant <span class="font-bold">triple</span>',
    'question.risk.step4': '→ L\'ordinateur retourne aléatoirement',
    'question.risk.uncertainty': 'L\'incertitude :',
    'question.risk.uncertaintyDesc': 'Pur hasard, aucune décision humaine',
    'question.quote': '« Le fait que les investissements et les retours soient positifs dans la plupart des expériences est un casse-tête du point de vue de la théorie des jeux. »',
    'question.quoteAuthor': 'Berg, Dickhaut, & McCabe (1995)',

    // About Section
    'about.title': 'À Propos de Cette Recherche',
    'about.intro': 'Ce projet de recherche étudie si la <strong>Théorie des Perspectives</strong>, un cadre théorique <em class="italic">primé par le prix Nobel</em> pour comprendre les décisions risquées, peut expliquer le comportement de confiance lorsque nous contrôlons correctement le type d\'<em class="italic">incertitude</em> impliquée.',
    'about.stat1': 'Modèles Imbriqués<br/>Testés',
    'about.stat2': 'Essais Optimalement<br/>Sélectionnés',
    'about.stat3': 'Paramètres<br/>Estimés',
    'about.researcher': 'Chercheuse :',
    'about.position': 'Assistante de Recherche',
    'about.institution': 'Institution :',
    'about.institutionName': 'Université Radboud, Institut Donders',
    'about.lab': 'Laboratoire :',
    'about.labName': 'Decision Neuroscience Lab',
    'about.supervisors': 'Superviseurs :',
    'about.supervisorNames': 'Elijah Galvan, Cătălina Rățală, Alan Sanfey',

    // Research Process Timeline
    'process.title': 'Parcours de Recherche',
    'process.subtitle': 'Construction d\'un cadre robuste pour comprendre la confiance et le risque',
    'process.step1.title': 'Revue de Littérature',
    'process.step1.period': 'Phase 1',
    'process.step1.desc': 'Revue extensive des paradigmes de jeux de confiance, applications de la Théorie des Perspectives, et littérature en économie comportementale pour identifier le manque théorique.',
    'process.step2.title': 'Design Expérimental',
    'process.step2.period': 'Phase 2',
    'process.step2.desc': 'Conception du Jeu de Confiance et du Jeu de Risque avec distributions de probabilités appariées. Développement du Jeu de Confiance Inversé comme contrôle méthodologique.',
    'process.step3.title': 'Optimisation du Trial Set',
    'process.step3.period': 'Phase 3',
    'process.step3.desc': 'Utilisation de la Matrice d\'Information de Fisher et optimisation bayésienne pour sélectionner 286 essais optimaux parmi 32 modèles imbriqués pour une discriminabilité maximale des paramètres.',
    'process.step4.title': 'Implémentation',
    'process.step4.period': 'Phase 4',
    'process.step4.desc': 'Construction de la plateforme expérimentale avec pipeline de modélisation computationnelle robuste et validation de données en temps réel.',
    'process.step5.title': 'Collecte de Données',
    'process.step5.period': 'À Venir',
    'process.step5.desc': 'Phase de recrutement et de tests prévue pour valider empiriquement le cadre théorique.',

    // Footer
    'footer.position': 'Assistante de Recherche en Neurosciences Cognitives',
    'footer.rights': '© 2025 Himalaya Girard. Tous droits réservés.',
  }
} as const;

export function t(key: string, lang: Language = defaultLang): string {
  const value = translations[lang][key as keyof typeof translations[typeof lang]];
  return value as string || key;
}

export function getLanguageFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr') return 'fr';
  return 'en';
}
