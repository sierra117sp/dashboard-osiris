import type { Request, Response } from 'express';

let categories = [
  { id: 1, name: 'Salario' },
  { id: 2, name: 'Comida' },
  { id: 3, name: 'Transporte' },
  { id: 4, name: 'Entretenimiento' },
  { id: 5, name: 'Otros' },
];

export const getCategories = async (req: Request, res: Response) => {
  res.json(categories);
};

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Nombre requerido' });
  const newCat = { id: categories.length + 1, name };
  categories.push(newCat);
  res.status(201).json(newCat);
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cat = categories.find(c => c.id === Number(id));
  if (!cat) return res.status(404).json({ message: 'Categoría no encontrada' });
  cat.name = req.body.name || cat.name;
  res.json(cat);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = categories.findIndex(c => c.id === Number(id));
  if (idx === -1) return res.status(404).json({ message: 'Categoría no encontrada' });
  categories.splice(idx, 1);
  res.status(204).send();
};
