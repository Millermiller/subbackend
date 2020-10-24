import User from '@/Scandinaver/User/Domain/User'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Message extends Entity {
  id: number
  name: string
  readed: boolean
  subject: string
  user: User
  message: string
  created_at: number

  getId(): number | string {
    return this.id;
  }
}
