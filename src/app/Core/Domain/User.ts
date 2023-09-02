import { store } from '@/app/Core/Infrastructure/store'
import { Asset } from '@/app/Asset/Domain/Asset'
import Role from '@/app/RBAC/Domain/Role'
import Permission from '@/app/RBAC/Domain/Permission'
import Plan from '@/app/Billing/Domain/Plan'

export interface IUser {
  avatar: string
  email: string
  id: number
  login: string
  active_to: any
  active: boolean
  plan: Plan
  roles: Role[]
  permissions: Permission[]
  permissionsSimple: string[]
  getFavouriteAsset(): Asset
}

export class User implements IUser {
  avatar!: string
  email!: string
  id!: number
  login!: string
  name!: string
  active_to: any
  active!: boolean
  plan!: Plan
  cardsCreated: number
  permissions: Permission[]
  roles: Role[]
  permissionsSimple: string[]
  permissionList: string[]

  constructor(id: number, email: string, login: string, avatar: string) {
    this.id = id
    this.email = email
    this.login = login
    this.avatar = avatar
  }
  getFavouriteAsset(): Asset {
    return store.getters.favouriteAsset
  }
}
