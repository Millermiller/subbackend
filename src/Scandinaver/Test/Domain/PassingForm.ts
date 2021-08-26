import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export default class PassingForm extends EntityForm {
  errors: string[]
  percent: number
  completed: boolean
}
