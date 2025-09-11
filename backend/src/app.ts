import express from 'express';
// ...existing code...
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import transactionRoutes from './routes/transactionRoutes';
import categoryRoutes from './routes/categoryRoutes';

dotenv.config();
const app = express();
app.use(require('cors')());
app.use(express.json());

const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve('swagger/swagger.yaml'), 'utf8')
);
app.use('/api-docs', require('swagger-ui-express').serve, require('swagger-ui-express').setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Osiris-Dashboard Backend API');
});

app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/categories', categoryRoutes);

export { app };
