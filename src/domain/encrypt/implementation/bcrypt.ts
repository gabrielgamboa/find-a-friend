import { compare, hash } from "bcryptjs";
import { Encrypt } from "../encrypt";

export class BcryptProvider implements Encrypt {
	constructor(private readonly salt: number = 6) {}

	async hash(value: string): Promise<string> {
		return hash(value, this.salt);
	}
	async compareHash(value: string, hash: string): Promise<boolean> {
		return compare(value, hash);
	}
}
