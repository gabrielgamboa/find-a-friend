export interface OrgsRepository {
    create(org: Org): Promise<void>
}