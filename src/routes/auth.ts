import { Router } from 'express';
import AuthController from '../app/controller/auth/AuthController';
import UserValidator from '../app/validators/UserValidator';
import LoginValidator from '../app/validators/LoginValidator';

const auth = Router();

auth.post('/login', ...LoginValidator, AuthController.login);
auth.post('/create', ...UserValidator, AuthController.create);
auth.put('/update', ...UserValidator, AuthController.update);

export default auth;
