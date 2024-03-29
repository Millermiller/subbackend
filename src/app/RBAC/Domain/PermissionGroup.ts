import { Entity } from '@/app/Core/Domain/Contract/Entity'
import { PermissionGroupForm } from '@/app/RBAC/Domain/PermissionGroupForm'

export default class PermissionGroup extends Entity {
  private _id: number
  private _name: string
  private _slug: string
  private _description: string

  getId(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value
  }

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

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  toDTO(): PermissionGroupForm {
    const dto = new PermissionGroupForm()

    dto.id = this._id
    dto.name = this._name
    dto.slug = this._slug
    dto.description = this._description

    return dto
  }
}
