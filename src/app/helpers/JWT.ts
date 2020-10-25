import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { APP_KEY_JWT } from '../../config/config';

/**
 * Digitally sign the "data" object,
 * as the second parameter the number of hours before expiration
 * @param data
 * @param expires
 */
export function signJWT(data: object, expires: number = 1): string {
	return jwt.sign(data, `${APP_KEY_JWT}`, {
		expiresIn: expires + 'h',
	});
}

/**
 * Check if the authorization field exists and that the token is valid
 * @param req
 */
export function verifyJWT(req: Request) {
	if (req.headers.authorization) {
		let token = req.headers.authorization.split(' ')[1];
		return jwt.verify(token, `${APP_KEY_JWT}`);
	}
}
