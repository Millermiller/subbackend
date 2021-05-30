import { Mutations } from 'vuex-smart-module'
import State from '@/Scandinaver/Asset/Infrastructure/store/asset/state'
import {
} from '@/Scandinaver/Asset/Infrastructure/store/asset/mutations.type'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import Example from '@/Scandinaver/Asset/Domain/Example'

export default class AssetMutations extends Mutations<State> {
  addExample(card: Card) {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    const index = this.state.activeAsset.cards.findIndex((item: any) => item.id === card.getId())
    this.state.activeAsset.cards[index].examples.push(new Example())
  }

  removeExample(data: {card: Card, index: number}) {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    const index = this.state.activeAsset.cards.findIndex((item: any) => item.id === data.card.getId())
    this.state.activeAsset.cards[index].examples.splice(data.index, 1)
  }

  updateExampleText(data: {card: Card, index: number}) {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    const index = this.state.activeAsset.cards.findIndex((item: any) => item.id === data.card.getId())
    this.state.activeAsset.cards[index].examples.splice(data.index, 1)
  }

  removeCard(card: Card) {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    const index = this.state.activeAsset.cards.findIndex((item: any) => item.id === card.getId())
    this.state.activeAsset.cards.splice(index, 1)
  }

  changeAssetTranslate(data: any) {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    this.state.activeAsset.cards[data.index].translate.value = data.translate.value
    this.state.activeAsset.cards[data.index].translate.id = data.translate.id
  }

  changeAssetWord(data: any) {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    this.state.activeAsset.cards[data.index].translate.value = data.text
  }

  changeAssetAudio(data: any) {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    this.state.activeAsset.cards[data.index].word.audio = data.url
  }

  addCard(card: Card) {
    if (this.state.activeAsset === null) {
      throw new Error('asset is null')
    }
    this.state.activeAsset.cards.push(card)
  }
}
