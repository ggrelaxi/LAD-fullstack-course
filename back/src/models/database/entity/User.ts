import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("client")
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	login: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column({
		unique: true,
	})
	email: string;
}
