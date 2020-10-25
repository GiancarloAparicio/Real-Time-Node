import { Request, Response } from 'express';
import fs from 'fs-extra';
import path from 'path';
import { getRepository } from 'typeorm';

export default class ChatController {
	static async home(req: Request, res: Response) {
		return res.render('./pages/home', { status: true });
	}

	static async login(req: Request, res: Response) {
		return res.render('./pages/login', { status: false });
	}

	static async sing(req: Request, res: Response) {
		return res.render('./pages/sing', { status: false });
	}

	static async create(req: Request, res: Response) {
		let data;
		return res.render('view', data);
	}

	static async store(req: Request, res: Response) {
		return res.json({ store: 'send store', body: req.body });
	}

	static async show(req: Request, res: Response) {
		return res.json(req.params.id);
	}

	static async edit(req: Request, res: Response) {
		let data;
		return res.render('view', data);
	}

	static async update(req: Request, res: Response) {
		return res.json(req.params.id);
	}

	static async destroy(req: Request, res: Response) {
		await fs.unlink(path.resolve('imagePath'));
		return res.json(req.params.id);
	}
}
