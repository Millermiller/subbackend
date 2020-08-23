import { Component, Prop, Vue } from 'vue-property-decorator'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import Modal from './message-modal.component/index.vue'

@Component({
  components: {
    Modal,
  },
})
export default class MessageComponent extends Vue {
  @Prop({ required: true })
  private item!: Message

  private showModal: boolean = false
  private cardModal: any = null
  private imageModal: any = null

  openModalBasic() {
    this.showModal = true
  }
  closeModalBasic() {
    this.showModal = false
  }
}
