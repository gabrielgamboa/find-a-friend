import { z } from "zod";

export const createOrgSchema = z.object({
	responsibleName: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
	cep: z.coerce.string().max(11),
	address: z.string(),
	state: z.string().max(2),
	city: z.string(),
});
