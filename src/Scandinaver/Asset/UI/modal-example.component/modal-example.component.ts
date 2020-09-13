import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ModalExampleComponent extends Vue {
  @Prop({ required: true })
  private item: { text: string; value: string }

  @Prop({ required: true })
  private index: number

  private data: { text: string; value: string } = { text: '', value: '' }

  private colors: string[] = ['#e13c4c', '#4c7737', '#3f4bb8']

  created() {
    this.data.text = this.item.text
    this.data.value = this.item.value
  }

  get itemText() {
    return this.item.text
  }

  get itemValue() {
    return this.item.value
  }

  set itemText(value: string) {
    this.$eventHub.$emit('updateExampleText', { index: this.index, value })
  }

  set itemValue(value: string) {
    this.$eventHub.$emit('updateExampleValue', { index: this.index, value })
  }

  colorText(color: string) {
    // @ts-ignore
    const searchText: string = window.getSelection().toString()
    this.itemText = this.itemText.replace(searchText, `<span style="color: ${color};">${searchText}</span>`)
    this.data.text = this.itemText
  }

  colorValue(color: string) {
    // @ts-ignore
    const searchText: string = window.getSelection().toString()
    this.itemValue = this.itemValue.replace(searchText, `<span style="color: ${color};">${searchText}</span>`)
    this.data.value = this.itemValue
  }

  handleTextInput(e: any) {
    this.itemText = e.target.innerHTML
  }

  handleValueInput(e: any) {
    this.itemValue = e.target.innerHTML
  }

  clean() {
    this.itemText = this.data.text.replace(/\n|<.*?>/g, '')
    this.data.text = this.itemText
  }
}
