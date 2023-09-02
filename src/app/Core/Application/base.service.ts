import { FiltersData } from '@/app/Core/Application/FiltersData'

export abstract class BaseService<D> {
  public abstract get(filters: FiltersData): any
  public abstract create(input: any): D | Promise<D>
  public abstract update(entity: D, data: any): Promise<D>
  public abstract destroy(entity: D): Promise<void>
}
