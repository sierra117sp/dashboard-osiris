// Integración bancaria: importar CSV, simulación API
import { useState } from 'react';

export default function BankingIntegration() {
  const [archivo, setArchivo] = useState<File | null>(null);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Integración bancaria</h1>
      <input type="file" accept=".csv" onChange={e => setArchivo(e.target.files?.[0] ?? null)} className="border p-2" />
      {archivo && <div className="mt-2">Archivo seleccionado: {archivo.name}</div>}
      <button className="px-3 py-1 bg-green-600 text-white rounded">Importar</button>
      <div className="mt-4 text-gray-500">Simulación de importación de movimientos bancarios vía CSV.</div>
    </div>
  );
}
