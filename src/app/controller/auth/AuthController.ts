import Reply from '../../services/Reply';
import { Request, Response } from 'express';
import { signJWT } from '../../helpers/JWT';
import { APP_HOST } from '../../../config/config';
import UserRepository from '../../repositories/UserRepository';
import { encryptTo, matchEncryptTo } from '../../helpers/helper';

export default class AuthController {
	static async login(req: Request, res: Response) {
		let { email, password } = req.body;

		let user = await UserRepository.findOneOrFail(email);

		if (user) {
			if (await matchEncryptTo(password, user.password)) {
				return Reply.status(200).success('Login success', {
					token: signJWT(user),
				});
			} else {
				return Reply.status(403).badRequest(
					'Forbidden',
					'Password incorrect'
				);
			}
		}
	}

	static async create(req: Request, res: Response) {
		let { validated } = req.body;

		let userValidate = {
			...validated,
			password: await encryptTo(validated.password),
		};

		let user = await UserRepository.create(userValidate);

		if (user) {
			return Reply.status(201).success('User created', user);
		}
	}

	static async update(req: Request, res: Response) {
		let { validated, decoded } = req.body;

		let userValidate = {
			...validated,
			password: await encryptTo(validated.password),
		};

		let user = await UserRepository.update(decoded.id, userValidate);
		if (user) {
			return Reply.status(200).success('User update', user);
		}
	}
}
