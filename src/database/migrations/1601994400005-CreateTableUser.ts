import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1601994400005 implements MigrationInterface {
	name = 'CreateTableUser1601994400005';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(30) NOT NULL, "last_name" varchar(30) NOT NULL, "email" varchar(50) NOT NULL, "password" varchar(50) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "user"`);
	}
}
