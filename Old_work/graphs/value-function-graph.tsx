import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function ValueFunctionGraph() {
  // Paramètres de la fonction de valeur
  const alpha_risk = 0.88;   // Sensibilité aux gains (risque)
  const alpha_trust = 0.95;  // Sensibilité aux gains (confiance)
  const beta = 0.88;         // Sensibilité aux pertes
  const lambda = 2.25;       // Aversion aux pertes
  const tau = 0.5;           // Aversion à la trahison (paramètre additionnel pour le social)
  
  // Couleurs
  const bleuMarine = '#475573';
  const rouge = '#D41F00';
  
  // Fonction de valeur pour le risque (non social)
  const valueRisk = (x) => {
    if (x >= 0) {
      return Math.pow(x, alpha_risk);
    } else {
      return -lambda * Math.pow(-x, beta);
    }
  };
  
  // Fonction de valeur pour la confiance (social)
  const valueTrust = (x) => {
    if (x >= 0) {
      return Math.pow(x, alpha_trust);
    } else {
      return -lambda * (1 + tau) * Math.pow(-x, beta);
    }
  };
  
  // Générer les données
  const data = [];
  for (let x = -10; x <= 10; x += 0.05) {
    data.push({
      outcome: x,
      risk: valueRisk(x),
      trust: valueTrust(x)
    });
  }
  
  // Formateur personnalisé pour les valeurs
  const formatValue = (value) => {
    return value.toFixed(0);
  };

  return (
    <div className="w-full h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto h-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4" style={{ color: bleuMarine }}>
          Fonction de valeur subjective
        </h2>
        
        <ResponsiveContainer width="100%" height="80%">
          <LineChart 
            data={data} 
            margin={{ top: 20, right: 120, bottom: 90, left: 90 }}
          >
            {/* Grille avec toutes les lignes */}
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
              allowDataOverflow={false}
              label={{ 
                value: 'Résultat objectif', 
                position: 'insideBottom', 
                offset: -10,
                style: { fontSize: 16, fontWeight: 'bold' }
              }}
            />
            <YAxis 
              type="number"
              domain={[-25, 10]}
              ticks={[-25, -20, -15, -10, -5, 0, 5, 10]}
              tickFormatter={(value) => value.toFixed(0)}
              tick={{ fontSize: 12 }}
              interval={0}
              label={{ 
                value: 'Valeur subjective', 
                angle: -90, 
                position: 'insideLeft',
                style: { fontSize: 16, fontWeight: 'bold' }
              }}
            />
            
            {/* Lignes de référence à zéro */}
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
              name="Risque (non social)"
            />
            <Line 
              type="monotone" 
              dataKey="trust" 
              stroke={rouge}
              strokeWidth={3}
              dot={false}
              name="Confiance (social)"
            />
          </LineChart>
        </ResponsiveContainer>
        
        {/* Annotations */}
        <div className="mt-4 grid grid-cols-2 gap-6 text-sm">
          <div className="text-center">
            <h3 className="font-bold mb-2" style={{ color: bleuMarine }}>Risque (non social)</h3>
            <p><strong>α = {alpha_risk}</strong> : Sensibilité aux gains</p>
            <p><strong>λ = {lambda}</strong> : Aversion aux pertes</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2" style={{ color: rouge }}>Confiance (social)</h3>
            <p><strong>α = {alpha_trust}</strong> : Sensibilité aux gains</p>
            <p><strong>τ = {tau}</strong> : Aversion à la trahison</p>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-600">
          <p>Risque: v(x) = x<sup>0.88</sup> pour les gains | v(x) = -λ(-x)<sup>β</sup> pour les pertes</p>
          <p>Confiance: v(x) = x<sup>0.95</sup> pour les gains | v(x) = -λ(1+τ)(-x)<sup>β</sup> pour les pertes</p>
        </div>
      </div>
    </div>
  );
}