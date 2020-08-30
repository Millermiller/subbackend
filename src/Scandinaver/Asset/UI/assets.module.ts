import Component from 'vue-class-component'
import Vue from 'vue'
import AssetComponent from './asset.component/index.vue'
import Card from './card.component/index.vue'
import Translate from './translate.component/index.vue'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import { Inject } from 'vue-typedi'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import { AssetType } from '@/Scandinaver/Asset/Domain/Enum/AssetType'

@Component({
  components: {
    AssetComponent,
    Card,
    Translate,
  },
})
export default class AssetsModule extends Vue {

  @Inject()
  private service: AssetService

  private words: Asset[] = []
  private sentences: Asset[] = []
  private text: string = ''

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
  private translates: any[] = []

  mounted() {
    this.load()
  }

  get cards() {
    return this.$store.getters.cards
  }

  assetEdit(item: Asset): void {
    this.editedAsset = item
    this.isComponentModalActive = true
  }

  async load() {
    const assets = await this.service.getAll()
    this.words = assets.filter((item) => item.type === AssetType.WORDS)
    this.sentences = assets.filter((item) => item.type === AssetType.SENTENCES)
  }

  removeCard(data: any): void {
    this.$store.dispatch('removeCard', data)
    this.decrement()
  }

  async removeAsset(item: any) {
    await this.service.destroyAsset(item)
    await this.load()
  }

  async addAsset(type: any) {
    await this.service.create(type)
    await this.load()
  }

  async updateTitle() {
    await this.service.updateTitle(this.editedAsset, this.editedAsset.title)
    this.$buefy.snackbar.open(this.$tc('updated'))
    await this.load()
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
}
