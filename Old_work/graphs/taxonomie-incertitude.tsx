import React, { useState } from 'react';

export default function TaxonomieIncertitude() {
  const [hoveredElement, setHoveredElement] = useState(null);
  
  // Couleurs définies
  const bleuMarine = '#475573';
  const rouge = '#D41F00';

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold text-center mb-12" style={{ color: bleuMarine }}>
        Confiance vs Risque : Sources d'incertitude
      </h1>

      {/* Graphique principal */}
      <div className="bg-white rounded-2xl shadow-lg p-10">
        <svg viewBox="0 0 800 550" className="w-full h-full">
          {/* Définitions des flèches */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#666" />
            </marker>
          </defs>

          {/* Titre du graphique */}
          <text x="400" y="30" textAnchor="middle" fontSize="20" fontWeight="bold" fill={bleuMarine}>
            Hiérarchie de l'incertitude
          </text>

          {/* Séparation verticale */}
          <line x1="400" y1="80" x2="400" y2="480" stroke="#DDD" strokeWidth="2" strokeDasharray="5,5" />

          {/* Labels colonnes */}
          <rect x="150" y="60" width="200" height="40" fill={rouge} rx="5" fillOpacity="0.1" />
          <text x="250" y="85" textAnchor="middle" fontSize="18" fontWeight="bold" fill={rouge}>
            CONFIANCE
          </text>
          <text x="250" y="98" textAnchor="middle" fontSize="12" fill="#666">
            (Incertitude sociale)
          </text>

          <rect x="450" y="60" width="200" height="40" fill={bleuMarine} rx="5" fillOpacity="0.1" />
          <text x="550" y="85" textAnchor="middle" fontSize="18" fontWeight="bold" fill={bleuMarine}>
            RISQUE
          </text>
          <text x="550" y="98" textAnchor="middle" fontSize="12" fill="#666">
            (Incertitude non-sociale)
          </text>

          {/* PREMIER ORDRE */}
          <g>
            {/* Label de niveau */}
            <rect x="50" y="130" width="700" height="30" fill="#E5E5E5" rx="5" />
            <text x="400" y="150" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">
              PREMIER ORDRE - Tout est connu
            </text>

            {/* Confiance - Premier ordre */}
            <rect 
              x="150" y="170" width="200" height="80" 
              fill={rouge} fillOpacity="0.05" 
              stroke={rouge} strokeWidth="2" rx="5"
              onMouseEnter={() => setHoveredElement('trust1')}
              onMouseLeave={() => setHoveredElement(null)}
              className="cursor-pointer"
            />
            <text x="250" y="195" textAnchor="middle" fontSize="14" fontWeight="bold">
              Comportement prévisible
            </text>
            <text x="250" y="212" textAnchor="middle" fontSize="12" fill="#666">
              • Historique connu</text>
            <text x="250" y="228" textAnchor="middle" fontSize="12" fill="#666">
              • Réputation établie</text>
            <text x="250" y="244" textAnchor="middle" fontSize="11" fill="#888" fontStyle="italic">
              Ex: Ami de longue date
            </text>

            {/* Risque - Premier ordre */}
            <rect 
              x="450" y="170" width="200" height="80" 
              fill={bleuMarine} fillOpacity="0.05" 
              stroke={bleuMarine} strokeWidth="2" rx="5"
              onMouseEnter={() => setHoveredElement('risk1')}
              onMouseLeave={() => setHoveredElement(null)}
              className="cursor-pointer"
            />
            <text x="550" y="195" textAnchor="middle" fontSize="14" fontWeight="bold">
              Probabilités connues
            </text>
            <text x="550" y="212" textAnchor="middle" fontSize="12" fill="#666">
              • Résultats définis</text>
            <text x="550" y="228" textAnchor="middle" fontSize="12" fill="#666">
              • Calcul possible</text>
            <text x="550" y="244" textAnchor="middle" fontSize="11" fill="#888" fontStyle="italic">
              Ex: Lancer de dé, loterie
            </text>
          </g>

          {/* Flèche descendante */}
          <line x1="400" y1="260" x2="400" y2="280" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* SECOND ORDRE */}
          <g>
            {/* Label de niveau */}
            <rect x="50" y="290" width="700" height="30" fill="#E5E5E5" rx="5" />
            <text x="400" y="310" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">
              SECOND ORDRE - Probabilités inconnues
            </text>

            {/* Confiance - Second ordre */}
            <rect 
              x="150" y="330" width="200" height="80" 
              fill={rouge} fillOpacity="0.1" 
              stroke={rouge} strokeWidth="2" rx="5"
              onMouseEnter={() => setHoveredElement('trust2')}
              onMouseLeave={() => setHoveredElement(null)}
              className="cursor-pointer"
            />
            <text x="250" y="355" textAnchor="middle" fontSize="14" fontWeight="bold">
              Comportement incertain
            </text>
            <text x="250" y="372" textAnchor="middle" fontSize="12" fill="#666">
              • Intentions floues</text>
            <text x="250" y="388" textAnchor="middle" fontSize="12" fill="#666">
              • Pas d'historique</text>
            <text x="250" y="404" textAnchor="middle" fontSize="11" fill="#888" fontStyle="italic">
              Ex: Nouveau partenaire
            </text>

            {/* Risque - Second ordre */}
            <rect 
              x="450" y="330" width="200" height="80" 
              fill={bleuMarine} fillOpacity="0.1" 
              stroke={bleuMarine} strokeWidth="2" rx="5"
              onMouseEnter={() => setHoveredElement('risk2')}
              onMouseLeave={() => setHoveredElement(null)}
              className="cursor-pointer"
            />
            <text x="550" y="355" textAnchor="middle" fontSize="14" fontWeight="bold">
              Probabilités subjectives
            </text>
            <text x="550" y="372" textAnchor="middle" fontSize="12" fill="#666">
              • Résultats connus</text>
            <text x="550" y="388" textAnchor="middle" fontSize="12" fill="#666">
              • Estimation nécessaire</text>
            <text x="550" y="404" textAnchor="middle" fontSize="11" fill="#888" fontStyle="italic">
              Ex: Nouveau marché
            </text>
          </g>

          {/* Flèche descendante */}
          <line x1="400" y1="420" x2="400" y2="440" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* AMBIGUÏTÉ */}
          <g>
            {/* Label de niveau */}
            <rect x="50" y="450" width="700" height="30" fill="#E5E5E5" rx="5" />
            <text x="400" y="470" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">
              AMBIGUÏTÉ - Ignorance complète
            </text>

            <rect 
              x="150" y="490" width="500" height="50" 
              fill="#999" fillOpacity="0.1" 
              stroke="#999" strokeWidth="2" rx="5"
              onMouseEnter={() => setHoveredElement('ambiguity')}
              onMouseLeave={() => setHoveredElement(null)}
              className="cursor-pointer"
            />
            <text x="400" y="510" textAnchor="middle" fontSize="14" fontWeight="bold">
              Ni probabilités ni résultats connus
            </text>
            <text x="400" y="528" textAnchor="middle" fontSize="11" fill="#888" fontStyle="italic">
              Ex: Pandémie mondiale, innovation radicale
            </text>
          </g>
        </svg>

        {/* Légende explicative */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="p-3 rounded" style={{ backgroundColor: `${rouge}10`, borderLeft: `4px solid ${rouge}` }}>
            <span className="font-bold" style={{ color: rouge }}>Confiance :</span> L'incertitude vient des choix intentionnels d'autres personnes
          </div>
          <div className="p-3 rounded" style={{ backgroundColor: `${bleuMarine}10`, borderLeft: `4px solid ${bleuMarine}` }}>
            <span className="font-bold" style={{ color: bleuMarine }}>Risque :</span> L'incertitude vient de processus aléatoires sans intention
          </div>
        </div>
      </div>
    </div>
  );
}