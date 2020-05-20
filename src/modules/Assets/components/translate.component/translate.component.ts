import { Component, Prop, Vue } from 'vue-property-decorator'
import assetAPI from '@/api/assetAPI'

@Component({
  components: {},
})
export default class TranslateComponent extends Vue {
  @Prop({ required: true })
  private item!: any
  @Prop({ required: true })
  private index!: any

  add() {
    const data = {
      word_id: this.item.word.id,
      translate_id: this.item.id,
      asset_id: this.$store.getters.activeAssetId,
      index: this.index,
    }
    assetAPI.addCard(data).then(
      (response) => {
        if (response.data.success) {
          this.$store.commit('addCard', response.data.card)
          this.$emit('increment', this.index)
        }
      },
      (response) => {},
    )
  }
}
