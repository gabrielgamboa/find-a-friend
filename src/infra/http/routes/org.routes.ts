import { FastifyInstance } from "fastify";
import { createOrg } from "../controllers/orgs/create-org";

export async function orgRoutes(app: FastifyInstance) {
	app.post("/", createOrg);
}
