import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { plainToClass } from 'class-transformer'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

export class CommonRepository<D extends Entity> {
  protected readonly api: BaseAPI<D>

  constructor(api: BaseAPI<D>) {
    this.api = api
  }

  public async all(filters: FiltersData): Promise<any> {
    return this.api.all(filters).then(response => plainToClass(this.api.class, response.data))
  }

  public async paginate(filters: FiltersData): Promise<PaginatedResponse<D>> {
    return this.api.all(filters).then(response => ({
      data: plainToClass<D, D>(this.api.class, response.data),
      meta: response.meta // TODO: inherit AxiosResponse
    }))
  }

  public async one(id: number): Promise<D> {
    return this.api.one(id).then(response => plainToClass(this.api.class, response.data))
  }

  public async create(data: any): Promise<D> {
    return this.api.create(data).then(response => plainToClass(this.api.class, response.data))
  }

  public async update(entity: D, data: any): Promise<D> {
    return this.api.update(entity.getId(), data).then(response => plainToClass(this.api.class, response.data))
  }

  public async delete(entity: D): Promise<any> {
    return this.api.delete(entity.getId()).then(response => plainToClass(this.api.class, response.data))
  }

  public async find(query: string): Promise<D[]> {
    return this.api.search(query).then(response => plainToClass(this.api.class, response.data))
  }
}
