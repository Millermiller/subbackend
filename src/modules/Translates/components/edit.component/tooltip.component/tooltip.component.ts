
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Extra from './extra.component/index.vue'

@Component({
  components: {Extra}
})
export default class TooltipComponent extends Vue {
  @Prop({ required: true })
  private item!: any

  @Prop({ required: true })
  private extras!: any

  @Prop({ required: true })
  private sentences!: any

  private showedExtra: string = ''
  private text: any = {
    computed: '',
  }

  addExtra() {
    this.extras.push({ text_id: this.item.id })
  }

  removeExtra(id: number) {
    this.extras.splice(id, 1)
  }

  showExtra(extra: any) {
    this.showedExtra = extra.extra
  }

  clearExtra() {
    this.showedExtra = ''
  }

  get output() {
    let computed = ''

    for (let k = 0; k < this.sentences.length; k++) {
      const sentence = this.sentences[k]
      for (let i = 0; i < sentence.length; i++) {
        computed = `${computed} ${sentence[i].word}`
        if (i == sentence.length - 1) {
          computed += '. '
        }
      }
    }

    this.text.computed = computed

    if (this.showedExtra != '') {
      this.text.computed = this.text.computed.replace(
        new RegExp(`(^|\\s|>)(${this.showedExtra})([^\\w]|$|<)`, 'gi'),
        '$1<span class="extra">$2</span>$3',
      )
    }
    return this.text.computed
  }

  @Watch('extras')
  private onChange(val: any) {
    if (val.length) {
      const self = this

      setTimeout(() => {
        const extras = document.querySelectorAll('.tooltip-extra')
        for (let i = 0; i < extras.length; i++) {
          extras[i].addEventListener(
            'mouseover',
            (el: any) => {
              self.showedExtra = el.target.getAttribute('data-original-title')
            },
            false,
          )

          extras[i].addEventListener(
            'mouseout',
            (el) => {
              self.showedExtra = ''
            },
            false,
          )
        }
      }, 3000)
    }
  }
}

