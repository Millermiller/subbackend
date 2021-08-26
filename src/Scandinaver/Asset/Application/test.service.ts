import { Inject, Service } from 'typedi'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Test } from '@/Scandinaver/Asset/Domain/Test'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

@Service()
export default class TestService extends BaseService<Test> {
  public create(asset: Asset): Test {
    return new Test(asset);
  }

  destroy(entity: Test): Promise<void> {
    return Promise.resolve(undefined);
  }

  getAll(): Promise<Test[]> {
    return Promise.resolve([]);
  }

  fromDTO(dto: EntityForm): Test {
    return undefined;
  }

  update(entity: Test, data: any): Promise<Test> {
    return Promise.resolve(undefined);
  }
}
