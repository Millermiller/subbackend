import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'

@Component({
  components: {},
})
export default class DescriptionComponent extends Vue {
  @Prop({ required: true })
  private item!: Translate

  @Inject()
  private service: TextService

  @Watch('item')
  private onChange(val: any) {
    this.form.content = val.description
  }

  private form: any = {
    content: '',
  }

  async save() {
    await this.service.saveDescription(this.item, this.form.content)
    this.$buefy.snackbar.open(this.$tc('updated'))
    this.$emit('reload')
  }

  clear() {
    this.form.content = ''
  }
}
