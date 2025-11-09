import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';

export default function BetrayalAversionEffect() {
  const [selectedTau, setSelectedTau] = useState(0.8); // Par défaut sur forte aversion
  
  // Paramètres fixes
  const alpha = 0.88;    // Sensibilité aux gains
  const beta = 0.88;     // Sensibilité aux pertes
  const lambda = 2.25;   // Aversion aux pertes
  
  // Couleurs
  const bleuMarine = '#475573';
  const rouge = '#D41F00';
  
  // Fonction de valeur pour le risque standard (sans aversion à la trahison)
  const valueRisk = (x) => {
    if (x >= 0) {
      return Math.pow(x, alpha);
    } else {
      return -lambda * Math.pow(-x, beta);
    }
  };
  
  // Fonction de valeur avec aversion à la trahison
  const valueTrust = (x, tau) => {
    if (x >= 0) {
      return Math.pow(x, alpha);
    } else {
      return -lambda * (1 + tau) * Math.pow(-x, beta);
    }
  };
  
  // Générer les données
  const generateData = (tau) => {
    const data = [];
    for (let x = -10; x <= 10; x += 0.05) {
      data.push({
        outcome: x,
        risk: valueRisk(x),
        trust: valueTrust(x, tau)
      });
    }
    return data;
  };
  
  const data = generateData(selectedTau);

  return (
    <div className="w-full h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto h-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4" style={{ color: bleuMarine }}>
          Effet de l'aversion à la trahison
        </h2>
        
        {/* Boutons de sélection */}
        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={() => setSelectedTau(0.2)}
            className={`px-6 py-3 rounded font-medium transition-all ${
              selectedTau === 0.2
                ? 'bg-white border-2 shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
            style={selectedTau === 0.2 ? { borderColor: bleuMarine, color: bleuMarine } : {}}
          >
            Faible aversion (τ = 0.2)
          </button>
          <button
            onClick={() => setSelectedTau(0.5)}
            className={`px-6 py-3 rounded font-medium transition-all ${
              selectedTau === 0.5
                ? 'bg-white border-2 shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
            style={selectedTau === 0.5 ? { borderColor: bleuMarine, color: bleuMarine } : {}}
          >
            Aversion moyenne (τ = 0.5)
          </button>
          <button
            onClick={() => setSelectedTau(0.8)}
            className={`px-6 py-3 rounded font-medium transition-all ${
              selectedTau === 0.8
                ? 'bg-white border-2 shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
            style={selectedTau === 0.8 ? { borderColor: bleuMarine, color: bleuMarine } : {}}
          >
            Forte aversion (τ = 0.8)
          </button>
        </div>
        
        <ResponsiveContainer width="100%" height="75%">
          <LineChart 
            data={data} 
            margin={{ top: 20, right: 120, bottom: 90, left: 90 }}
          >
            {/* Grille */}
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#999999"
              strokeOpacity={0.7}
            />
            
            {/* Axes */}
            <XAxis 
              dataKey="outcome"
              type="number"
              domain={[-10, 10]}
              ticks={[-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]}
              tickFormatter={(value) => value.toFixed(0)}
              tick={{ fontSize: 12 }}
              interval={0}
              label={{ 
                value: 'Résultat', 
                position: 'insideBottom', 
                offset: -10,
                style: { fontSize: 16, fontWeight: 'bold' }
              }}
            />
            <YAxis 
              type="number"
              domain={[-40, 10]}
              ticks={[-40, -35, -30, -25, -20, -15, -10, -5, 0, 5, 10]}
              tickFormatter={(value) => value.toFixed(0)}
              tick={{ fontSize: 12 }}
              interval={0}
              label={{ 
                value: 'Utilité', 
                angle: -90, 
                position: 'insideLeft',
                style: { fontSize: 16, fontWeight: 'bold' }
              }}
            />
            
            {/* Zone mise en évidence pour les pertes */}
            <ReferenceArea 
              x1={-10} 
              x2={0} 
              y1={-40} 
              y2={0} 
              fill="#FFE5E5" 
              fillOpacity={0.2} 
              stroke="none"
            />
            
            {/* Flèche montrant l'écart */}
            {selectedTau > 0 && (
              <g>
                <defs>
                  <marker
                    id="arrowhead-effect"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill={rouge} />
                  </marker>
                </defs>
                <line
                  x1="30%"
                  y1={selectedTau === 0.8 ? "48%" : selectedTau === 0.5 ? "53%" : "56%"}
                  x2="30%"
                  y2={selectedTau === 0.8 ? "65%" : selectedTau === 0.5 ? "68%" : "70%"}
                  stroke={rouge}
                  strokeWidth="2"
                  markerEnd="url(#arrowhead-effect)"
                  opacity="0.7"
                />
              </g>
            )}
            
            {/* Annotation τ sur le graphique avec fond blanc */}
            <g>
              <rect 
                x="15%" 
                y={selectedTau === 0.8 ? "47%" : selectedTau === 0.5 ? "52%" : "55%"}
                width="10%"
                height="6%"
                fill="white"
                stroke={rouge}
                strokeWidth="1"
                rx="3"
                opacity="0.9"
              />
              <text 
                x="20%" 
                y={selectedTau === 0.8 ? "50.5%" : selectedTau === 0.5 ? "55.5%" : "58.5%"} 
                textAnchor="middle" 
                fontSize="14" 
                fill={rouge} 
                fontWeight="bold"
              >
                τ = {selectedTau}
              </text>
            </g>
            
            {/* Lignes de référence */}
            <ReferenceLine x={0} stroke="#333333" strokeWidth={2} opacity={0.8} />
            <ReferenceLine y={0} stroke="#333333" strokeWidth={2} opacity={0.8} />
            
            <Tooltip 
              formatter={(value) => value.toFixed(2)}
              labelFormatter={(value) => `Résultat: ${value.toFixed(1)}`}
            />
            
            <Legend 
              wrapperStyle={{ 
                paddingLeft: '20px',
                fontSize: '14px'
              }}
              layout="vertical"
              align="right"
              verticalAlign="middle"
            />
            
            {/* Courbes */}
            <Line 
              type="monotone" 
              dataKey="risk" 
              stroke={bleuMarine}
              strokeWidth={3}
              dot={false}
              name="Risque standard"
            />
            <Line 
              type="monotone" 
              dataKey="trust" 
              stroke={rouge}
              strokeWidth={3}
              dot={false}
              name="Avec aversion à la trahison"
            />
          </LineChart>
        </ResponsiveContainer>
        
        {/* Zone mise en évidence pour les pertes */}
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          <h3 className="text-center font-bold mb-3" style={{ color: bleuMarine }}>
            Impact de l'aversion à la trahison
          </h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className={`text-center p-3 rounded transition-all ${selectedTau === 0.2 ? 'bg-white shadow-md transform scale-105' : 'bg-gray-50'}`}>
              <p className="font-bold text-lg">τ = 0.2</p>
              <p className="text-xs font-semibold">Amplification: +20%</p>
              <p className="text-xs text-gray-600 mt-1">Confiance facile</p>
            </div>
            <div className={`text-center p-3 rounded transition-all ${selectedTau === 0.5 ? 'bg-white shadow-md transform scale-105' : 'bg-gray-50'}`}>
              <p className="font-bold text-lg">τ = 0.5</p>
              <p className="text-xs font-semibold">Amplification: +50%</p>
              <p className="text-xs text-gray-600 mt-1">Prudence modérée</p>
            </div>
            <div className={`text-center p-3 rounded transition-all ${selectedTau === 0.8 ? 'bg-white shadow-md transform scale-105' : 'bg-gray-50'}`}>
              <p className="font-bold text-lg">τ = 0.8</p>
              <p className="text-xs font-semibold">Amplification: +80%</p>
              <p className="text-xs text-gray-600 mt-1">Méfiance élevée</p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm">
              Pour une perte de <span className="font-mono">-5</span>, la désutilité supplémentaire est de 
              <span className="font-bold text-lg ml-2" style={{ color: rouge }}>
                {Math.abs(valueTrust(-5, selectedTau) - valueRisk(-5)).toFixed(1)}
              </span>
              <span className="text-sm"> unités</span>
            </p>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-600">
          <p>L'aversion à la trahison (τ) amplifie la désutilité des pertes dans les contextes sociaux</p>
          <p className="mt-1">Formule : v(x) = -λ(1+τ)(-x)<sup>β</sup> pour les pertes sociales</p>
        </div>
      </div>
    </div>
  );
}