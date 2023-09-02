import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import ExtraComponent from './extra.component/index.vue'
import { Inject } from 'vue-typedi'
import TextService from '@/app/Translate/Application/text.service'
import { Translate } from '@/app/Translate/Domain/Translate'
import Tooltip from '../../../../Domain/Tooltip'

@Component({
  components: { ExtraComponent },
})
export default class TooltipComponent extends Vue {
  @Inject()
  private readonly service: TextService

  private text: Translate = new Translate()
  public loading: boolean = false
  private showedTooltip: string = ''

  async mounted() {
    await this.load(Number(this.$route.params.id))
  }

  async load(id: number): Promise<void> {
    this.loading = true
    this.text = await this.service.getText(id);
    this.loading = false
  }

  public addTooltip(): void {
    const tooltip = new Tooltip()
    tooltip.text_id = this.text.getId()
    this.text.tooltips.push(tooltip)
  }

  public removeTooltip(id: number): void {
    this.text.tooltips.splice(id, 1)
  }

  public showTooltips(tooltips: Tooltip): void {
    this.showedTooltip = tooltips.object
  }

  public clearTooltips(): void {
    this.showedTooltip = ''
  }

  public async save(): Promise<void> {
    await this.service.saveTooltips(this.text, this.text.tooltips);
    await this.load(this.text.getId())
    this.$buefy.snackbar.open(this.$tc('updated'))
  }

  get output(): string {
    let computed = this.text.text
    if (this.showedTooltip !== '') {
      computed = computed.replace(
        new RegExp(`(^|\\s|>)(${this.showedTooltip})([^\\w]|$|<)`, 'gi'),
        '$1<span class="extra">$2</span>$3',
      )
    }
    return computed
  }

  @Watch('extras')
  private onChange(val: any): void {
    if (val.length) {
      const self = this

      setTimeout(() => {
        const extras = document.querySelectorAll('.tooltip-extra')
        for (let i = 0; i < extras.length; i++) {
          extras[i].addEventListener(
            'mouseover',
            (el: any) => {
              self.showedTooltip = el.target.getAttribute('data-original-title')
            },
            false,
          )

          extras[i].addEventListener(
            'mouseout',
            (el) => {
              self.showedTooltip = ''
            },
            false,
          )
        }
      }, 3000)
    }
  }
}
