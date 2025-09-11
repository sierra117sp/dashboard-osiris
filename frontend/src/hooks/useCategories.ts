import { useQuery } from '@tanstack/react-query';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/api/categories');
      if (!res.ok) throw new Error('No se pudo obtener las categorías');
      return res.json();
    },
  });
}
