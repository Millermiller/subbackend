import { Component, Prop, Vue } from 'vue-property-decorator'
import Modal from '@/Scandinaver/Asset/UI/modal.component/index.vue'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import * as events from '@/events/events.type'
import { Inject } from 'vue-typedi'
import ReaderService from '@/Scandinaver/Asset/Application/reader.service'

@Component({
  components: { Modal },
})
export default class CardComponent extends Vue {
  @Prop({ required: true })
  private card!: Card

  @Prop({ required: true })
  private index!: number

  @Inject()
  private readerService: ReaderService

  private settingsModal: boolean = false

  showSettingsModal() {
    this.settingsModal = true
  }
  closeSettingsModal() {
    this.settingsModal = false
  }

  async play() {
    await this.readerService.read(this.card.word.getValue())
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
