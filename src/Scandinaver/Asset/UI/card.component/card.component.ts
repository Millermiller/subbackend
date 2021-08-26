import { Component, Prop, Vue } from 'vue-property-decorator'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import * as events from '@/events/events.type'
import { Inject } from 'vue-typedi'
import ReaderService from '@/Scandinaver/Asset/Application/reader.service'
import { SHOW_CARD_MODAL } from '@/events/events.type'

@Component({})
export default class CardComponent extends Vue {
  @Prop({ required: true })
  public card: Card

  @Prop({ required: true })
  private index: number

  @Inject()
  private readonly readerService: ReaderService

  public showSettingsModal(): void {
    this.$eventHub.$emit(SHOW_CARD_MODAL, this.card)
  }

  public async play(): Promise<void> {
    await this.readerService.read(this.card.term.getValue())
  }

  public removeCard(): void {
    const asset = this.$store.getters.activeAssets
    this.$eventHub.$emit(events.DELETE_CART_FROM_ASSET, {
      card: this.card,
      index: this.index,
      asset,
    })
  }
}
