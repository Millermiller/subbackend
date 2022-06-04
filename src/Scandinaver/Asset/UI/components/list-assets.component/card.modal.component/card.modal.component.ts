import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import ModalExampleComponent from './card.example.component/index.vue'
import { Inject } from 'vue-typedi'
import CardService from '@/Scandinaver/Asset/Application/card.service'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import CardForm from '@/Scandinaver/Asset/Domain/CardForm'
import { HIDE_CARD_MODAL, RELOAD_ASSETS } from '@/events/events.type'
import ExampleDTO from '@/Scandinaver/Asset/Domain/DTO/ExampleDTO'

@Component({
  components: { ModalExampleComponent },
})
export default class CardModalComponent extends Vue {
  @Prop({ required: true })
  public visible: boolean

  @Prop({ required: false })
  private card: Card

  @Inject()
  private readonly cardService: CardService

  @Inject()
  private readonly assetService: AssetService

  @Watch('visible')
  private async onChange(val: any): Promise<void> {
    if (val) {
      this.editedCard = this.card.toDTO()
    }
  }

  private fileUploadFormData: FormData = new FormData()
  private text: string = ''
  private values: any[] = []
  private examples: { text: string; value: string }[] = []
  public loading: boolean = false
  public editedCard: CardForm = new CardForm()

  created(): void {
    this.text = this.editedCard.translate ? this.editedCard.translate.value : ''
    this.$eventHub.$on('updateExampleText', this.updateExampleText)
    this.$eventHub.$on('updateExampleValue', this.updateExampleValue)
  }

  public addExample(): void {
    this.editedCard.examples.push(new ExampleDTO())
  }

  public removeExample(index: number): void {
    this.editedCard.examples.splice(index, 1)
  }

  private updateExampleText(data: { index: number; value: string }): void {
    if (this.editedCard.examples[data.index]) {
      this.editedCard.examples[data.index].text = data.value
    }
  }

  private updateExampleValue(data: { index: number; value: string }): void {
    if (this.editedCard.examples[data.index]) {
      this.editedCard.examples[data.index].value = data.value
    }
  }

  bindFile(e: any) {
    e.preventDefault()
    this.fileUploadFormData.append('audiofile', e.target.files[0])
    // this.fileUploadFormData.append('id', this.card.word.getId())
  }

  public close(): void {
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

  public async save(): Promise<void> {
    this.loading = true
    try {
      this.validateExamples(this.editedCard.examples)
      await this.cardService.update(this.card, this.editedCard)
      this.$buefy.snackbar.open(this.$tc('cardUpdated'))
    } catch (error) {
      if (error.message) {
        this.$buefy.snackbar.open(error.message)
      } else {
        this.$buefy.snackbar.open(error)
      }
    } finally {
      this.$eventHub.$emit(RELOAD_ASSETS)
      this.$eventHub.$emit(HIDE_CARD_MODAL)
      this.loading = false
    }
  }

  private validateExamples(examples: ExampleDTO[]) {
    const isExistSelection = examples.every(example => example.value.includes('<'))
    if (examples !== [] && isExistSelection === false) {
      throw new Error('check examples')
    }
  }
}
