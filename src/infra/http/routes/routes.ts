import { FastifyInstance } from "fastify";
import { orgRoutes } from "./org.routes";

export async function routes(app: FastifyInstance) {
    app.register(orgRoutes, { prefix: "/orgs" });
}