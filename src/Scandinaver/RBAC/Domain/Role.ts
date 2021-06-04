import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { Type } from 'class-transformer'

export default class Role extends Entity {
  private _id: number
  private _name: string
  private _slug: string
  private _description: string
  private _permissions: Permission[]

  @Type(() => Permission)
  set permissions(value: Permission[]) {
    this._permissions = value
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

  get permissions(): Permission[] {
    return this._permissions
  }

  toDTO(): RoleForm {
    return {
      id: this._id,
      name: this._name,
      slug: this._slug,
      description: this._description,
    }
  }

  static fromDTO(dto: RoleForm): Role {
    const role = new Role()
    role.id = dto.id || 0
    role.name = dto.name
    role.slug = dto.slug
    role.description = dto.description
    return role
  }
}
