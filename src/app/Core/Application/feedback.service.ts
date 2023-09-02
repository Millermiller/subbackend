import { Inject, Service } from 'typedi'
import FeedbackRepository from '@/app/Core/Infrastructure/feedback.repository'
import IFeedbackForm, { FeedbackForm } from '@/app/Core/Domain/Contract/IFeedbackForm'

@Service()
export default class FeedbackService {
  @Inject()
  private readonly repository: FeedbackRepository

  private async addFeedback(form: IFeedbackForm): Promise<FeedbackForm> {
    return this.repository.create(form)
  }
}
