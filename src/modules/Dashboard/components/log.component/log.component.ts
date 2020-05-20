import { Component, Prop, Vue } from 'vue-property-decorator'
import Log from '@/modules/Dashboard/models/Log'

@Component({
  components: {},
})
export default class LogComponent extends Vue {
  @Prop({ required: true })
  private item!: Log
}
