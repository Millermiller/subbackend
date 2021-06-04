import { Component, Prop, Vue } from 'vue-property-decorator'
import ItemComponent from './item.component/index.vue'

@Component({
  components: { ItemComponent },
})
export default class TranslateComponent extends Vue {
  @Prop({ required: true })
  private text!: any

  @Prop({ required: true })
  public cleartext!: any

  @Prop({ required: true })
  public sentences!: any

  public removeWord(data: any): void {
    this.sentences[data.word.sentence_num].splice(data.index, 1)
  }

  public addWord(data: any): void {
    this.sentences[data.word.sentence_num].splice(data.index + 1, 0,
      {
        orig: '',
        sentence_num: data.word.sentence_num,
        text_id: data.word.text_id,
        word: '',
      })
  }
}
