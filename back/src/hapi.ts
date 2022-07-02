import * as Hapi from "@hapi/hapi";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";
import * as HapiSwagger from "hapi-swagger";
import routes from "./routes";

class App {
	private server: Hapi.Server;

	constructor() {
		this.server = Hapi.server({
			port: "8000",
			host: "localhost",
		});

		this.server.route(routes);
	}

	private async addPlugins() {
		await this.server.register([Inert, Vision]);
		await this.server.register({
			plugin: HapiSwagger,
			options: {
				info: {
					title: "API Documentation",
					description: "API Documentation",
				},

				jsonPath: "/documentation.json",
				documentationPath: "/documentation",
				schemes: ["http", "https"],
				debug: true,
			},
		});
	}

	public async start() {
		try {
			await this.addPlugins();
			await this.server.start();

			console.log(
				"Server running on %s://%s:%s",
				this.server.info.protocol,
				this.server.info.address,
				this.server.info.port
			);
		} catch (error) {
			console.log(error);
		}
	}
}

export default new App();
