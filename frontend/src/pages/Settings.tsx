import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Configuración avanzada</h1>
      <form className="space-y-6 bg-white p-6 rounded shadow">
        <div>
          <label className="block text-gray-700 mb-2">Tema</label>
          <select className="border rounded p-2 w-full">
            <option>Claro</option>
            <option>Oscuro</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Idioma</label>
          <select className="border rounded p-2 w-full">
            <option>Español</option>
            <option>Inglés</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Notificaciones</label>
          <input type="checkbox" className="mr-2" /> Activar notificaciones por email
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Exportar datos</label>
          <button type="button" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Descargar en Excel</button>
          <button type="button" className="ml-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">Descargar en PDF</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
