import { hash } from "bcryptjs";
import { OrgsRepository } from "../repositories/orgs-repository";
import { OrgAlreadyExistsError } from "./errors/org-already-exists-error";

interface CreateOrgUseCaseRequest {
	responsibleName: string;
	email: string;
	cep: string;
	address: string;
	state: string;
	city: string;
}

export class CreateOrgUseCase {
	private orgsRepository: OrgsRepository;

	constructor(orgsRepository: OrgsRepository) {
		this.orgsRepository = orgsRepository;
	}

	async execute(data: CreateOrgUseCaseRequest) {
		const orgExists = await this.orgsRepository.findByEmail(data.email);

		if (orgExists) {
			throw new OrgAlreadyExistsError();
		}

		const createdOrg = await this.orgsRepository.create(data);

		return createdOrg;
	}
}
