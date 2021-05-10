import { AxiosResponse } from 'axios'
import { Service } from 'typedi'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class SynonymAPI extends BaseAPI<Synonym> {
    protected type: ClassType<Synonym> = Synonym
    protected baseUrl: string = ''

    all(): Promise<AxiosResponse> {
      throw new Error('Method not implemented.');
    }

    one(id: number): Promise<AxiosResponse<Synonym>> {
      throw new Error('Method not implemented.');
    }

    create(form: any): Promise<AxiosResponse<Synonym>> {
      throw new Error('Method not implemented.');
    }

    update(id: string | number, data: any): Promise<AxiosResponse<Synonym>> {
      throw new Error('Method not implemented.');
    }

    delete(id: string | number): Promise<any> {
      throw new Error('Method not implemented.');
    }

    search(data: any): Promise<AxiosResponse<Synonym[]>> {
      throw new Error('Method not implemented.');
    }
  }
}
