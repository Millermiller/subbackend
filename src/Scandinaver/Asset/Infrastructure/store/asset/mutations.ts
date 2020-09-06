import { Mutations } from 'vuex-smart-module'
import State from '@/Scandinaver/Asset/Infrastructure/store/asset/state'
import {
} from '@/Scandinaver/Asset/Infrastructure/store/asset/mutations.type'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { Card } from '@/Scandinaver/Asset/Domain/Card'

export default class AssetMutations extends Mutations<State> {
  setActiveAsset(asset: Asset) {
    this.state.activeAsset = asset
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
