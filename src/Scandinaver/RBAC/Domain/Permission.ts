import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { PermissionForm } from '@/Scandinaver/RBAC/Domain/PermissionForm'

export default class Permission extends Entity {
  private id: number
  private _title: string
  private _slug: string
  private _description: string

  get description(): string {
    return this._description
  }

  set description(value: string) {
    this._description = value
  }

  get slug(): string {
    return this._slug
  }

  set slug(value: string) {
    this._slug = value
  }

  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }

  getId(): number | string {
    return this.id
  }

  toDTO(): PermissionForm {
    return {
      title: this._title,
      slug: this._slug,
      description: this._description,
    }
  }
}
