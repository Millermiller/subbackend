import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { Inject, Service } from 'typedi'
import MessageRepository from '@/Scandinaver/Dashboard/Infrastructure/message.repository'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'

@Service()
export default class MessageService extends BaseService<Message> {
  @Inject()
  private readonly repository: MessageRepository

  public create(input: any): Message {
    return new Message();
  }

  public async get(filters: FiltersData): Promise<Message[]> {
    return this.repository.all(filters)
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

  public update(entity: Message, data: any): Promise<Message> {
    throw new Error('Method not implemented.');
  }
}
