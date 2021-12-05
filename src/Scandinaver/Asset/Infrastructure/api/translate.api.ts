import { AxiosResponse } from 'axios'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { ClassType } from 'class-transformer/ClassTransformer'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

export namespace API{
  export class TranslateApi extends BaseAPI<Translate> {
    protected readonly type: ClassType<Translate> = Translate
    protected readonly baseUrl: string = 'translate'

    public async all(): Promise<AxiosResponse<PaginatedResponse<Translate>>> {
      throw new Error('Method not implemented.')
    }

    public async one(id: number): Promise<AxiosResponse<Translate>> {
      throw new Error('Method not implemented.')
    }

    public async create(data: any): Promise<AxiosResponse<Translate>> {
      throw new Error('Method not implemented.')
    }

    public async delete(id: number | string): Promise<any> {
      throw new Error('Method not implemented.')
    }

    public async update(id: number | string, data: any): Promise<AxiosResponse<Translate>> {
      throw new Error('Method not implemented.')
    }

    public async search(data: any): Promise<AxiosResponse<Translate[]>> {
      throw new Error('Method not implemented.')
    }
  }
}
