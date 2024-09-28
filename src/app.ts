import Fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { routes } from "./infra/http/routes/routes";

export const app = Fastify();

app.register(routes);

app.setErrorHandler((error, request, reply) => {
	if (error instanceof ZodError) {
		return reply.status(400).send({
			message: "Validation error.",
			issues: error.format(),
		});
	}

	if (env.NODE_ENV !== "production") {
		console.error(error);
	} else {
		// todo: add external logs
	}

	return reply.status(500).send({ message: "Internal Server Error" });
});
