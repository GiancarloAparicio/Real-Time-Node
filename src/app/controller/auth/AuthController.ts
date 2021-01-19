import Reply from '../../services/Reply';
import { Request, Response } from 'express';
import { signJWT } from '../../helpers/JWT';
import UserRepository from '../../repositories/UserRepository';
import { encryptTo, matchEncryptTo, removeProperty } from '../../helpers/helper';

export default class AuthController {

	static async login(req: Request, res: Response) {
		let { email, password } = req.body;

		let currentUser = await UserRepository.findOneOrFail(email);

		if ( currentUser ) {
			if (await matchEncryptTo( password, currentUser.password )) {

				return Reply.status(200).success('Login success', {
					user: removeProperty(currentUser, 'password'),
					token: signJWT(currentUser),
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
		let { validated } = req.body;  //Validated user data

		let userValidate = {
			...validated,
			password: await encryptTo(validated.password),
		};

		let currentUser = await UserRepository.createOrFail(userValidate);

		if (currentUser) {
			return Reply.status(201).success('User created', {
				user: removeProperty(currentUser, 'password'),
				token: signJWT(currentUser),
			});
		}
	}

	static async update(req: Request, res: Response) {
		let { validated, token } = req.body;

		let userValidate = {
			...validated,
			password: await encryptTo( validated.password ),
		};

		let user = await UserRepository.update( token.id, userValidate );
		if (user) {
			return Reply.status(200).success( 'User update', user );
		}
	}
}
