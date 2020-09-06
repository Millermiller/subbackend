import { Component, Prop, Vue } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Word } from '@/Scandinaver/Asset/Domain/Word'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'

@Component({
  components: {},
})
export default class SynonymsComponent extends Vue {
  @Prop({ required: true })
  private sentences!: any

  @Inject()
  private service: TextService

  private synonyms: Synonym[] = []
  private wordId: number = 0
  private newSynonym: string = ''
  private activePlaceholder: string = ''
  private word: Word

  setActive(word: Word) {
    this.activePlaceholder = word.getValue()
    this.load(word)
    this.newSynonym = ''
  }

  async load(word: Word) {
    this.synonyms = await this.service.getSynonyms(word)
    this.wordId = word.id
    this.word = word
  }

  async add() {
    await this.service.addSynonym(this.word, this.newSynonym)
    await this.load(this.word)
  }

  async remove(synonym: Synonym) {
    await this.service.deleteSynonym(synonym)
    await this.load(this.word)
  }
}
