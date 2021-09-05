import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export class LanguageForm extends EntityForm {
  title: string
  description: string
  letter: string
  flag: any
  image: any
  active: boolean
}
