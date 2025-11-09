import React from 'react';

export default function ResearchPhasesDiagram() {
  const bleuMarine = '#475573';
  const rouge = '#D41F00';
  const gris = '#9CA3AF';

  return (
    <div className="w-full h-full p-4 bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 border-4" style={{ borderColor: bleuMarine }}>
        <h2 className="text-xl font-bold text-center mb-8" style={{ color: bleuMarine }}>
          Phases du projet
        </h2>
        
        <div className="overflow-x-auto">
          <div className="flex items-center justify-between gap-2 min-w-max px-4">
            {/* Phase 1 - Complétée */}
            <div className="text-center">
              <div className="border-2 rounded-lg px-4 py-3" style={{ borderColor: bleuMarine, borderWidth: '3px' }}>
                <p className="font-bold text-sm" style={{ color: bleuMarine }}>Phase 1</p>
                <p className="text-xs mt-1 text-gray-700">Paradigme<br/>expérimental</p>
              </div>
            </div>
            
            {/* Flèche */}
            <svg width="24" height="20" className="flex-shrink-0">
              <path d="M0,10 L16,10 M12,6 L16,10 L12,14" stroke={bleuMarine} strokeWidth="2" fill="none"/>
            </svg>
            
            {/* Phase 2 - Complétée */}
            <div className="text-center">
              <div className="border-2 rounded-lg px-4 py-3" style={{ borderColor: bleuMarine, borderWidth: '3px' }}>
                <p className="font-bold text-sm" style={{ color: bleuMarine }}>Phase 2</p>
                <p className="text-xs mt-1 text-gray-700">Modèle<br/>computationnel</p>
              </div>
            </div>
            
            {/* Flèche */}
            <svg width="24" height="20" className="flex-shrink-0">
              <path d="M0,10 L16,10 M12,6 L16,10 L12,14" stroke={bleuMarine} strokeWidth="2" fill="none"/>
            </svg>
            
            {/* Phase 3 - Actuelle */}
            <div className="text-center">
              <div className="border-2 rounded-lg px-4 py-3 shadow-md" style={{ borderColor: rouge, borderWidth: '3px', backgroundColor: '#FFF5F5' }}>
                <p className="font-bold text-sm" style={{ color: rouge }}>Phase 3</p>
                <p className="text-xs mt-1" style={{ color: rouge }}>Simulations<br/>et analyses</p>
                <p className="text-xs mt-1 font-semibold" style={{ color: rouge }}>EN COURS</p>
              </div>
            </div>
            
            {/* Flèche */}
            <svg width="24" height="20" className="flex-shrink-0">
              <path d="M0,10 L16,10 M12,6 L16,10 L12,14" stroke={gris} strokeWidth="2" fill="none"/>
            </svg>
            
            {/* Phase 4 - À venir */}
            <div className="text-center">
              <div className="border-2 rounded-lg px-4 py-3 opacity-60" style={{ borderColor: gris, borderWidth: '3px' }}>
                <p className="font-bold text-sm" style={{ color: gris }}>Phase 4</p>
                <p className="text-xs mt-1" style={{ color: gris }}>Expérience<br/>participants</p>
              </div>
            </div>
            
            {/* Flèche */}
            <svg width="24" height="20" className="flex-shrink-0">
              <path d="M0,10 L16,10 M12,6 L16,10 L12,14" stroke={gris} strokeWidth="2" fill="none"/>
            </svg>
            
            {/* Phase 5 - À venir */}
            <div className="text-center">
              <div className="border-2 rounded-lg px-4 py-3 opacity-60" style={{ borderColor: gris, borderWidth: '3px' }}>
                <p className="font-bold text-sm" style={{ color: gris }}>Phase 5</p>
                <p className="text-xs mt-1" style={{ color: gris }}>Étude<br/>IRMf</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Légende */}
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: bleuMarine }}></div>
            <span className="text-xs">Complété</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: rouge }}></div>
            <span className="text-xs">En cours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: gris }}></div>
            <span className="text-xs">À venir</span>
          </div>
        </div>
      </div>
    </div>
  );
}