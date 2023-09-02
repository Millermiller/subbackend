import { Inject, Service } from 'typedi'
import { API } from './api/feedback.api'
import FeedbackAPI = API.FeedbackAPI
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { Feedback } from '@/app/Core/Domain/Contract/IFeedbackForm'

@Service()
export default class FeedbackRepository extends CommonRepository<Feedback> {
  @Inject()
  protected readonly api: FeedbackAPI
}
