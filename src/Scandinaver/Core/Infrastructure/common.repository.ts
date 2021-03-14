import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { plainToClass } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'

export class CommonRepository<D extends Entity> {
  protected api: BaseAPI<D>
  private type: ClassType<D>

  constructor(api: BaseAPI<D>) {
    this.api = api
  }

  public async all(): Promise<D[]> {
    return this.api.all().then(response => plainToClass(this.api.class, response.data))
  }

  public async one(id: number): Promise<D> {
    return this.api.one(id).then(response => plainToClass(this.api.class, response.data))
  }

  public async create(data: any): Promise<D> {
    return this.api.create(data).then(response => plainToClass(this.type, response.data))
  }

  public async update(id: number|string, data: any): Promise<D> {
    return this.api.update(id, data).then(response => plainToClass(this.type, response.data))
  }

  public async delete(id: number|string): Promise<any> {
    return this.api.delete(id).then(response => plainToClass(this.type, response.data))
  }
}