// Seguridad avanzada: 2FA, logs
import { useState } from 'react';

export default function SecurityAdvanced() {
  const [codigo, setCodigo] = useState('');
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Seguridad avanzada</h1>
      <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} placeholder="Código 2FA" className="border p-2 w-full" />
      <button className="px-3 py-1 bg-red-600 text-white rounded">Validar 2FA</button>
      <div className="mt-4 text-gray-500">Simulación de validación 2FA y logs de seguridad.</div>
    </div>
  );
}
