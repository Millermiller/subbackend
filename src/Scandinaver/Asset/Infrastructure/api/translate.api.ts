import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import Translate from '@/Scandinaver/Asset/Domain/Translate'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API{
  export class TranslateApi extends BaseAPI<Translate> {
    protected type: ClassType<Translate> = Translate

    destroy(id: number): Promise<AxiosResponse> {
      return request.delete(`/translate/${id}`)
    }

    all(): Promise<AxiosResponse<Translate[]>> {
      throw new Error('Method not implemented.')
    }

    create(data: any): Promise<AxiosResponse<Translate>> {
      throw new Error('Method not implemented.')
    }

    delete(id: number | string): Promise<any> {
      throw new Error('Method not implemented.')
    }

    one(id: number): Promise<AxiosResponse<Translate>> {
      throw new Error('Method not implemented.')
    }

    update(id: number | string, data: any): Promise<AxiosResponse<Translate>> {
      throw new Error('Method not implemented.')
    }

    search(data: any): Promise<AxiosResponse<Translate[]>> {
      throw new Error('Method not implemented.')
    }
  }
}
