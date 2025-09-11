import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const token = localStorage.getItem('token');
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      if (!token) throw new Error('No autenticado');
      const res = await fetch('http://localhost:4000/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('No se pudo obtener el usuario');
      return res.json();
    },
    enabled: !!token,
  });
}
