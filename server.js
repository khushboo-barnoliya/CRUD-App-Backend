import express from 'express';
import dbConnect from './utlis/db.js';
import { configDotenv } from 'dotenv';
import routers from './routes/routes.js';
import cors from 'cors'
configDotenv();

const PORT = process.env.PORT || 6010;

const app = express()

// mongodb
dbConnect()

app.use(express.json());
app.use(cors())
app.use('/api', routers)

app.listen(PORT, () => {
  console.log('Server is running');
})