import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export abstract class BaseRepository<D extends Entity> {
  public async abstract all(): Promise<D[]>
  public async abstract one(id: number): Promise<D>
  public async abstract create(data: any): Promise<D>
  public async abstract update(entity: D, data: any): Promise<D>
  public async abstract delete(entity: D): Promise<any>
}
