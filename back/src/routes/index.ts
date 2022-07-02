import hapiswagger from "hapi-swagger";

export default [
	{
		method: "GET",
		path: "/test",
		handler: (request: any, response: any) => {
			console.log(request);
			return "123";
		},
		options: {
			tags: ["api", "test"],
			description: "test",
			plugins: {
				"hapi-swagger": {
					response: {
						200: {
							description: "Seccess request",
						},
						400: {
							description: "fail request",
						},
					},
				},
			},
		},
	},
];
