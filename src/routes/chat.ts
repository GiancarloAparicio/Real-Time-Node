import { Router } from 'express';
import ChatController from '../app/controller/ChatController';

const chat = Router();

//views
chat.get('/', ChatController.home);
chat.get('/login', ChatController.login);
chat.get('/sing', ChatController.sing);

chat.get('/create', ChatController.create);
chat.post('/', ChatController.store);
chat.get('/:id', ChatController.show);
chat.get('/:id/edit', ChatController.edit);
chat.put('/:id', ChatController.update);
chat.delete('/:id', ChatController.destroy);

export default chat;
