import request from 'supertest';
import { app } from '../src/app.js';

describe('User API', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ name: 'Test', email: 'test@email.com', password: '123456' });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Usuario registrado exitosamente.');
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ email: 'test@email.com', password: '123456' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
