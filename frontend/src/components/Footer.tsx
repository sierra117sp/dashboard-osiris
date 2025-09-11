import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-white shadow text-center py-4 mt-8 text-gray-500 text-sm flex flex-col items-center gap-2">
    <div>Osiris-Dashboard © 2025 | Development by Jose Emmanuel Alvarado</div>
    <div className="flex gap-4 justify-center mt-2">
      <a href="https://github.com/joseemmanuelalvarado" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
      <a href="https://linkedin.com/in/joseemmanuelalvarado" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
      <a href="mailto:joseemmanuelalvarado@email.com" className="hover:text-blue-600">Email</a>
    </div>
  </footer>
);

export default Footer;
