import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'

export default class Plan extends Entity {
  id: number
  name: string
  period: string
  cost: number
  cost_per_month: number

  getId(): number | string {
    return this.id;
  }
}
