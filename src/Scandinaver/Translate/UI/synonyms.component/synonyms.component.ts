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
  public sentences!: any

  @Inject()
  private readonly service: TextService

  public synonyms: Synonym[] = []
  public wordId: number = 0
  public newSynonym: string = ''
  public activePlaceholder: string = ''
  public word: Word

  public async setActive(word: Word): Promise<void> {
    this.activePlaceholder = word.getValue()
    await this.load(word)
    this.newSynonym = ''
  }

  private async load(word: Word): Promise<void> {
    this.synonyms = await this.service.getSynonyms(word)
    this.wordId = word.id
    this.word = word
  }

  private async add(): Promise<void> {
    await this.service.addSynonym(this.word, this.newSynonym)
    await this.load(this.word)
  }

  private async remove(synonym: Synonym): Promise<void> {
    await this.service.deleteSynonym(synonym)
    await this.load(this.word)
  }
}
