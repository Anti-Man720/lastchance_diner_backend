import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';


import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    // origin: ['http://127.0.0.1:3000'],
    // origin: ['http://108.93.10.170'],
    origin: ['https://git.heroku.com/frontend-eating.git']
  })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('listening on port ' + port);
});