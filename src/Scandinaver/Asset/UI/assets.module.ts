import Component from 'vue-class-component'
import Vue from 'vue'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { Inject } from 'vue-typedi'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import * as events from '@/events/events.type'
import CardService from '@/Scandinaver/Asset/Application/card.service'
import draggable from 'vuedraggable'
import Translate from './translate.component/index.vue'
import AssetComponent from './asset.component/index.vue'
import CardComponent from './card.component/index.vue'

@Component({
  components: {
    AssetComponent,
    CardComponent,
    Translate,
    draggable,
  },
})
export default class AssetsModule extends Vue {
  @Inject()
  private service: AssetService

  @Inject()
  private cardService: CardService

  private words: Asset[] = []
  private sentences: Asset[] = []
  private text: string = ''

  private cardsLoading: boolean = false
  private assetsLoading: boolean = false
  private sentence: number = 0
  private searchloaded: boolean = false
  private sentencesloaded: boolean = false
  private isComponentModalActive: boolean = false
  private editedAsset: any = {
    id: '',
    basic: '',
    type: '',
    level: '',
    title: '',
  }
  translates: Card[] = []

  mounted() {
    this.load()
  }

  created() {
    this.$eventHub.$on(events.ADD_CART_TO_ASSET, this.add)
    this.$eventHub.$on(events.DELETE_CART_FROM_ASSET, this.removeCard)
    this.$eventHub.$on('setCardsLoading', this.changeCardsLoading)
  }

  beforeDestroy() {
    this.$eventHub.$off(events.ADD_CART_TO_ASSET)
    this.$eventHub.$off(events.DELETE_CART_FROM_ASSET)
    this.$eventHub.$off('setCardsLoading')
  }

  get cards() {
    return this.$store.getters.cards
  }

  async updateAssetOrder(el: any) {
    const asset: Asset = el.moved.element
    const level = el.moved.newIndex + 1

    this.words.forEach((word, index) => {
      word.level = index + 1
    })

    this.sentences.forEach((sentence, index) => {
      sentence.level = index + 1
    })

    asset.level = level
    await this.service.updateAsset(asset, asset)
  }

  updateCardOrder(el: any) {
    // TODO: implement
  }

  changeCardsLoading(state: boolean) {
    this.cardsLoading = state
  }

  assetEdit(item: Asset): void {
    this.editedAsset = item
    this.isComponentModalActive = true
  }

  async load() {
    this.assetsLoading = true
    const assets = await this.service.getAll()
    this.words = assets.words
    this.sentences = assets.sentences
    this.assetsLoading = false
  }

  async removeCard(data: any) {
    this.cardsLoading = true
    try {
      await this.cardService.removeFromAsset(data.card, data.asset)
      this.cardsLoading = false
      this.$buefy.snackbar.open('карточка удалена')
    } catch (e) {
      //
    } finally {
      this.cardsLoading = false
    }
  }

  async removeAsset(asset: Asset) {
    this.assetsLoading = true
    await this.service.destroyAsset(asset)
    await this.load()
    this.assetsLoading = false
    this.$buefy.snackbar.open('словарь удален')
  }

  async addAsset(type: number) {
    await this.service.create(type)
    await this.load()
  }

  async updateTitle() {
    await this.service.updateTitle(this.editedAsset, this.editedAsset.title)
    this.$buefy.snackbar.open(this.$tc('updated'))
    await this.load()
    this.isComponentModalActive = false
  }

  async search() {
    if (this.text !== '') {
      this.searchloaded = true
      this.translates = await this.service.searchWords(this.text, !!this.sentence)
      this.searchloaded = false
    }
  }

  async searchSentences() {
    this.sentencesloaded = true
    this.translates = await this.service.getSentences()
    this.sentencesloaded = false
  }

  async removeTranslate(data: any) {
    await this.service.removeTranslate(data)
    this.translates.splice(data.index, 1)
  }

  increment(): void {
    const aid = this.$store.getters.activeAssetId

    this.words.forEach((item: any, i) => {
      if (item.id === aid) item.cards_count++
    })
  }

  decrement(): void {
    const aid = this.$store.getters.activeAssetId

    this.words.forEach((item: any, i) => {
      if (item.id === aid) item.cards_count--
    })
  }

  close() {
    this.isComponentModalActive = false
  }

  async add(card: Card) {
    const asset = this.$store.getters.activeAssets

    if (!asset) {
      this.$buefy.snackbar.open('не выбран словарь')
    }
    if (asset) {
      this.assetsLoading = true
      try {
        await this.cardService.addCardToAsset(card, asset)
        this.$buefy.snackbar.open('карточка добавлена')
      } catch (e) {
        //
      } finally {
        this.assetsLoading = false
      }
    }
  }
}
