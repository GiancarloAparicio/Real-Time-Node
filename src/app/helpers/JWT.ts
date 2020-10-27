import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { APP_KEY_JWT } from '../../config/config';
import Reply from '../services/Reply';
import AuthorizationException from '../errors/exceptions/AuthorizationException';

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

/**
 * Check if the token is valid
 * @param token
 */
export function verifyToken(token: string): boolean {
	try {
		let decoded = jwt.verify(token, `${APP_KEY_JWT}`);
		return decoded ? true : false;
	} catch (error) {
		Reply.next(new AuthorizationException({ token: 'Invalid' }, 'Forbidden'));
		return false;
	}
}
