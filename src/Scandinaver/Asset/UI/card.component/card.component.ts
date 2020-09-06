import { Component, Prop, Vue } from 'vue-property-decorator'
import Modal from '@/Scandinaver/Asset/UI/modal.component/index.vue'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import * as events from '@/events/events.type'

@Component({
  components: { Modal },
})
export default class CardComponent extends Vue {
  @Prop({ required: true })
  private card!: Card

  @Prop({ required: true })
  private index!: number

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

  removeCard() {
    const asset = this.$store.getters.activeAssets
    this.$eventHub.$emit(events.DELETE_CART_FROM_ASSET, {
      card: this.card,
      index: this.index,
      asset,
    })
  }
}
