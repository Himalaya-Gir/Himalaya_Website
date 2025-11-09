import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ProbabilityWeightingGraph() {
  // Fonction de pondération des probabilités selon Tversky & Kahneman (1992)
  const probabilityWeighting = (p, gamma) => {
    if (p === 0) return 0;
    if (p === 1) return 1;
    
    const pGamma = Math.pow(p, gamma);
    const oneMpGamma = Math.pow(1 - p, gamma);
    return pGamma / Math.pow(pGamma + oneMpGamma, 1/gamma);
  };
  
  // Générer les données
  const data = [];
  for (let i = 0; i <= 100; i++) {
    const p = i / 100;
    
    // Paramètres standards pour non social (Tversky & Kahneman, 1992)
    const gamma_nonsocial = 0.61;  // Pour les gains non sociaux
    const delta_nonsocial = 0.69;  // Pour les pertes non sociales
    
    // Paramètres pour social (basés sur vos données)
    const gamma_social = 2.5;      // Pour les gains sociaux (courbe en S plus prononcée)
    const tau_social = 0.51;       // Pour les pertes sociales (S inversé un peu plus prononcé)
    
    data.push({
      prob: p,
      nonSocialGain: probabilityWeighting(p, gamma_nonsocial),
      nonSocialPerte: probabilityWeighting(p, delta_nonsocial),
      socialGain: probabilityWeighting(p, gamma_social),
      socialPerte: probabilityWeighting(p, tau_social)
    });
  }

  // Fonction personnalisée pour la légende avec style de ligne
  const renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
    const isDashed = entry.payload.strokeDasharray;
    const lineStyle = isDashed ? '- - -' : '———';
    return <span style={{ color }}>{lineStyle} {value}</span>;
  };

  return (
    <div className="w-full h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto h-full bg-white rounded-lg shadow-lg p-6">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart 
            data={data} 
            margin={{ top: 30, right: 180, bottom: 80, left: 80 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="prob"
              domain={[0, 1]}
              ticks={[0, 0.25, 0.5, 0.75, 1.0]}
              tickFormatter={(value) => value.toFixed(2)}
              label={{ 
                value: 'Probabilités objectives', 
                position: 'insideBottom', 
                offset: -10,
                style: { fontSize: 16, fontWeight: 'bold' }
              }}
            />
            <YAxis 
              domain={[0, 1]}
              ticks={[0, 0.25, 0.5, 0.75, 1.0]}
              tickFormatter={(value) => value.toFixed(2)}
              label={{ 
                value: 'Probabilités subjectives', 
                angle: -90, 
                position: 'insideLeft',
                style: { fontSize: 16, fontWeight: 'bold' }
              }}
            />
            <Tooltip 
              formatter={(value) => value.toFixed(3)}
              labelFormatter={(value) => `Prob. objective: ${value.toFixed(2)}`}
            />
            <Legend 
              wrapperStyle={{ 
                paddingLeft: '20px',
                fontSize: '14px'
              }}
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="line"
              formatter={renderColorfulLegendText}
            />
            
            {/* Non social - Bleu marine #475573 */}
            <Line 
              type="monotone" 
              dataKey="nonSocialGain" 
              stroke="#475573"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Risque - Gain"
            />
            <Line 
              type="monotone" 
              dataKey="nonSocialPerte" 
              stroke="#475573"
              strokeWidth={3}
              dot={false}
              name="Risque - Perte"
            />
            
            {/* Social - Rouge #D41F00 */}
            <Line 
              type="monotone" 
              dataKey="socialGain" 
              stroke="#D41F00"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Confiance - Gain"
            />
            <Line 
              type="monotone" 
              dataKey="socialPerte" 
              stroke="#D41F00"
              strokeWidth={3}
              dot={false}
              name="Confiance - Perte"
            />
          </LineChart>
        </ResponsiveContainer>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="font-semibold">Fonction de pondération des probabilités</p>
          <p className="text-xs mt-1">
            Risque: γ<sub>r</sub> = 0.61 (gain), δ<sub>r</sub> = 0.69 (perte) | Confiance: γ<sub>c</sub> = 2.01 (gain), δ<sub>c</sub> = 0.51 (perte)
          </p>
        </div>
      </div>
    </div>
  );
}