import Component from 'vue-class-component'
import Vue from 'vue'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { Inject } from 'vue-typedi'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import * as events from '@/events/events.type'
import CardService from '@/Scandinaver/Asset/Application/card.service'
import draggable from 'vuedraggable'
import { permissions } from '@/permissions/permission.type'
import { AssetType } from '@/Scandinaver/Asset/Domain/Enum/AssetType'
import AssetDTO from '@/Scandinaver/Asset/Domain/AssetDTO'
import Translate from './translate.component/index.vue'
import AssetComponent from './asset.component/index.vue'
import CardComponent from './card.component/index.vue'
import CardForm from '@/Scandinaver/Asset/Domain/CardForm'
import Modal from '@/Scandinaver/Asset/UI/modal.component/index.vue'

@Component({
  components: {
    AssetComponent,
    CardComponent,
    Translate,
    draggable,
    Modal
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
  public settingsModal: boolean = false
  private cardsLoading: boolean = false
  private assetsLoading: boolean = false
  private sentence: number = 0
  private searchloaded: boolean = false
  private sentencesloaded: boolean = false
  private isComponentModalActive: boolean = false
  private editedAsset: Asset
  private activeAsset: Asset = new Asset()
  private assetForm: AssetDTO = {
    id: null,
    basic: true,
    type: 0,
    level: 0,
    title: '',
    language: '',
  }
  translates: Card[] = []
  permissions: {}
  private types: any = [
    {
      id: AssetType.WORDS,
      title: 'words',
    },
    {
      id: AssetType.SENTENCES,
      title: 'sentences',
    },
  ]
  private editedCard: Card = new Card()

  constructor() {
    super();
    this.permissions = permissions;
  }

  mounted() {
    this.load()
  }

  created() {
    this.$eventHub.$on(events.ADD_CART_TO_ASSET, this.add)
    this.$eventHub.$on(events.DELETE_CART_FROM_ASSET, this.removeCard)
    this.$eventHub.$on('setCardsLoading', this.changeCardsLoading)
    this.$eventHub.$on(events.SHOW_CARD_MODAL, this.openEditCardModal)
    this.$eventHub.$on(events.HIDE_CARD_MODAL, this.closeEditCardModal)
    this.$eventHub.$on(events.LOAD_ASSET, this.loadAsset)
    this.$eventHub.$on(events.RELOAD_ASSET, this.reloadAsset)
  }

  beforeDestroy() {
    this.$eventHub.$off(events.ADD_CART_TO_ASSET)
    this.$eventHub.$off(events.DELETE_CART_FROM_ASSET)
    this.$eventHub.$off('setCardsLoading')
    this.$eventHub.$off(events.SHOW_CARD_MODAL)
    this.$eventHub.$off(events.HIDE_CARD_MODAL)
    this.$eventHub.$off(events.LOAD_ASSET)
    this.$eventHub.$off(events.RELOAD_ASSET)
  }

  get cards() {
    return this.activeAsset.cards
  }

  private async loadAsset(asset: Asset) {
    this.changeCardsLoading(true)
    this.activeAsset = await this.service.getAsset(asset.id)
    this.changeCardsLoading(false)
  }

  private async reloadAsset() {
    await this.loadAsset(this.activeAsset)
  }

  private openEditCardModal(card: Card) {
    console.log(card)
    this.editedCard = card
    this.showEditCardModal()
  }

  private showEditCardModal() {
    this.settingsModal = true;
  }

  closeEditCardModal() {
    this.editedCard = new Card()
    this.settingsModal = false
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

  assetEdit(asset: Asset): void {
    this.editedAsset = asset
    this.assetForm = asset.toDTO()
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
      this.$buefy.snackbar.open(this.$tc('cardRemoved'))
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
    this.$buefy.snackbar.open(this.$tc('assetRemoved'))
  }

  async addAssetModal(type: AssetType) {
    this.isComponentModalActive = true
    this.assetForm.type = type
    this.assetForm.level = this.getMaxLevel(type) + 1
  }

  private getMaxLevel(type: AssetType): number {
    let data: Asset[] = []

    if (type === AssetType.WORDS) {
      data = this.words
    }

    if (type === AssetType.SENTENCES) {
      data = this.sentences
    }

    return data.reduce((prev, current) => ((prev.level > current.level) ? prev : current)).level
  }

  async save() {
    if (this.assetForm.id) {
      await this.service.updateAsset(this.editedAsset, this.assetForm)
    } else {
      await this.service.create(this.assetForm)
    }
    this.$buefy.snackbar.open(this.$tc('updated'))
    await this.load()
    this.isComponentModalActive = false
  }

  async search() {
    this.searchloaded = true
    this.translates = []
    this.translates = await this.service.translate(this.text, false)
    this.searchloaded = false
  }

  async searchSentences() {
    this.sentencesloaded = true
    this.translates = []
    try {
      this.translates = await this.service.translate(this.text || '', true)
    } catch (e) {
      //
    } finally {
      this.sentencesloaded = false
    }
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
      this.$buefy.snackbar.open(this.$tc('assetNotSelected'))
    }
    if (asset) {
      this.assetsLoading = true
      try {
        await this.cardService.addCardToAsset(card, asset)
        this.$buefy.snackbar.open(this.$tc('cardAdded'))
      } catch (e) {
        //
      } finally {
        this.assetsLoading = false
      }
    }
  }
}
