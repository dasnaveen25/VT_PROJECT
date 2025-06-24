import express from 'express';
import { login, logout, registration } from '../controller/authController.js';


const authRouter = express.Router();

authRouter.post('/registration', registration);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

export default authRouter;