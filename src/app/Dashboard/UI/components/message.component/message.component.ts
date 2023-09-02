import { Component, Prop, Vue } from 'vue-property-decorator'
import Message from '@/app/Dashboard/Domain/Message'
import Modal from './message-modal.component/index.vue'

@Component({
  components: {
    Modal,
  },
})
export default class MessageComponent extends Vue {
  @Prop({ required: true })
  public item!: Message

  public showModal: boolean = false

  public openModalBasic(): void {
    this.showModal = true
  }

  public closeModalBasic(): void {
    this.showModal = false
  }
}
