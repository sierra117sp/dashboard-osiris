import React from 'react';

const Login: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Iniciar sesión</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input type="email" className="w-full p-2 border rounded" placeholder="usuario@email.com" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Contraseña</label>
        <input type="password" className="w-full p-2 border rounded" placeholder="••••••••" />
      </div>
      <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">Entrar</button>
      <div className="mt-4 text-center text-sm">
        ¿No tienes cuenta? <a href="/register" className="text-blue-700 hover:underline">Regístrate</a>
      </div>
    </form>
  </div>
);

export default Login;
