import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export class SettingForm extends EntityForm {
  title: string
  slug: string
  value: any
  type: string
}
