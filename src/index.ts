// src/index.ts

import express from 'express';
import { sequelize } from './sequelize';
import { Beer } from './models/Beer';

const app = express();
const PORT = 3000;

app.get('/beers', async (req, res) => {
  const page = parseInt((req.query.page as string) || '1');
  const limit = parseInt((req.query.limit as string) || '10');
  const offset = (page - 1) * limit;

  try {
    const { count, rows } = await Beer.findAndCountAll({
      offset,
      limit,
    });

    res.json({
      data: rows,
      page,
      limit,
      total: count,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
