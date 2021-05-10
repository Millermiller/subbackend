import { Inject, Service } from 'typedi'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Test } from '@/Scandinaver/Asset/Domain/Test'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'

@Service()
export default class TestService extends BaseService<Test> {
  create(asset: Asset): Test {
    return new Test(asset);
  }
}
