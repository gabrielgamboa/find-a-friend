export interface Encrypt {
	hash(value: string): Promise<string>;
	compareHash(value: string, hash: string): Promise<boolean>;
}
