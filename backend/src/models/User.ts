export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

// Usuario de prueba: email 'test@demo.com', password 'demo1234' (bcrypt hash)
export const users: User[] = [
  {
    id: 1,
    name: 'Test User',
    email: 'test@demo.com',
    password: '$2a$10$wQwQwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw',
    created_at: new Date(),
  },
];
