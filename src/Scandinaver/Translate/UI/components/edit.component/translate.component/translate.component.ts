import { Component, Vue } from 'vue-property-decorator'
import ItemComponent from './item.component/index.vue'
import { Inject } from 'vue-typedi'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import DictionaryItem from '@/Scandinaver/Translate/Domain/DictionaryItem'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import { from, Observable, ObservedValueOf, Subject } from 'rxjs'
import TextHelper from '@/Scandinaver/Translate/Application/text.helper'

@Component({
  components: { ItemComponent },
})
export default class TranslateComponent extends Vue {
  @Inject()
  private readonly service: TextService

  public loading: boolean = false
  public isSynonymModalVisible: boolean = false
  public isCoordinatesModalVisible: boolean = false
  public textEntity: Translate = new Translate()
  public selectedTranslate: DictionaryItem = new DictionaryItem()
  private observableTextV2: Observable<ObservedValueOf<string>> = new Subject<string>()
  public activeTab: number = 0
  public tabs: any[] = [1]
  public isTextSelected = false
  private translateSequence: {
    text: string
    selected: boolean
    progress: number
  }[] = [{ text: '', selected: false, progress: 0 }]

  async mounted() {
    window.onmouseup = () => {
      this.isTextSelected = window.getSelection().toString().length > 0
    }
    await this.load(Number(this.$route.params.id))
  }

  async load(id: number): Promise<void> {
    this.loading = true
    this.textEntity = await this.service.getText(id);
    this.observableTextV2 = from(this.textEntity.text)
    this.translateSequence = this.textEntity.translate
      .split('.')
      .filter(chunk => chunk !== '')
      .map(chunk => ({ text: chunk, selected: false, progress: 0 }))
    this.tabs = this.textEntity.text
      .split('.')
      .filter(chunk => chunk !== '')
      .map((item, index) => index + 1)
    this.loading = false
  }

  /** * SYNONYMS * */
  public showSynonymsModal(item: { index: number, word: any }): void {
    this.selectedTranslate = item.word
    this.isSynonymModalVisible = true
  }
  public addSynonym(): void {
    this.selectedTranslate.synonyms.push(new Synonym())
  }
  public removeSynonym(index: number): void {
    this.selectedTranslate.synonyms.splice(index, 1)
  }
  public saveSynonyms(): void {
    this.closeSynonymModal()
  }
  public closeSynonymModal(): void {
    this.isSynonymModalVisible = false
    this.selectedTranslate.synonyms = this.selectedTranslate.synonyms.filter((synonym: Synonym) => synonym.value !== '')
    this.selectedTranslate = new DictionaryItem()
  }

  /** * COORDINATES * */
  public showCoordinatesModal(item: { index: number, word: any }): void {
    this.selectedTranslate = item.word
    this.isCoordinatesModalVisible = true
  }
  public addCoordinates(): void {
    this.selectedTranslate.coordinates.push([])
  }
  public removeCoordinate(index: number): void {
    this.selectedTranslate.coordinates.splice(index, 1)
  }
  public closeCoordinatesModal(): void {
    this.isCoordinatesModalVisible = false
    this.selectedTranslate = new DictionaryItem()
  }

  public async save(): Promise<void> {
    try {
      await this.service.update(this.textEntity)
      await this.load(Number(this.$route.params.id))
      this.$buefy.snackbar.open(this.$tc('updated'))
    } catch (error) {
      console.error(error.message)
    }
  }

  get original(): string {
    let output = ''
    let counter = 0
    let chunk = ''
    let sentenceNum: number = 0
    let isSentenceStarted: boolean = false
    const { dictionary } = this.textEntity
    this.observableTextV2.subscribe((data: string) => {
      counter++
      chunk = data
      const position1 = dictionary.find((item: DictionaryItem) => item.coordinates.find((coord: number[]) => coord[0] === counter - 1) && item.sentenceNum === sentenceNum)
      if (position1) {
        if (this.selectedTranslate.text && position1.text === this.selectedTranslate.text) {
          chunk = `<span class="extra selected">${chunk}`
        } else {
          chunk = `<span class="extra">${chunk}`
        }
      }
      const position2 = dictionary.find((item: DictionaryItem) => item.coordinates.find((coord: number[]) => coord[1] === counter - 1) && item.sentenceNum === sentenceNum)
      if (position2) {
        chunk = `${chunk}</span>`
      }
      if (sentenceNum === this.activeTab && isSentenceStarted === false) {
        chunk = `<span class="sentence active-sentence">${chunk}`
        isSentenceStarted = true
      }
      if (isSentenceStarted === false) {
        chunk = `<span class="sentence">${chunk}`
        isSentenceStarted = true
      }
      if (data === '.') {
        chunk = `${chunk}</span>`
        isSentenceStarted = false
        sentenceNum++
        counter = 0
      }
      output += chunk
    })
    return output;
  }

  public get translate(): string {
    return this.translateSequence
      .map((sentence, index: number) => {
        const computed = sentence.text
        if (index === this.activeTab) {
          return `<span class="sentence active-sentence">${computed}</span>`
        }
        return `<span class="sentence">${computed}</span>`
      })
      .join('. ')
  }

  public addTranslate(): void {
    try {
      this.setCoordinates()
    } catch (error) {
      this.$buefy.snackbar.open(error.message)
    }
  }

  public removeTranslate(item: { index: number, word: any }): void {
    this.textEntity.dictionary.splice(item.index, 1)
  }

  private setCoordinates() {
    const selection: Selection = window.getSelection()
    const countSelection: number = selection.rangeCount
    let string: string = ''
    const coordinates = []
    let sentenceNumber: number = 0
    for (let i = 0; i < countSelection; i++) {
      const currentRange: Range = selection.getRangeAt(i)
      string = currentRange.toString().trim()
      const offset = TextHelper.getSentenceOffset(selection.anchorNode, 0)
      const totalOffset = TextHelper.getTotalOffset(selection.anchorNode.parentNode, 0)
      const startInSentence: number = Math.min(...[currentRange.startOffset, currentRange.endOffset]) + offset
      const endInSentence: number = (startInSentence + (string.length > 1 ? string.length - 1 : 0))
      const startInText: number = startInSentence + totalOffset
      const endInText: number = (startInText + (string.length > 1 ? string.length - 1 : 0))
      const newSentenceNumber = TextHelper.getSentenceNumber(this.textEntity.text, startInText, endInText)
      if (!Number.isNaN(newSentenceNumber)) {
        if (sentenceNumber !== 0 && newSentenceNumber !== sentenceNumber) {
          throw new Error('incorrect selection')
        }
        coordinates.push([startInSentence, endInSentence])
        sentenceNumber = newSentenceNumber
      } else {
        throw new Error('incorrect selection')
      }
    }
    const dictionaryItem = new DictionaryItem()
    dictionaryItem.text = string
    dictionaryItem.value = ''
    dictionaryItem.coordinates = coordinates
    dictionaryItem.sentenceNum = sentenceNumber
    this.textEntity.dictionary.push(dictionaryItem)
    this.textEntity.dictionary.sort((a, b) => a.coordinates[0][0] - b.coordinates[0][0])
    this.activeTab = sentenceNumber
  }
}
