import { Entity } from '@/app/Core/Domain/Contract/Entity'
import { PermissionForm } from '@/app/RBAC/Domain/PermissionForm'
import PermissionGroup from '@/app/RBAC/Domain/PermissionGroup'
import { Type } from 'class-transformer'

export default class Permission extends Entity {
  private _id: number
  private _name: string
  private _slug: string
  private _description: string
  private _group: PermissionGroup | null

  @Type(() => PermissionGroup)
  set group(value: PermissionGroup | null) {
    this._group = value
  }

  constructor() {
    super();
    this._group = null
  }

  getId(): number | string {
    return this._id
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

  get group(): PermissionGroup | null {
    return this._group
  }

  toDTO(): PermissionForm {
    const dto = new PermissionForm()

    dto.id = this._id
    dto.name = this._name
    dto.slug = this._slug
    dto.description = this._description
    dto.group = this._group === null ? null : this._group.getId()

    return dto
  }
}
