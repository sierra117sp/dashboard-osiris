
import type { Request, Response } from 'express';

// Simulación de base de datos en memoria
interface Transaction {
  id: number;
  user_id: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: Date;
  description?: string | undefined;
}

let transactions: Transaction[] = [
  {
    id: 1,
    user_id: 1,
    type: 'income',
    category: 'Salario',
    amount: 3000,
    date: new Date(),
    description: 'Pago mensual'
  },
  {
    id: 2,
    user_id: 1,
    type: 'expense',
    category: 'Comida',
    amount: 250,
    date: new Date(),
    description: 'Restaurante'
  }
];


/**
 * Obtener todas las transacciones del usuario autenticado
 */
export const getTransactions = async (req: Request, res: Response) => {
  // En producción, filtrar por req.user.id
  res.json(transactions);
};

/**
 * Crear una nueva transacción
 */
export const createTransaction = async (req: Request, res: Response) => {
  const { type, category, amount, date, description } = req.body as {
    type?: 'income' | 'expense';
    category?: string;
    amount?: number;
    date?: string;
    description?: string;
  };
  if (!type || !category || typeof amount !== 'number' || !date) {
    return res.status(400).json({ message: 'Todos los campos son requeridos y amount debe ser número.' });
  }
  const newTx: Transaction = {
    id: transactions.length + 1,
    user_id: 1, // Simulado
    type,
    category,
    amount,
    date: new Date(date),
    description
  };
  transactions.push(newTx);
  res.status(201).json(newTx);
};

/**
 * Actualizar una transacción existente
 */
export const updateTransaction = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const tx = transactions.find(t => t.id === id);
  if (!tx) return res.status(404).json({ message: 'Transacción no encontrada.' });
  const { type, category, amount, date, description } = req.body as {
    type?: 'income' | 'expense';
    category?: string;
    amount?: number;
    date?: string;
    description?: string;
  };
  if (type) tx.type = type;
  if (category) tx.category = category;
  if (typeof amount === 'number') tx.amount = amount;
  if (date) tx.date = new Date(date);
  if (description) tx.description = description;
  res.json(tx);
};

/**
 * Eliminar una transacción
 */
export const deleteTransaction = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const idx = transactions.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Transacción no encontrada.' });
  transactions.splice(idx, 1);
  res.status(204).send();
};
