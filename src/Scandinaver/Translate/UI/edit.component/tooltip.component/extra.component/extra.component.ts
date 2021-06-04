
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ExtraComponent extends Vue {
  @Prop({ required: true })
  public item!: any
  @Prop({ required: true })
  private index!: any
}
