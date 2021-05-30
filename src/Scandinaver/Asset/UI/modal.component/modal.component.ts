import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import ModalExampleComponent from '@/Scandinaver/Asset/UI/modal-example.component/index.vue'
import Example from '@/Scandinaver/Asset/Domain/Example'
import { Inject } from 'vue-typedi'
import CardService from '@/Scandinaver/Asset/Application/card.service'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import CardForm from '@/Scandinaver/Asset/Domain/CardForm'
import { HIDE_CARD_MODAL, LOAD_ASSET, RELOAD_ASSET } from '@/events/events.type'

@Component({
  components: { ModalExampleComponent },
})
export default class ModalComponent extends Vue {
  @Prop({ required: true })
  private visible!: boolean

  @Prop({ required: true })
  private card: Card

  @Inject()
  private cardService: CardService

  @Inject()
  private assetService: AssetService

  @Watch('visible')
  private async onChange(val: any) {
    if (val) {
      this.editedCard = this.card.toDTO()
    }
  }

  private fileUploadFormData: FormData = new FormData()
  private text: string = ''
  private values: any[] = []
  private examples: { text: string; value: string }[] = []
  private loading: boolean = false
  private editedCard: CardForm = {
    examples: [],
    id: 0,
    translate: undefined,
    user: undefined,
    word: undefined
  }

  created() {
    this.text = this.editedCard.translate ? this.editedCard.translate.value : ''
    this.$eventHub.$on('updateExampleText', this.updateExampleText)
    this.$eventHub.$on('updateExampleValue', this.updateExampleValue)
  }

  addExample() {
    this.editedCard.examples.push(new Example())
  }

  removeExample(index: number) {
    this.editedCard.examples.splice(index, 1)
  }

  updateExampleText(data: { index: number; value: string }) {
    if (this.editedCard.examples[data.index]) {
      this.editedCard.examples[data.index].text = data.value
    }
  }

  updateExampleValue(data: { index: number; value: string }) {
    if (this.editedCard.examples[data.index]) {
      this.editedCard.examples[data.index].value = data.value
    }
  }

  bindFile(e: any) {
    e.preventDefault()
    this.fileUploadFormData.append('audiofile', e.target.files[0])
    // this.fileUploadFormData.append('id', this.card.word.getId())
  }

  close() {
    this.$eventHub.$emit(HIDE_CARD_MODAL)
  }

  updateAudio() {
    //  assetAPI.updateAudio(this.fileUploadFormData).then(
    //    (response) => {
    //      if (response.data.success) {
    //        this.$store.commit('changeAssetAudio', { index: this.index, url: response.data.url })
    //        this.close()
    //      }
    //    },
    //    (response) => {
    //      console.log(response)
    //    },
    //  )
  }

  async save() {
    this.loading = true
    try {
      await this.cardService.update(Card.fromDTO(this.editedCard), this.editedCard)
      this.$buefy.snackbar.open(this.$tc('cardUpdated'))
    } catch (error) {
      this.$buefy.snackbar.open(error)
    } finally {
      this.$eventHub.$emit(RELOAD_ASSET)
      this.$eventHub.$emit(HIDE_CARD_MODAL)
      this.loading = false
    }
  }

  play() {
    // @ts-ignore
    this.$refs.audio.play()
  }
}
