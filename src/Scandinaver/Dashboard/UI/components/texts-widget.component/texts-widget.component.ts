import { Component } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import TextService from '@/Scandinaver/Translate/Application/text.service'
import BaseWidgetComponent from '@/Scandinaver/Core/UI/BaseWidgetComponent'
import { Translate } from '@/Scandinaver/Translate/Domain/Translate'

@Component({
  components: {},
})
export default class TextsWidgetComponent extends BaseWidgetComponent<Translate> {
  @Inject()
  protected service: TextService
  protected title: string = this.$root.$tc('texts')
  protected watchLanguage: boolean = true;
}
