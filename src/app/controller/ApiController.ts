import { Request, Response } from 'express';

export default class ApiController {
	static async index(req: Request, res: Response) {
		return res.json(req.body);
	}

	static async store(req: Request, res: Response) {
		return res.json(req.body);
	}

	static async show(req: Request, res: Response) {
		return res.json(req.params.id);
	}

	static async update(req: Request, res: Response) {
		return res.json(req.params.id);
	}

	static async destroy(req: Request, res: Response) {
		return res.json(req.params.id);
	}
}
