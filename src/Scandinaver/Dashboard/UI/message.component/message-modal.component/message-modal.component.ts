import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import { Inject } from 'vue-typedi'
import MessageService from '@/Scandinaver/Dashboard/Application/message.service'

@Component({
  components: {},
})
export default class MessageModalComponent extends Vue {

  @Prop({ required: true })
  private item!: Message

  @Prop({ required: true })
  private visible!: any

  @Inject()
  private service: MessageService

  close() {
    this.$emit('close')
  }

  @Watch('visible')
  private async onChange(val: any) {
    if (val) {
      await this.service.read(this.item)
    }
  }
}
