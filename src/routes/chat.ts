import { Router } from 'express';
import ChatController from '../app/controller/ChatController';

const chat = Router();

//views
chat.get('/', ChatController.home);

export default chat;
