import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class TestComponent extends Vue {
  @Prop({ required: true })
  private textdata!: any

  @Prop({ required: true })
  private dictionary!: any

  @Prop({ required: true })
  public extras!: any

  @Prop({ required: true })
  private cleartext!: any

  public input: string = ''
  private inputWords: any[] = []
  private showedExtra: string = ''
  private showSuccess: boolean = false
  private progress: number = 0
  private nextTextId: number = 0
  private dictionaryLength: number = 0

  get output() {
    let c = 0
    let origs: any[] = []
    this.dictionaryLength = this.dictionary.length
    this.textdata.computed = this.cleartext

    this.inputWords.forEach((el: any) => {
      el = el.toLowerCase()
      if (el !== '' && el in this.dictionary) {
        origs = origs.concat(this.dictionary[el].map((item: any) => `${item}|${el}`))
      }
    })

    origs = origs.filter((v, i, a) => a.indexOf(v) === i)

    for (let i = 0; i < origs.length; i++) {
      const arr = origs[i].split('|')
      const word = arr[0].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
      const tooltip = arr[1]

      this.textdata.computed = this.textdata.computed.replace(
        new RegExp(`(^|\\s)(${word.trim()})([^\\w]|$)`, 'gi'),
        `$1<span class="tag is-success" tooltip=${tooltip}>$2</span>$3`,
      )
      c++
    }

    if (this.showedExtra !== '') {
      this.textdata.computed = this.textdata.computed.replace(
        new RegExp(`(^|\\s|>)(${this.showedExtra.trim()})([^\\w]|$|<)`, 'gi'),
        '$1<span class="extra">$2</span>$3',
      )
    }

    this.progress = Math.floor((c * 100) / this.textdata.words_count)

    this.$Progress.set(this.progress)

    if (this.progress > 99) this.showSuccess = true

    return this.textdata.computed
  }

  separate() {
    this.inputWords = this.input
      .replace(/\s+/g, ' ')
      .replace(/\./g, '')
      .replace(/,/g, '')
      .trim()
      .split(' ')
  }

  showExtra(extra: any) {
    this.showedExtra = extra.orig
  }

  clearExtra() {
    this.showedExtra = ''
  }

  clear() {
    this.input = ''
    this.inputWords = []
    this.progress = 0
  }

  gotonext() {
    this.$router.push(`/translates/${this.nextTextId}`)
  }
}
