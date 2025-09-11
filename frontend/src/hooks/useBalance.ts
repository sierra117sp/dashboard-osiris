import { useQuery } from '@tanstack/react-query';


const fetchBalance = async () => {
  // Simulación de datos para desarrollo
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    balance: 12500,
    comments: [
      {
        user: "Ana",
        text: "¡Excelente visualización de mis gastos!",
        date: "2025-09-10",
        rating: 5
      },
      {
        user: "Carlos",
        text: "Me encanta el diseño de Osiris-Dashboard.",
        date: "2025-09-09",
        rating: 4
      },
      {
        user: "Lucía",
        text: "Ahora controlo mejor mis ingresos mensuales.",
        date: "2025-09-08",
        rating: 5
      }
    ]
  };
};

export function useBalance() {
  return useQuery({
    queryKey: ['balance'],
    queryFn: fetchBalance,
  });
}
