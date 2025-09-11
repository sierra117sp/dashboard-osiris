import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      className="ml-4 px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
      onClick={() => setDark((d) => !d)}
      aria-label="Cambiar tema"
    >
      {dark ? '🌙 Oscuro' : '☀️ Claro'}
    </button>
  );
};

export default ThemeToggle;
