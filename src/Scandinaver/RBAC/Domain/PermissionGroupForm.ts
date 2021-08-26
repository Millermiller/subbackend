import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export class PermissionGroupForm extends EntityForm {
  name: string
  slug: string
  description: string
}
