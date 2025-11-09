import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function SocialPreferencesGraph() {
  const [selectedPhi, setSelectedPhi] = useState(0.3);
  
  // Couleurs
  const vertAltruiste = '#228B22';
  const grisNeutre = '#696969';
  const orangeEnvieux = '#D2691E';
  
  // Fonction d'utilité
  const utilityFunction = (otherGain, phi) => {
    return phi * otherGain;
  };
  
  // Générer les données
  const generateData = () => {
    const data = [];
    for (let x = -10; x <= 10; x += 0.5) {
      data.push({
        autresGagnent: x,
        neutre: 0,
        altruiste: utilityFunction(x, 0.3),
        envieux: utilityFunction(x, -0.3)
      });
    }
    return data;
  };
  
  const data = generateData();

  return (
    <div className="w-full h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto h-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Préférences sociales
        </h2>
        
        {/* Boutons */}
        <div className="flex gap-4 mb-2 justify-center">
          <button
            onClick={() => setSelectedPhi(0.3)}
            className={`px-6 py-3 rounded font-medium transition-all ${
              selectedPhi === 0.3
                ? 'bg-white border-2 shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
            style={selectedPhi === 0.3 ? { borderColor: vertAltruiste, color: vertAltruiste } : {}}
          >
            Altruiste (φ = 0.3)
          </button>
          <button
            onClick={() => setSelectedPhi(0)}
            className={`px-6 py-3 rounded font-medium transition-all ${
              selectedPhi === 0
                ? 'bg-white border-2 shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
            style={selectedPhi === 0 ? { borderColor: grisNeutre, color: grisNeutre } : {}}
          >
            Neutre (φ = 0)
          </button>
          <button
            onClick={() => setSelectedPhi(-0.3)}
            className={`px-6 py-3 rounded font-medium transition-all ${
              selectedPhi === -0.3
                ? 'bg-white border-2 shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
            }`}
            style={selectedPhi === -0.3 ? { borderColor: orangeEnvieux, color: orangeEnvieux } : {}}
          >
            Envieux (φ = -0.3)
          </button>
        </div>
        
        {/* Phrase descriptive */}
        <div className="text-center mb-4 h-8 flex items-center justify-center">
          <p className="text-base font-medium italic transition-all duration-300" style={{ 
            color: selectedPhi === 0.3 ? vertAltruiste : selectedPhi === 0 ? grisNeutre : orangeEnvieux 
          }}>
            {selectedPhi === 0.3 && "\"Je suis heureux quand les autres gagnent\""}
            {selectedPhi === 0 && "\"Le sort des autres m'indiffère\""}
            {selectedPhi === -0.3 && "\"Je suis malheureux quand les autres gagnent\""}
          </p>
        </div>
        
        {/* Graphique */}
        <ResponsiveContainer width="100%" height="70%">
          <LineChart data={data} margin={{ top: 20, right: 30, bottom: 90, left: 90 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" strokeOpacity={0.5} />
            
            <XAxis 
              dataKey="autresGagnent"
              type="number"
              domain={[-10, 10]}
              ticks={[-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]}
              tickFormatter={(value) => value.toFixed(0)}
              tick={{ fontSize: 12 }}
              interval={0}
              label={{ value: 'Gain des autres', position: 'insideBottom', offset: -10, style: { fontSize: 16, fontWeight: 'bold' } }}
            />
            <YAxis 
              type="number"
              domain={[-4, 4]}
              ticks={[-4, -3, -2, -1, 0, 1, 2, 3, 4]}
              tickFormatter={(value) => value.toFixed(0)}
              tick={{ fontSize: 12 }}
              interval={0}
              label={{ value: 'Utilité pour soi (u)', angle: -90, position: 'insideLeft', style: { fontSize: 16, fontWeight: 'bold' } }}
            />
            
            <ReferenceLine x={0} stroke="#333333" strokeWidth={1.5} opacity={0.8} />
            <ReferenceLine y={0} stroke="#333333" strokeWidth={1.5} opacity={0.8} />
            
            <Tooltip formatter={(value) => value.toFixed(2)} labelFormatter={(value) => `Gain des autres: ${value.toFixed(1)}`} />
            
            <Line 
              type="monotone" 
              dataKey="neutre" 
              stroke={grisNeutre}
              strokeWidth={selectedPhi === 0 ? 3 : 2}
              strokeDasharray={selectedPhi === 0 ? "0" : "5 5"}
              dot={false}
              name="Neutre (φ = 0)"
              opacity={selectedPhi === 0 ? 1 : 0.5}
            />
            
            {selectedPhi === 0.3 && (
              <Line 
                type="monotone" 
                dataKey="altruiste" 
                stroke={vertAltruiste}
                strokeWidth={3}
                dot={false}
                name="Altruiste (φ = 0.3)"
              />
            )}
            {selectedPhi === -0.3 && (
              <Line 
                type="monotone" 
                dataKey="envieux" 
                stroke={orangeEnvieux}
                strokeWidth={3}
                dot={false}
                name="Envieux (φ = -0.3)"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
        
        {/* Explication */}
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          <h3 className="text-center font-bold mb-3 text-gray-800">
            Les trois types de préférences sociales
          </h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className={`text-center p-3 rounded transition-all ${selectedPhi === 0.3 ? 'bg-white shadow-md transform scale-105' : 'bg-gray-50'}`}>
              <p className="font-bold text-lg" style={{ color: vertAltruiste }}>Altruiste</p>
              <p className="text-xs font-semibold">φ &gt; 0</p>
              <p className="text-xs text-gray-600 mt-1">Valorise positivement le bien-être d'autrui</p>
            </div>
            <div className={`text-center p-3 rounded transition-all ${selectedPhi === 0 ? 'bg-white shadow-md transform scale-105' : 'bg-gray-50'}`}>
              <p className="font-bold text-lg" style={{ color: grisNeutre }}>Neutre</p>
              <p className="text-xs font-semibold">φ = 0</p>
              <p className="text-xs text-gray-600 mt-1">Ne prend en compte que son propre bien-être</p>
            </div>
            <div className={`text-center p-3 rounded transition-all ${selectedPhi === -0.3 ? 'bg-white shadow-md transform scale-105' : 'bg-gray-50'}`}>
              <p className="font-bold text-lg" style={{ color: orangeEnvieux }}>Envieux</p>
              <p className="text-xs font-semibold">φ &lt; 0</p>
              <p className="text-xs text-gray-600 mt-1">Ressent une désutilité face au succès d'autrui</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-600">
          <p className="font-semibold">Fonction d'utilité sociale : U = u<sub>soi</sub> + φ × u<sub>autres</sub></p>
          <p className="mt-1">Le paramètre φ capture l'importance accordée au bien-être des autres dans sa propre utilité</p>
        </div>
      </div>
    </div>
  );
}