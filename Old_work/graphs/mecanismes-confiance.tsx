import React, { useState } from 'react';

export default function MecanismesConfiance() {
  const [activeView, setActiveView] = useState('both');
  
  // Couleurs définies
  const bleuMarine = '#475573';
  const rouge = '#D41F00';

  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
      {/* Boutons de navigation */}
      <div className="flex gap-4 mb-8 justify-center">
        <button
          onClick={() => setActiveView('aversion')}
          className={`px-6 py-3 rounded font-medium transition-all ${
            activeView === 'aversion'
              ? 'bg-white border-2 shadow-md'
              : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
          }`}
          style={activeView === 'aversion' ? { borderColor: bleuMarine, color: bleuMarine } : {}}
        >
          Aversion à la trahison
        </button>
        <button
          onClick={() => setActiveView('preferences')}
          className={`px-6 py-3 rounded font-medium transition-all ${
            activeView === 'preferences'
              ? 'bg-white border-2 shadow-md'
              : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
          }`}
          style={activeView === 'preferences' ? { borderColor: bleuMarine, color: bleuMarine } : {}}
        >
          Préférences sociales
        </button>
        <button
          onClick={() => setActiveView('both')}
          className={`px-6 py-3 rounded font-medium transition-all text-white ${
            activeView === 'both'
              ? 'shadow-md'
              : 'opacity-80 hover:opacity-100'
          }`}
          style={{ backgroundColor: bleuMarine }}
        >
          Les deux mécanismes
        </button>
      </div>

      {/* Conteneur principal */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border-4" style={{ borderColor: bleuMarine }}>
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: bleuMarine }}>
          Mécanismes psychologiques de la confiance
        </h2>

        <div className="flex justify-center items-start gap-8 min-h-[300px]">
          {/* Aversion à la trahison */}
          <div
            className={`flex-1 transition-all duration-500 ${
              activeView === 'preferences' 
                ? 'opacity-0 scale-95 pointer-events-none' 
                : 'opacity-100 scale-100'
            }`}
          >
            <div className="bg-white border-4 rounded-xl p-6 shadow-md" style={{ borderColor: rouge }}>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: rouge }}>
                Aversion à la trahison
              </h3>
              <p className="text-center text-gray-700 leading-relaxed">
                Désutilité supplémentaire<br />
                associée aux pertes causées<br />
                par d'autres agents<br />
                <span className="font-mono text-lg">(τ &gt; 0)</span>
              </p>
            </div>
          </div>

          {/* Flèche d'interaction */}
          <div
            className={`flex items-center transition-all duration-500 ${
              activeView === 'both' 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-0'
            }`}
          >
            <div className="relative">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <defs>
                  <marker
                    id="arrowhead-right"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#666" />
                  </marker>
                  <marker
                    id="arrowhead-left"
                    markerWidth="10"
                    markerHeight="10"
                    refX="1"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="10 0, 0 3, 10 6" fill="#666" />
                  </marker>
                </defs>
                <line
                  x1="10"
                  y1="20"
                  x2="110"
                  y2="20"
                  stroke="#666"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-right)"
                  markerStart="url(#arrowhead-left)"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                <span className="text-sm font-medium text-gray-600">Interaction</span>
              </div>
            </div>
          </div>

          {/* Préférences sociales */}
          <div
            className={`flex-1 transition-all duration-500 ${
              activeView === 'aversion' 
                ? 'opacity-0 scale-95 pointer-events-none' 
                : 'opacity-100 scale-100'
            }`}
          >
            <div className="bg-white border-4 rounded-xl p-6 shadow-md" style={{ borderColor: bleuMarine }}>
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: bleuMarine }}>
                Préférences sociales
              </h3>
              <p className="text-center text-gray-700 leading-relaxed">
                Valorisation du bien-être<br />
                des autres en plus<br />
                de son propre bien-être<br />
                <span className="font-mono text-lg">(φ ≠ 0)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Message explicatif en bas */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          {activeView === 'aversion' && (
            <p>L'aversion à la trahison représente la désutilité supplémentaire ressentie lorsque les pertes sont causées par d'autres personnes plutôt que par le hasard.</p>
          )}
          {activeView === 'preferences' && (
            <p>Les préférences sociales reflètent la tendance à prendre en compte le bien-être d'autrui dans ses propres décisions.</p>
          )}
          {activeView === 'both' && (
            <p>Ces deux mécanismes interagissent pour former la base psychologique de la confiance interpersonnelle.</p>
          )}
        </div>
      </div>
    </div>
  );
}