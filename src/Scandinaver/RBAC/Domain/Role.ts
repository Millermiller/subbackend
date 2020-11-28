import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { RoleForm } from '@/Scandinaver/RBAC/Domain/RoleForm'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import { Type } from 'class-transformer'

export default class Role extends Entity {
  private id: number
  private _title: string
  private _slug: string
  private _description: string
  private _permissions: Permission[]

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

  get permissions(): Permission[] {
    return this._permissions
  }
  @Type(() => Permission)
  set permissions(value: Permission[]) {
    this._permissions = value
  }

  toDTO(): RoleForm {
    return {
      title: this._title,
      slug: this._slug,
      description: this._description,
    }
  }
}
