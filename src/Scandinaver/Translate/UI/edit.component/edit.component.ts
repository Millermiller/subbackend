import { Component, Vue } from 'vue-property-decorator'
import Images from '@/Scandinaver/Translate/UI/image.component/index.vue'
import Translate from '@/Scandinaver/Translate/UI/translate.component/index.vue'
import Synonyms from '@/Scandinaver/Translate/UI/synonyms.component/index.vue'
import Description from '@/Scandinaver/Translate/UI/description.component/index.vue'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Inject } from 'vue-typedi'
import Synonym from '@/Scandinaver/Translate/Domain/Synonym'
import Test from './test.component/index.vue'
import Tooltips from './tooltip.component/index.vue'

@Component({
  components: { Tooltips, Translate, Synonyms, Images, Description, Test },
})
export default class EditComponent extends Vue {
  @Inject()
  private service: TextService

  private text: any = {}
  private cleartext: string = ''
  private extras: {} = {}
  private dictionary: Synonym[] = []
  private sentences: any[] = []

  async load(id: number) {
    const translate = await this.service.getText(id);

    this.text = translate
    this.cleartext = translate.text
    this.extras = translate.extra
    this.dictionary = translate.synonyms
    this.sentences = translate.sentences
  }

  async updateTooltips() {
    await this.service.saveExtra(this.text, this.extras);
    await this.load(this.text.id)
  }

  async updateSentences() {
    await this.service.updateSentences(this.text, this.sentences);
    await this.load(this.text.id)
  }

  mounted() {
    this.load(parseInt(this.$route.params.id, 10))
  }
}
