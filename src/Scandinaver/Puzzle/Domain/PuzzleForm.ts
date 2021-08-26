import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'

export class PuzzleForm extends EntityForm {
  text: string
  translate: string
  language: string
}
