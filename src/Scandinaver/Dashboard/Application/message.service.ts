import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { Inject, Service } from 'typedi'
import MessageRepository from '@/Scandinaver/Dashboard/Infrastructure/message.repository'

@Service()
export default class MessageService extends BaseService<Message> {
  @Inject()
  private readonly repository: MessageRepository

  public create(input: any): Message {
    return new Message();
  }

  public async getAll(): Promise<Message[]> {
    return this.repository.all()
  }

  public async getOne(id: number): Promise<Message> {
    return this.repository.one(id)
  }

  public async destroy(message: Message): Promise<void> {
    return this.repository.delete(message)
  }

  public async read(message: Message): Promise<Message> {
    return this.repository.update(message, { readed: true })
  }
}
