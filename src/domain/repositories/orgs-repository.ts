import { Org, Prisma } from "@prisma/client";

export interface OrgsRepository {
	create(org: Prisma.OrgCreateInput): Promise<Org>;
}
