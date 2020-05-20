import { Component, Prop, Vue } from 'vue-property-decorator'
import textAPI from '@/api/textAPI'

@Component({
  components: {},
})
export default class SynonymsComponent extends Vue {
  @Prop({ required: true })
  private sentences!: any

  private synonyms: [] = []
  private wordId: number = 0
  private newSynonym: string = ''
  private activePlaceholder: string = ''

  setActive(word: any) {
    this.activePlaceholder = word.word
    this.load(word.id)
    this.newSynonym = ''
  }
  load(id: number) {
    textAPI.getSynonyms(id).then(
      (response) => {
        if (response.data.success) {
          this.synonyms = response.data.synonyms
          this.wordId = id
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }
  add() {
    textAPI
      .addSynonym({
        word_id: this.wordId,
        synonym: this.newSynonym,
      })
      .then(
        (response) => {
          if (response.data.success) {
            this.load(this.wordId)
          }
        },
        (response) => {
          console.log(response)
        },
      )
  }
  remove(id: number) {
    textAPI.deleteSynonym(id).then(
      (response) => {
        if (response.data.success) {
          this.load(this.wordId)
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }
}
