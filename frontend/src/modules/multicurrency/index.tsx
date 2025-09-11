// Multi-moneda y multi-idioma: i18n, conversión
import { useState } from 'react';

const monedas = ['USD', 'EUR', 'MXN'];

export default function MultiCurrency() {
  const [moneda, setMoneda] = useState('USD');
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Multi-moneda / Multi-idioma</h1>
      <label className="mr-2">Moneda:</label>
      <select value={moneda} onChange={e => setMoneda(e.target.value)} className="border rounded px-2 py-1">
        {monedas.map(m => <option key={m}>{m}</option>)}
      </select>
      <div className="mt-4 text-gray-500">Ejemplo de conversión y selección de moneda.</div>
    </div>
  );
}
