import { Component, Prop, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import CardService from '@/Scandinaver/Asset/Application/card.service'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import * as events from '@/events/events.type'

@Component({
  components: {},
})
export default class TranslateComponent extends Vue {
  @Inject()
  private cardService: CardService

  @Prop({ required: true })
  private card!: Card
  @Prop({ required: true })
  private index!: number

  async add() {
    this.$eventHub.$emit(events.ADD_CART_TO_ASSET, this.card)
  }
}
