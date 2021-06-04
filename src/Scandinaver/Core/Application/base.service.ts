export abstract class BaseService<D> {
  public abstract create(input: any): D | Promise<D>
}
