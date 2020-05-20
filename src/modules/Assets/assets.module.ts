import Component from 'vue-class-component'
import Vue from 'vue'
import { Asset } from '@/modules/Assets/models/Asset'
import assetAPI from '@/api/assetAPI'
import AssetComponent from './components/asset.component/index.vue'
import Card from './components/card.component/index.vue'
import Translate from './components/translate.component/index.vue'

@Component({
  components: {
    AssetComponent,
    Card,
    Translate,
  },
})
export default class AssetsModule extends Vue {
  private words: [] = []
  private sentences: [] = []
  private text: string = ''
  private translates: [] = []
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

  assetEdit(item: Asset): void {
    this.editedAsset = item
    this.isComponentModalActive = true
  }

  load(): void {
    assetAPI.getAssets().then(
      (response) => {
        this.words = response.data.words
        this.sentences = response.data.sentences
      },
      (response) => {
        console.log(response)
      },
    )
  }

  removeCard(data: any): void {
    this.$store.dispatch('removeCard', data)
    this.decrement()
  }

  removeAsset(item: any): void {
    assetAPI.destroyAsset(item.id).then(
      (response) => {
        this.load()
      },
      (response) => {
        console.log(response)
      },
    )
  }

  addAsset(type: any): void {
    assetAPI.addAsset(type).then(
      (response) => {
        this.load()
      },
      (response) => {
        console.log(response)
      },
    )
  }

  search(): void {
    if (this.text !== '') {
      this.searchloaded = true
      assetAPI.getTranslate(this.text, this.sentence).then(
        (response) => {
          if (!response.data.length) {
            console.log(response.data.message)
            this.translates = []
            this.searchloaded = false
          }
          this.translates = response.data
          this.searchloaded = false
        },
        (response) => {
          console.log(response)
        },
      )
    }
  }

  searchsentences(): void {
    this.sentencesloaded = true
    assetAPI.sentences().then(
      (response) => {
        this.translates = response.data
        this.sentencesloaded = false
      },
      (response) => {
        console.log(response)
      },
    )
  }

  removeTranslate(data: any): void {
    assetAPI.removeTranslate(data.item.id).then(
      (response) => {
        if (response.data.success) {
          this.translates.splice(data.index, 1)
        }
      },
      (response) => {
        console.log(response)
      },
    )
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

  updateTitle() {
    assetAPI
      .updateTitle(this.editedAsset.id, {
        text: this.editedAsset.title,
        level: this.editedAsset.level,
      })
      .then(
        (response) => {
          if (response.data.success) {
            this.$buefy.snackbar.open(this.$tc('updated'))
            this.load()
          } else {
            this.$buefy.snackbar.open(this.$tc('error'))
          }
          this.close()
        },
        (response) => {
          console.log(response)
        },
      )
  }

  close() {
    this.isComponentModalActive = false
  }

  mounted() {
    this.load()
  }

  get cards() {
    return this.$store.getters.cards
  }
}
