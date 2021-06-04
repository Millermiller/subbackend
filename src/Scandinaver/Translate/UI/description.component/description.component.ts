import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'

@Component({
  components: {},
})
export default class DescriptionComponent extends Vue {
  @Prop({ required: true })
  public item!: Translate

  @Inject()
  private readonly service: TextService

  @Watch('item')
  private onChange(val: any): void {
    this.form.content = val.description
  }

  public form: any = {
    content: '',
  }

  public async save(): Promise<void> {
    await this.service.saveDescription(this.item, this.form.content)
    this.$buefy.snackbar.open(this.$tc('updated'))
    this.$emit('reload')
  }

  public clear(): void {
    this.form.content = ''
  }
}
