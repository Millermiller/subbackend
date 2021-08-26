import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export class RoleForm extends EntityForm {
  name: string
  slug: string
  description: string
}
