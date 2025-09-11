import React from 'react';

const Reports: React.FC = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Reportes financieros</h1>
      <form className="flex flex-col md:flex-row gap-4 mb-8 items-center bg-white p-4 rounded shadow">
        <div>
          <label className="block text-gray-700 mb-1">Rango de fechas</label>
          <input type="date" className="border rounded p-2" />
          <span className="mx-2">a</span>
          <input type="date" className="border rounded p-2" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Categoría</label>
          <select className="border rounded p-2">
            <option>Todos</option>
            <option>Ingresos</option>
            <option>Gastos</option>
            <option>Recurrentes</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Filtrar</button>
      </form>
      <div className="bg-white rounded shadow p-6 mb-6">
        <h2 className="text-lg font-bold mb-4 text-blue-700">Reporte mensual</h2>
        <p className="mb-2">Total ingresos: <span className="font-bold text-green-600">$3,000</span></p>
        <p className="mb-2">Total gastos: <span className="font-bold text-red-600">$2,300</span></p>
        <p className="mb-2">Balance: <span className="font-bold text-blue-700">$700</span></p>
        <button type="button" className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">Descargar PDF</button>
        <button type="button" className="ml-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Descargar Excel</button>
      </div>
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-bold mb-4 text-blue-700">Gráfica de ingresos vs gastos</h2>
        {/* Aquí puedes agregar un gráfico profesional con Recharts o D3.js */}
        <div className="h-64 flex items-center justify-center text-gray-400">[Gráfico aquí]</div>
      </div>
    </div>
  );
};

export default Reports;
