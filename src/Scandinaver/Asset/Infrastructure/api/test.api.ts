import { AxiosResponse } from 'axios'
import request from '@/utils/request'
import { Test } from '@/Scandinaver/Asset/Domain/Test'
import { Service } from 'typedi'
import { BaseAPI } from '@/Scandinaver/Core/Infrastructure/base.api'
import { ClassType } from 'class-transformer/ClassTransformer'

export namespace API {
  @Service()
  export class TestAPI extends BaseAPI<Test> {
    protected type: ClassType<Test> = Test

    saveResult(test: Test, percent: number): Promise<AxiosResponse> {
      return request.post(`/result/${test.id}`, { result: percent })
    }

    nextLevel(test: Test): Promise<AxiosResponse<Test>> {
      return request.post(`/complete/${test.id}`)
    }

    all(): Promise<AxiosResponse<Test[]>> {
      throw new Error('method not implemented')
    }

    create(data: any): Promise<AxiosResponse<Test>> {
      throw new Error('method not implemented')
    }

    delete(id: number | string): Promise<any> {
      return Promise.resolve(undefined);
    }

    one(id: number): Promise<AxiosResponse<Test>> {
      throw new Error('method not implemented')
    }

    search(data: any): Promise<AxiosResponse<Test[]>> {
      throw new Error('method not implemented')
    }

    update(id: number | string, data: any): Promise<AxiosResponse<Test>> {
      throw new Error('method not implemented')
    }
  }
}
