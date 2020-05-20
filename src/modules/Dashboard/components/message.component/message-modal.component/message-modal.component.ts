import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import Message from '@/modules/Dashboard/models/Message'
import messageAPI from '@/api/messageAPI'

@Component({
  components: {},
})
export default class MessageModalComponent extends Vue {
  @Prop({ required: true })
  private item!: Message
  @Prop({ required: true })
  private visible!: any

  close() {
    this.$emit('close')
  }
  @Watch('visible')
  private onChange(val: any) {
    if (val) {
      messageAPI.read(this.item.id).then(
        (response) => {
          if (response.data.success) {
            this.item.readed = true
          } else {
            this.$buefy.snackbar.open(this.$tc('error'))
          }
        },
        (response) => {
          console.log(response)
        },
      )
    }
  }
}
