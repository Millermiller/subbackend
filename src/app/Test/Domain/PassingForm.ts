import { EntityForm } from '@/app/Core/Domain/Contract/EntityForm'
import Passing from '@/app/Test/Domain/Passing'

export default class PassingForm extends EntityForm<Passing> {
  errors: string[]
  percent: number
  completed: boolean

  public fromDTO(): Passing {
    const passing = new Passing()
    passing.id = this.id || 0
    passing.completed = this.completed
    passing.percent = this.percent

    return passing
  }
}
