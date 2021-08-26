import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ModalExampleComponent extends Vue {
  @Prop({ required: true })
  private item: { text: string; value: string }

  @Prop({ required: true })
  private index: number

  public data: { text: string; value: string } = { text: '', value: '' }

  public colors: string[] = ['#e13c4c', '#4c7737', '#3f4bb8']

  created(): void {
    this.data.text = this.item.text
    this.data.value = this.item.value
  }

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
    this.itemText = this.itemText.replace(searchText, `<span style="color: ${color};">${searchText}</span>`)
    this.data.text = this.itemText
  }

  public colorValue(color: string): void {
    // @ts-ignore
    const searchText: string = window.getSelection().toString()
    this.itemValue = this.itemValue.replace(searchText, `<span style="color: ${color};">${searchText}</span>`)
    this.data.value = this.itemValue
  }

  public handleTextInput(e: any): void {
    this.itemText = e.target.innerHTML
  }

  public handleValueInput(e: any): void {
    this.itemValue = e.target.innerHTML
  }

  public clean(): void {
    this.itemText = this.data.text.replace(/\n|<.*?>/g, '')
    this.data.text = this.itemText
  }
}
