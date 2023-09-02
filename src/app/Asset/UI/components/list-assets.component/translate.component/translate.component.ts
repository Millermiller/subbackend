import { Component, Prop, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import CardService from '@/app/Asset/Application/card.service'
import { Card } from '@/app/Asset/Domain/Card'
import * as events from '@/events/events.type'

@Component({
  components: {},
})
export default class TranslateComponent extends Vue {
  @Inject()
  private readonly cardService: CardService

  @Prop({ required: true })
  public card!: Card

  @Prop({ required: true })
  private index!: number

  public add(): void {
    this.$eventHub.$emit(events.ADD_CART_TO_ASSET, this.card)
  }
}
