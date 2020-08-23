
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class ItemComponent extends Vue {
  @Prop({ required: true })
  private word!: any
  @Prop({ required: true })
  private index!: any

  private translate: string = ''
}

