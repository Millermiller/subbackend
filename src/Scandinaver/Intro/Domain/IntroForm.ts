import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export class IntroForm extends EntityForm {
  page: string
  target: string
  content: string
  position: string
  headerText: string
  sort: number
  active:boolean
}
