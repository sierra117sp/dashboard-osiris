import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => (
  <header className="bg-white shadow flex items-center justify-between px-8 py-4">
    <div className="flex items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">Osiris-Dashboard</h1>
        <span className="text-xs text-gray-500">Development by Jose Emmanuel Alvarado</span>
      </div>
      <ThemeToggle />
    </div>
    <div className="flex items-center gap-4">
      <span className="text-gray-600">Hola, Usuario</span>
      <img src="https://i.pravatar.cc/40" alt="avatar" className="rounded-full w-10 h-10" />
    </div>
  </header>
);

export default Header;
