import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class ModalExampleComponent extends Vue {
  @Prop({ required: true })
  private item!: any
  @Prop({ required: true })
  private index!: any
}
