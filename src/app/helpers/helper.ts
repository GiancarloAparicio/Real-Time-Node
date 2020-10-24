import bcrypt from 'bcrypt';
import AuthenticationException from '../errors/exceptions/AuthenticationException';
import Reply from '../services/Reply';

/**
 * Encrypts a string and returns the encrypted string,
 * as the second parameter the number of salt
 * @param password
 * @param salt
 */
export async function encryptTo(
	password: string,
	salt: number = 10
): Promise<string> {
	let getSalt = await bcrypt.genSalt(salt);

	return await bcrypt.hash(password, getSalt);
}

/**
 * Compare if the string "test" corresponds to the encryption "password",
 * As a third parameter, it receives if the function threw an Exception on failure
 * @param test
 * @param password
 */
export async function matchEncryptTo(
	test: string,
	password: string,
	exception: boolean = false
) {
	if (password && (await bcrypt.compare(test, password))) {
		return true;
	}

	if (exception) {
		Reply.next(
			new AuthenticationException({
				details: 'Password incorrect',
			})
		);
	}

	return false;
}

/**
 * 	Remove the property of an object only if it exists
 * @param {Object} object
 * @param {String} property
 */
export function removeProperty(object: any, property: string) {
	if (object.hasOwnProperty(property)) {
		delete object[property];
	}
	return object;
}
