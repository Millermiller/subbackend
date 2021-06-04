import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class SynonymAPI extends BaseAPI<Synonym> {
    protected readonly type: ClassType<Synonym> = Synonym
    protected readonly baseUrl: string = ''

    public async all(): Promise<AxiosResponse> {
      throw new Error('Method not implemented.');
    }

    public async one(id: number): Promise<AxiosResponse<Synonym>> {
      throw new Error('Method not implemented.');
    }

    public async create(form: any): Promise<AxiosResponse<Synonym>> {
      throw new Error('Method not implemented.');
    }

    public async update(id: string | number, data: any): Promise<AxiosResponse<Synonym>> {
      throw new Error('Method not implemented.');
    }

    public async delete(id: string | number): Promise<any> {
      throw new Error('Method not implemented.');
    }

    public async search(data: any): Promise<AxiosResponse<Synonym[]>> {
      throw new Error('Method not implemented.');
    }
  }
}
