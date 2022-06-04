import { Component, Vue } from 'vue-property-decorator'
import Images from '@/Scandinaver/Translate/UI/components/edit.component/image.component/index.vue'
import Description from '@/Scandinaver/Translate/UI/components/edit.component/description.component/index.vue'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import { Inject } from 'vue-typedi'
import Test from './test.component/index.vue'
import Tooltips from './tooltip.component/index.vue'
import TranslateComponent from '@/Scandinaver/Translate/UI/components/edit.component/translate.component/index.vue'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'
import Tooltip from '../../../Domain/Tooltip'

@Component({
  components: { Tooltips, TranslateComponent, Images, Description, Test },
})
export default class EditComponent extends Vue {
  @Inject()
  private readonly service: TextService

  public text: any = {}
  public cleartext: string = ''
  public tooltips: Tooltip[] = []
  public dictionary: any[] = []
  public sentences: any[] = []
  private textEntity: Translate = new Translate()
  public loading: boolean = false

  async load(id: number): Promise<void> {
    this.loading = true
    const translate = await this.service.getText(id);
    this.textEntity = translate
    this.text = translate
    this.cleartext = translate.text
    this.tooltips = translate.tooltips
    this.dictionary = translate.dictionary
    this.sentences = translate.sentences
    this.loading = false
  }

  public async updateTooltips(): Promise<void> {
    await this.service.saveTooltips(this.textEntity, this.tooltips);
    await this.load(this.textEntity.getId())
  }

  public async updateSentences(): Promise<void> {
    await this.service.updateSentences(this.text, this.sentences);
    await this.load(this.textEntity.getId())
  }

  async mounted(): Promise<void> {
    await this.load(parseInt(this.$route.params.id, 10))
  }
}
