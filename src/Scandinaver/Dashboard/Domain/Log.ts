import User from '@/Scandinaver/User/Domain/User'
import { Type } from 'class-transformer'
import Example from '@/Scandinaver/Asset/Domain/Example'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Log extends Entity {
  public id: number
  public message: string
  public level: string
  public extra: any

  @Type(() => Date)
  public created_at: Date

  @Type(() => Example)
  public owner: User

  getId(): number | string {
    return this.id
  }
}
