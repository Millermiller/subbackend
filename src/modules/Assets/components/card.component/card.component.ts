import { Component, Prop, Vue } from 'vue-property-decorator'
import Modal from '@/modules/Assets/components/modal.component/index.vue'

@Component({
  components: { Modal },
})
export default class CardComponent extends Vue {
  @Prop({ required: true })
  private card!: any

  @Prop({ required: true })
  private index!: any

  private settingsModal: boolean = false

  showSettingsModal() {
    this.settingsModal = true
  }
  closeSettingsModal() {
    this.settingsModal = false
  }
  play() {
    // @ts-ignore
    this.$refs.audio.play()
  }
}
