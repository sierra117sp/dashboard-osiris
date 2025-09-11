import React, { useState } from 'react';
import { useCategories } from '../hooks/useCategories';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import Toast from '../components/Toast';

const API_URL = 'http://localhost:4000/api/categories';

const Categories: React.FC = () => {
  const { data, isLoading, error } = useCategories();
  const queryClient = useQueryClient();
  const [name, setName] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  const createMutation = useMutation({
    mutationFn: async (name: string) => {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error('No se pudo crear la categoría');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setToast('Categoría creada exitosamente');
    },
    onError: (err: any) => setToast(err.message || 'Error al crear categoría'),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, name }: { id: number; name: string }) => {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error('No se pudo actualizar la categoría');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setToast('Categoría actualizada');
    },
    onError: (err: any) => setToast(err.message || 'Error al actualizar categoría'),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!res.ok) throw new Error('No se pudo eliminar la categoría');
      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      setToast('Categoría eliminada');
    },
    onError: (err: any) => setToast(err.message || 'Error al eliminar categoría'),
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Gestión de Categorías</h1>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      <form
        className="flex gap-2 mb-6"
        onSubmit={e => {
          e.preventDefault();
          createMutation.mutate(name);
          setName('');
        }}
      >
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Nueva categoría"
          className="border rounded px-2 py-1"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Agregar</button>
      </form>
      {isLoading ? (
        <p>Cargando categorías...</p>
      ) : error ? (
        <p className="text-red-500">Error al cargar categorías</p>
      ) : (
        <table className="w-full text-sm bg-white rounded shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cat: any) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>
                  <input
                    defaultValue={cat.name}
                    onBlur={e => {
                      if (e.target.value !== cat.name) {
                        updateMutation.mutate({ id: cat.id, name: e.target.value });
                      }
                    }}
                    className="border rounded px-2 py-1"
                  />
                </td>
                <td>
                  <button className="text-red-600" onClick={() => deleteMutation.mutate(cat.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Categories;
