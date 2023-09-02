import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import Message from '@/app/Dashboard/Domain/Message'
import { Inject } from 'vue-typedi'
import MessageService from '@/app/Dashboard/Application/message.service'

@Component({
  components: {},
})
export default class MessageModalComponent extends Vue {
  @Prop({ required: true })
  public item!: Message

  @Prop({ required: true })
  private visible!: any

  @Inject()
  private readonly service: MessageService

  public close(): void {
    this.$emit('close')
  }

  @Watch('visible')
  private async onChange(val: any): Promise<void> {
    if (val) {
      await this.service.read(this.item)
    }
  }
}
