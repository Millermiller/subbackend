import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import ExampleDTO from '@/app/Asset/Domain/DTO/ExampleDTO'
import Example from '@/app/Asset/Domain/Example'

@Component({
  components: {},
})
export default class CardExampleComponent extends Vue {
  @Prop({ required: true })
  private item: ExampleDTO | Example

  @Prop({ required: true })
  private index: number

  public tempText: string = ''
  public tempValue: string = ''

  public colors: string[] = ['#e13c4c', '#4c7737', '#3f4bb8']

  get itemText(): string {
    return this.item.text
  }

  get itemValue(): string {
    return this.item.value
  }

  set itemText(value: string) {
    this.$eventHub.$emit('updateExampleText', { index: this.index, value })
  }

  set itemValue(value: string) {
    this.$eventHub.$emit('updateExampleValue', { index: this.index, value })
  }

  public colorText(color: string): void {
    // @ts-ignore
    const searchText: string = window.getSelection().toString()
    // eslint-disable-next-line no-multi-assign
    this.item.text = this.tempText = this.tempText.replace(searchText, `<span style="color: ${color};">${searchText}</span>`)
    this.itemText = this.item.text
  }

  public colorValue(color: string): void {
    // @ts-ignore
    const searchText: string = window.getSelection().toString()
    // eslint-disable-next-line no-multi-assign
    this.item.value = this.tempValue = this.tempValue.replace(searchText, `<span style="color: ${color};">${searchText}</span>`)
    this.itemValue = this.item.value
  }

  public handleTextInput(e: any): void {
    this.tempText = e.target.innerHTML
  }

  public handleValueInput(e: any): void {
    this.tempValue = e.target.innerHTML
  }

  public cleanText(): void {
    this.itemText = this.item.text.replace(/\n|<.*?>/g, '')
    this.item.text = this.itemText
  }

  public cleanValue(): void {
    this.itemValue = this.item.value.replace(/\n|<.*?>/g, '')
    this.item.value = this.itemValue
  }
}
