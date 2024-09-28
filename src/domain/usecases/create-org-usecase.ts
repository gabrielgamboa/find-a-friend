import { hash } from "bcryptjs";
import { Encrypt } from "../encrypt/encrypt";
import { OrgsRepository } from "../repositories/orgs-repository";
import { OrgAlreadyExistsError } from "./errors/org-already-exists-error";

interface CreateOrgUseCaseRequest {
	responsibleName: string;
	email: string;
	password: string;
	cep: string;
	address: string;
	state: string;
	city: string;
}

export class CreateOrgUseCase {
	private orgsRepository: OrgsRepository;
	private encrypt: Encrypt;

	constructor(orgsRepository: OrgsRepository, encrypt: Encrypt) {
		this.orgsRepository = orgsRepository;
		this.encrypt = encrypt;
	}

	async execute(data: CreateOrgUseCaseRequest) {
		const orgExists = await this.orgsRepository.findByEmail(data.email);

		if (orgExists) {
			throw new OrgAlreadyExistsError();
		}

		const password_hash = await this.encrypt.hash(data.password);

		const createdOrg = await this.orgsRepository.create({
			...data,
			password_hash,
		});

		return createdOrg;
	}
}
