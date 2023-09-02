import { Entity } from '@/app/Core/Domain/Contract/Entity'

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

  toDTO(): any {
  }
}

export class Feedback extends Entity {
  id: any
  subject: string
  message: string

  getId(): number | string {
    return this.id;
  }

  toDTO(): any {
    return {}
  }
}
