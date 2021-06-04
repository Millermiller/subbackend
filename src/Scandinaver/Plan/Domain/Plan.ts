import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Plan extends Entity {
  private _id: number
  private _name: string
  private _period: string
  private _cost: number
  private _cost_per_month: number

  getId(): number | string {
    return this._id;
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get period(): string {
    return this._period
  }

  set period(value: string) {
    this._period = value
  }

  get cost(): number {
    return this._cost
  }

  set cost(value: number) {
    this._cost = value
  }

  get cost_per_month(): number {
    return this._cost_per_month
  }

  set cost_per_month(value: number) {
    this._cost_per_month = value
  }
}
