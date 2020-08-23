import { Component, Prop, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import CardService from '@/Scandinaver/Asset/Application/card.service'

@Component({
  components: {},
})
export default class TranslateComponent extends Vue {

  @Inject()
  private cardService: CardService

  @Prop({ required: true })
  private item!: any
  @Prop({ required: true })
  private index!: any

  async add() {
    const data = {
      word: this.item.word,
      translate: this.item,
      assetId: this.$store.getters.activeAssetId,
      index: this.index,
    }
    await this.cardService.create(data)
    this.$emit('increment', this.index)
  }
}
