import { Inject, Service } from 'typedi'
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { API } from '@/Scandinaver/Core/Infrastructure/api/messageAPI'
import MessageAPI = API.MessageAPI
import { plainToClass } from 'class-transformer'

@Service()
export default class MessageRepository extends BaseRepository<Message> {

  @Inject()
  private api: MessageAPI

  async all(): Promise<Message[]> {
    return this.api.all().then(response => {
      console.log(response.data)
      return plainToClass(Message, response.data)
    })
  }

  async delete(entity: Message): Promise<any> {
    return this.api.destroy(entity.id)
  }

  async one(id: number): Promise<Message> {
    return this.api.load(id).then(response => plainToClass(Message, response.data))
  }

  async save(entity: Message): Promise<Message> {
    return this.api.save(entity.id, entity).then(response => plainToClass(Message, response.data))
  }
}
