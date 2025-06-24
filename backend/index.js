import express, { json } from 'express';   
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
const app = express();
// config .env
dotenv.config();
let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});