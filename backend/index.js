import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
     origin:"  http://localhost:5173/",
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
      
})); // optional: only if needed

// Routes
app.use("/api/auth", authRouter);

// Connect DB and then start server

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error("❌ Failed to connect to DB", err);
});
