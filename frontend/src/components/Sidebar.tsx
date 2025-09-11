import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <aside className="bg-gray-900 text-white w-64 min-h-screen flex flex-col p-6">
  <h2 className="text-xl font-bold mb-8 text-blue-700">Osiris-Dashboard</h2>
    <nav className="flex flex-col gap-4">
      <Link to="/" className="hover:text-blue-400">Dashboard</Link>
      <Link to="/reports" className="hover:text-blue-400">Reportes</Link>
      <Link to="/settings" className="hover:text-blue-400">Configuración</Link>
    <Link to="/dashboard-advanced" className="hover:text-blue-400">Dashboard avanzado</Link>
    <Link to="/banking-integration" className="hover:text-blue-400">Integración bancaria</Link>
    <Link to="/automation" className="hover:text-blue-400">Automatización</Link>
    <Link to="/multi-currency" className="hover:text-blue-400">Multi-moneda/idioma</Link>
    <Link to="/security" className="hover:text-blue-400">Seguridad avanzada</Link>
    </nav>
  </aside>
);

export default Sidebar;
