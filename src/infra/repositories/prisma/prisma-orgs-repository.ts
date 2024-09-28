import { Org, Prisma } from "@prisma/client";
import { OrgsRepository } from "../../../domain/repositories/orgs-repository";
import { prisma } from "../../lib/prisma";

export class PrismaOrgsRepository implements OrgsRepository {
	async create(data: Prisma.OrgCreateInput): Promise<Org> {
		const result = await prisma.org.create({
			data,
		});

		return result;
	}

	async findByEmail(email: string): Promise<Org | null> {
		return await prisma.org.findFirst({
			where: { email },
		});
	}
}
