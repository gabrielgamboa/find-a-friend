import Fastify  from "fastify";
import { routes } from "./infra/http/routes/routes";

export const fastifyInstance = Fastify();

fastifyInstance.register(routes);
