export interface Transaction {
  id: number;
  user_id: number;
  type: 'income' | 'expense' | 'recurring';
  category: string;
  amount: number;
  date: Date;
  description?: string;
}
