export interface OrgsRepository {
	create(org: Org): Promise<void>;
}

export class Org {
	id: string | undefined;
}
