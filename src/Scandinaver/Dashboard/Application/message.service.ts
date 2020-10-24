import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { Inject, Service } from 'typedi'
import MessageRepository from '@/Scandinaver/Dashboard/Infrastructure/message.repository'

@Service()
export default class MessageService extends BaseService<Message> {
  @Inject()
  private repository: MessageRepository

  create(input: any): Message {
    return new Message();
  }

  async getAll(): Promise<Message[]> {
    return this.repository.all()
  }

  async getOne(id: number): Promise<Message> {
    return this.repository.one(id)
  }

  async destroy(message: Message) {
    return this.repository.delete(message)
  }

  async read(message: Message): Promise<Message> {
    return this.repository.update(message, { readed: true })
  }
}
