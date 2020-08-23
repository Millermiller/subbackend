import { Component, Prop, Vue } from 'vue-property-decorator'
import ItemComponent from './item.component/index.vue'

@Component({
  components: {ItemComponent}
})
export default class TranslateComponent extends Vue {
  @Prop({ required: true })
  private text!: any

  @Prop({ required: true })
  private cleartext!: any

  @Prop({ required: true })
  private sentences!: any

  removeWord(data: any) {
    this.sentences[data.word.sentence_num].splice(data.index, 1)
  }
  addWord(data: any) {
    this.sentences[data.word.sentence_num].splice(data.index + 1, 0,
      {
        orig: '',
        sentence_num: data.word.sentence_num,
        text_id: data.word.text_id,
        word: '',
      })
  }
}

