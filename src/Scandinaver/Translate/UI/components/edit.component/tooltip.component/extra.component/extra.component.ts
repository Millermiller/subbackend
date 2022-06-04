import { Component, Prop, Vue } from 'vue-property-decorator'
import Tooltip from '../../../../../Domain/Tooltip'

@Component({
  components: {},
})
export default class ExtraComponent extends Vue {
  @Prop({ required: true })
  public item: Tooltip
  @Prop({ required: true })
  private index: number
}
