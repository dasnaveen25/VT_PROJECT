import express from 'express';
import { registration } from '../controller/authController.js';


const authRouter = express.Router();

authRouter.post('/registration', registration);

export default authRouter;