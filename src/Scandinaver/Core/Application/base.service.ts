import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export abstract class BaseService<D> {
  public abstract create(input: any): D | Promise<D>
  public abstract getAll(): Promise<D[]>
  public abstract destroy(entity: D): Promise<void>
  public abstract update(entity: D, data: any): Promise<D>
  public abstract fromDTO(dto: EntityForm): D
}
