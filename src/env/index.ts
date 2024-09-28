import "dotenv/config";
import { z } from "zod";

export const envSchema = z.object({
	NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
	DATABASE_URL: z.string(),
});

const envParsed = envSchema.safeParse(process.env);

if (!envParsed.success) {
	console.error("Invalid environments: ", envParsed.error);
	throw new Error("Invalid environments");
}

export const env = envParsed.data;
