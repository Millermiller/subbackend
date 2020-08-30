import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import Plan from '@/Scandinaver/Plan/Domain/Plan'

export interface IUser {
  avatar: string
  email: string
  id: number
  login: string
  active_to: any
  active: boolean
  plan: Plan
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
