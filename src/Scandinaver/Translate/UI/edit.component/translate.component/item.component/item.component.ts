
import { Component, Prop, Vue } from 'vue-property-decorator'
import DictionaryItem from '@/Scandinaver/Translate/Domain/DictionaryItem'

@Component({
  components: {},
})
export default class ItemComponent extends Vue {
  @Prop({ required: true })
  private item: DictionaryItem
  @Prop({ required: true })
  private index: number

  private translate: string = ''
}
