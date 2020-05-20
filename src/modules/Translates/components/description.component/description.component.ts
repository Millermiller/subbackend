import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import textAPI from '@/api/textAPI'

@Component({
  components: {},
})
export default class DescriptionComponent extends Vue {
  @Prop({ required: true })
  private item!: any

  private form: any = {
    content: '',
  }

  @Watch('item')
  private onChange(val: any) {
    this.form.content = val.description
  }

  save() {
    textAPI.saveDescription(this.item.id, this.form).then(
      (response) => {
        if (response.data.success) {
          this.$buefy.snackbar.open('Обновлено!')
          this.$emit('reload')
        } else {
          this.$buefy.snackbar.open(this.$tc('error'))
        }
      },
      (response) => {
        this.$buefy.snackbar.open(this.$tc('error'))
      },
    )
  }

  clear() {
    this.form.content = ''
  }
}
