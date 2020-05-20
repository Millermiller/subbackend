import { Component, Vue } from 'vue-property-decorator'
import textAPI from '@/api/textAPI'
import Tooltips from './tooltip.component/index.vue'
import Images from '@/modules/Translates/components/image.component/index.vue'
import Translate from '@/modules/Translates/components/translate.component/index.vue'
import Synonyms from '@/modules/Translates/components/synonyms.component/index.vue'
import Description from '@/modules/Translates/components/description.component/index.vue'
import Test from './test.component/index.vue'

@Component({
  components: { Tooltips, Translate, Synonyms, Images, Description, Test },
})
export default class EditComponent extends Vue {
  private text: any = {}
  private cleartext: string = ''
  private extras: {} = {}
  private dictionary: [] = []
  private sentences: [] = []

  load(id: number) {
    textAPI.getText(id).then(
      (response) => {
        if (response.data.success) {
          this.text = response.data.text
          this.cleartext = response.data.cleartext
          this.extras = response.data.extras
          this.dictionary = response.data.synonyms
          this.sentences = response.data.sentences
        } else {
          //
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  updateTooltips() {
    textAPI
      .saveExtra({
        text_id: this.text.id,
        data: this.extras,
      })
      .then(
        (response) => {
          if (response.data.success) {
            this.load(this.text.id)
          }
        },
        (response) => {
          console.log(response)
        },
      )
  }

  updateSentences() {
    textAPI
      .saveSentences({
        text_id: this.text.id,
        data: this.sentences,
      })
      .then(
        (response) => {
          if (response.data.success) {
            this.load(this.text.id)
          }
        },
        (response) => {
          console.log(response)
        },
      )
  }

  mounted() {
    this.load(parseInt(this.$route.params.id, 10))
  }
}
