import { Request, Response } from 'express';

export default class ChatController {
	static async home(req: Request, res: Response) {
		return res.render('./pages/index');
	}
}
