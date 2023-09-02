
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ModalComponent extends Vue {
  @Prop({ required: true })
  public visible!: any

  public form: any = {
    title: '',
    origtext: '',
    translate: '',
  }

  public close(): void {
    this.$emit('close')
  }
}
