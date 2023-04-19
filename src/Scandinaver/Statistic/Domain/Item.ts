import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { ItemForm } from '@/Scandinaver/Statistic/Domain/ItemForm'
import Language from '@/Scandinaver/Languages/Domain/Language';
import { Type } from 'class-transformer';
import User from '@/Scandinaver/User/Domain/User';

export class Item extends Entity {
  private _id: number
  private _category: string
  private _language: Language
  private _user: User

  @Type(() => User)
  set user(value: User) {
    this._user = value
  }

  @Type(() => Language)
  set language(value: Language) {
    this._language = value
  }

  getId(): number | string {
    return this._id;
  }

  get user(): User {
    return this._user;
  }

  set id(value: number) {
    this._id = value
  }

  get category(): string {
    return this._category
  }

  set category(value: string) {
    this._category = value
  }

  get language(): Language {
    return this._language
  }

  toDTO(): ItemForm {
    const dto = new ItemForm()

    dto.id = this._id
    dto.type = this._category

    return dto
  }
}
