import Reply from '../services/Reply';
import { getRepository } from 'typeorm';
import User from '../../database/models/User';
import QuerySqlException from '../errors/exceptions/QuerySqlException';

class UserRepository {
	async create(user: any) {
		try {
			let newUser = getRepository(User).create(user);
			let response = await getRepository(User).save(newUser);
			return { ...response };
		} catch (error) {
			Reply.next(
				new QuerySqlException(
					[{ email: 'User exists' }],
					'Cannot create a new User, Registered email'
				)
			);
		}
	}

	async findOneOrFail(email: string) {
		try {
			let user = await getRepository(User).findOneOrFail({
				where: { email: email || Reply.request.body.email },
			});

			return { ...user };
		} catch (error) {
			Reply.next(
				new QuerySqlException(
					[{ user: 'User not found' }],
					'Email does not exist'
				)
			);
		}
	}

	async update(id: string, userUpdate: User) {
		try {
			let user: any = await getRepository(User).findOne(id);

			getRepository(User).merge(user, userUpdate);
			let response = await getRepository(User).save(user);
			return { ...response };
		} catch (error) {
			Reply.next(
				new QuerySqlException(
					[{ user: 'User fail' }],
					'Cannot update a  User'
				)
			);
		}
	}
}

export default new UserRepository();
