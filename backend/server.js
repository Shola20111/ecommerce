import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import router from './routes/userRoutes.js';
import cors from "cors";




const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGO_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Database Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log('Database connection failed', err));

app.use('/api/users', router);
