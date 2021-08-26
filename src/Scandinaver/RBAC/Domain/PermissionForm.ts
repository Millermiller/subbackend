import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export class PermissionForm extends EntityForm {
  name: string
  slug: string
  description: string
  group: number | null
}
