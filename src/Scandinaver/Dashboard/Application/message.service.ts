import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { Inject, Service } from 'typedi'
import MessageRepository from '@/Scandinaver/Dashboard/Infrastructure/message.repository'
import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

@Service()
export default class MessageService extends BaseService<Message> {
  @Inject()
  private readonly repository: MessageRepository

  public fromDTO(dto: EntityForm): Message {
    return undefined
  }

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

  public update(entity: Message, data: any): Promise<Message> {
    throw new Error('Method not implemented.');
  }
}
