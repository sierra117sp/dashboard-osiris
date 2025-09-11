// Módulo de integración con IA: predicción de gastos y sugerencias
import React, { useState } from 'react';

const mockSuggestions = [
  'Reduce gastos en entretenimiento para ahorrar $100 este mes.',
  'Considera cambiar tu plan de teléfono para ahorrar $20 mensuales.',
  'Tu gasto en transporte aumentó 15% respecto al mes pasado.'
];

export default function AISuggestions() {
  const [sugerencias] = useState(mockSuggestions);
  return (
    <div className="bg-blue-50 p-4 rounded shadow mt-6">
      <h2 className="text-lg font-bold mb-2">Sugerencias inteligentes (IA)</h2>
      <ul className="list-disc ml-6">
        {sugerencias.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
