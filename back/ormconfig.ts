import { DataSource } from "typeorm";

const data_source = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "ggrelaxi",
	password: "251288",
	database: "diplom",
	synchronize: false,
	cache: false,
	entities: ["models/database/entity/**/*.{ts,js}"],
	migrations: ["models/database/migrations/**/*.{ts,js}"],
});

data_source.initialize();

export default data_source;
