import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDB from './database/db.js';

import personRouter from './routes/person.routes.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;   

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/person', personRouter);


app.listen(PORT, () => {
  connectDB();  
  console.log(`Server listening on http://localhost:${PORT}`); 
})