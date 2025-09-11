// Automatización: reglas, alertas
import { useState } from 'react';

export default function Automation() {
  const [regla, setRegla] = useState('');
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Automatización</h1>
      <input type="text" value={regla} onChange={e => setRegla(e.target.value)} placeholder="Ej: Notificar si gasto > $1000" className="border p-2 w-full" />
      <button className="px-3 py-1 bg-yellow-600 text-white rounded">Agregar regla</button>
      <div className="mt-4 text-gray-500">Ejemplo de reglas automáticas y alertas.</div>
    </div>
  );
}
