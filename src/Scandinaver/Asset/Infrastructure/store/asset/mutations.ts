import { Mutations } from 'vuex-smart-module'
import State from '@/Scandinaver/Asset/Infrastructure/store/asset/state'
import {
} from '@/Scandinaver/Asset/Infrastructure/store/asset/mutations.type'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import Example from '@/Scandinaver/Asset/Domain/Example'

export default class AssetMutations extends Mutations<State> {
  public addExample(card: Card): void {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    const index = this.state.activeAsset.cards.all().findIndex((item: any) => item.id === card.getId())
    this.state.activeAsset.cards.all()[index].examples.push(new Example())
  }

  public removeExample(data: {card: Card, index: number}): void {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    const index = this.state.activeAsset.cards.all().findIndex((item: any) => item.id === data.card.getId())
    this.state.activeAsset.cards.all()[index].examples.splice(data.index, 1)
  }

  public updateExampleText(data: {card: Card, index: number}): void {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    const index = this.state.activeAsset.cards.all().findIndex((item: any) => item.id === data.card.getId())
    this.state.activeAsset.cards.all()[index].examples.splice(data.index, 1)
  }

  public removeCard(card: Card): void {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    const index = this.state.activeAsset.cards.all().findIndex((item: any) => item.id === card.getId())
    this.state.activeAsset.cards.all().splice(index, 1)
  }

  public addCard(card: Card): void {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    this.state.activeAsset.cards.add(card)
  }
}
