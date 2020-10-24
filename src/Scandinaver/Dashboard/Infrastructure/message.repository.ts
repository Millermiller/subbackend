import { Inject, Service } from 'typedi'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { API } from '@/Scandinaver/Core/Infrastructure/api/messageAPI'
import { plainToClass } from 'class-transformer'
import MessageAPI = API.MessageAPI

@Service()
export default class MessageRepository extends BaseRepository<Message> {
  @Inject()
  private api: MessageAPI

  async all(): Promise<Message[]> {
    return this.api.all().then(response => plainToClass(Message, response.data))
  }

  async create(data: any): Promise<Message> {
    throw new Error('Method not implemented.')
  }

  async update(entity: Message, data: any): Promise<Message> {
    return this.api.save(entity.getId(), entity).then(response => plainToClass(Message, response.data))
  }

  async delete(entity: Message): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async one(id: number): Promise<Message> {
    return this.api.load(id).then(response => plainToClass(Message, response.data))
  }
}
