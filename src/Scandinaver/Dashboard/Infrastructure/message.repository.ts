import { Inject, Service } from 'typedi'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { API } from '../../Core/Infrastructure/api/message.api'
import MessageAPI = API.MessageAPI
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'

@Service()
export default class MessageRepository extends CommonRepository<Message> {
  @Inject()
  protected api: MessageAPI
}
