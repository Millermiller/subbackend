import { Component } from 'vue-property-decorator'
import { Inject } from 'vue-typedi'
import CardService from '@/Scandinaver/Asset/Application/card.service'
import BaseWidgetComponent from '@/Scandinaver/Core/UI/BaseWidgetComponent'
import { Card } from '@/Scandinaver/Asset/Domain/Card'

@Component({
  components: {},
})
export default class CardsWidgetComponent extends BaseWidgetComponent<Card> {
  @Inject()
  protected service: CardService
  protected title: string = this.$root.$tc('cards')
  protected watchLanguage: boolean = true;
}
