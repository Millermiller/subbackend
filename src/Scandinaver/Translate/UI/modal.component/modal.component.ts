
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class ModalComponent extends Vue {
  @Prop({ required: true })
  private visible!: any

  private form: any = {
    title: '',
    origtext: '',
    translate: '',
  }

  close() {
    this.$emit('close')
  }
}

