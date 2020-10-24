import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default interface IFeedbackForm extends Entity{
  subject: string
  message: string
}

export class FeedbackForm implements IFeedbackForm {
  message: string = ''

  subject: string = ''

  getId(): number | string {
    return this.message;
  }
}
