import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import Permission from '@/Scandinaver/RBAC/Domain/Permission'
import Role from '@/Scandinaver/RBAC/Domain/Role'
import { Type } from 'class-transformer'
import UserForm from '@/Scandinaver/User/Domain/UserForm'
import Plan from '@/Scandinaver/Billing/Domain/Plan'

export default class User extends Entity {
  private _id: number
  private _login: string
  private _password: string
  private _avatar: string
  private _email: string
  private _active: boolean
  private _active_to: string
  private _plan: Plan
  private _permissions: Permission[]
  private _roles: Role[]
  _password_confirmation: string

  @Type(() => Permission)
  set permissions(value: Permission[]) {
    this._permissions = value
  }

  @Type(() => Plan)
  set plan(value: Plan) {
    this._plan = value
  }

  @Type(() => Role)
  set roles(value: Role[]) {
    this._roles = value
  }

  set id(value: number) {
    this._id = value
  }

  get id(): number {
    return this._id
  }

  getId(): number {
    return this._id
  }

  get login(): string {
    return this._login
  }

  set login(value: string) {
    this._login = value
  }

  set password(value: string) {
    this._password = value
  }

  get avatar(): string {
    return this._avatar
  }

  set avatar(value: string) {
    this._avatar = value
  }

  get email(): string {
    return this._email
  }

  set email(value: string) {
    this._email = value
  }

  get active(): boolean {
    return this._active
  }

  set active(value: boolean) {
    this._active = value
  }

  get active_to(): string {
    return this._active_to
  }

  set active_to(value: string) {
    this._active_to = value
  }

  get permissions(): Permission[] {
    return this._permissions
  }

  get roles(): Role[] {
    return this._roles
  }

  get plan(): Plan {
    return this._plan
  }

  public toDTO(): UserForm {
    return {
      id: this._id,
      email: this._email,
      login: this._login,
      password: this._password,
      password_confirmation: this._password,
      roles: this._roles.map(role => role.toDTO()),
      plan: this._plan,
    }
  }
}
