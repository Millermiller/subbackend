import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import assetAPI from '@/api/assetAPI'

@Component({
  //components: { ModalExaple },
})
export default class ModalComponent extends Vue {
  @Prop({ required: true })
  private visible!: any

  @Prop({ required: true })
  private card!: any

  @Prop({ required: true })
  private index!: any

  private fileUploadFormData: FormData = new FormData()
  private text: string = ''
  private values: any[] = []
  private examples: any[] = []

  bindFile(e: any) {
    e.preventDefault()
    this.fileUploadFormData.append('audiofile', e.target.files[0])
    this.fileUploadFormData.append('id', this.card.word.id)
  }

  close() {
    this.$emit('close')
  }

  updateAudio() {
    assetAPI.updateAudio(this.fileUploadFormData).then(
      (response) => {
        if (response.data.success) {
          this.$store.commit('changeAssetAudio', { index: this.index, url: response.data.url })
          this.close()
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  updateTranslate() {
    assetAPI
      .translate({
        card_id: this.card.id,
        id: this.card.translate.id,
        text: this.text,
        examples: this.examples,
      })
      .then(
        (response) => {
          if (response.data.success) {
            this.$store.commit('changeAssetWord', { index: this.index, text: this.text })
          }
          this.close()
        },
        (response) => {
          console.log(response)
        },
      )
  }

  setActive(word: any) {
    assetAPI
      .changeUsedTranslate({
        card_id: this.card.id,
        word_id: this.card.word.id,
        translate_id: word.id,
      })
      .then(
        (response) => {
          if (response.data.success) {
            this.text = word.value
            for (const value of this.values) {
              if (value !== 0) {
                value.active = false
              }
            }
            word.active = true
            this.$store.commit('changeAssetTranslate', { index: this.index, translate: word })
            this.close()
          }
        },
        (response) => {
          console.log(response)
        },
      )
  }

  play() {
    // @ts-ignore
    this.$refs.audio.play()
  }

  addExample() {
    this.examples.push({ text: '', value: '' })
  }

  removeExample(i: any) {
    this.examples.splice(i, 1)
  }

  @Watch('visible')
  private onChange(val: any) {
    if (val) {
      assetAPI.getValues(this.card).then(
        (response) => {
          this.values = response.data
          for (const v in this.values) {
            if (this.values[v].id === this.card.translate_id) {
              this.values[v].active = true
            }
          }
        },
        (response) => {
          console.log(response)
        },
      )
      assetAPI.getExamples(this.card).then(
        (response) => {
          this.examples = response.data
        },
        (response) => {
          console.log(response)
        },
      )
    }
  }

  mounted() {
    this.text = this.card.translate ? this.card.translate.value : ''
  }
}
