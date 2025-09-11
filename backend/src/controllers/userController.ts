import type { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users } from '../models/User';

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email y password requeridos.' });
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(409).json({ message: 'El usuario ya existe.' });
  const hash = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name: '',
    email,
    password: hash,
    created_at: new Date(),
  };
  users.push(newUser);
  res.status(201).json({ message: 'Usuario registrado exitosamente.' });
};

  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: 'Usuario no encontrado.' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Credenciales inválidas.' });
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  res.status(200).json({ token });
};
