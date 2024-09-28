import { FastifyReply, FastifyRequest } from "fastify";
import { BcryptAdapter } from "../../../../domain/encrypt/implementation/bcrypt";
import { CreateOrgUseCase } from "../../../../domain/usecases/create-org-usecase";
import { PrismaOrgsRepository } from "../../../repositories/prisma/prisma-orgs-repository";
import { createOrgSchema } from "../../schemas/org";

export async function createOrg(request: FastifyRequest, reply: FastifyReply) {
	const data = createOrgSchema.parse(request.body);

	const orgsRepository = new PrismaOrgsRepository();
	const bcryptAdapter = new BcryptAdapter(6);
	const createOrgUseCase = new CreateOrgUseCase(orgsRepository, bcryptAdapter);

	const org = await createOrgUseCase.execute(data);

	return reply.status(201).send(org);
}
