import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 30 })
	name: string;

	@Column({ type: 'varchar', length: 30 })
	last_name: string;

	@Column({ type: 'varchar', length: 50, unique: true })
	email: string;

	@Column({ type: 'varchar', length: 50 })
	password: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	update_at: Date;
}
