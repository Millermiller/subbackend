import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import { Asset } from '@/Scandinaver/Asset/Domain/Asset'
import AssetDTO from '@/Scandinaver/Asset/Domain/DTO/AssetDTO'
import { Inject } from 'vue-typedi'
import AssetService from '@/Scandinaver/Asset/Application/asset.service'
import Component from 'vue-class-component'
import { AssetType } from '@/Scandinaver/Asset/Domain/Enum/AssetType'
import { Card } from '@/Scandinaver/Asset/Domain/Card'
import CardService from '@/Scandinaver/Asset/Application/card.service'
import draggable from 'vuedraggable'
import Translate from './translate.component/index.vue'
import CardModalComponent from './card.modal.component/index.vue'
import * as events from '@/events/events.type'

@Component({
  components: { draggable, Translate, CardModalComponent },
})
export default class ListAssetsComponent extends CRUDComponent<Asset, AssetDTO> {
  @Inject()
  protected readonly service: AssetService

  @Inject()
  protected readonly cardService: CardService

  protected watchLanguage = true

  protected modalTitleCreate = this.$root.$tc('createAsset')
  protected modalTitleUpdate = this.$root.$tc('updateAsset')

  protected isDetailsLoading: boolean = false
  protected isDictionaryModalActive: boolean = false
  protected isCardModalActive: boolean = false
  protected loadingDictionaryModal: boolean = false

  protected searchText: string = ''
  protected translates: Card[] = []

  public editedCard: Card = new Card()
  private activeAsset: Asset | null = null

  created() {
    this.$eventHub.$on(events.HIDE_CARD_MODAL, this.closeCardModal)
    this.$eventHub.$on(events.ADD_CART_TO_ASSET, this.addCardToAsset)
    this.$eventHub.$on(events.RELOAD_ASSETS, this.load)
  }

  beforeDestroy(): void {
    this.$eventHub.$off(events.HIDE_CARD_MODAL)
    this.$eventHub.$off(events.ADD_CART_TO_ASSET)
    this.$eventHub.$off(events.RELOAD_ASSETS)
  }

  protected buildForm(): AssetDTO {
    return new AssetDTO()
  }

  public types = [
    {
      value: '',
      label: this.$root.$tc('all'),
    },
    {
      value: AssetType.WORDS,
      label: this.$root.$tc('asset.words'),
    },
    {
      value: AssetType.SENTENCES,
      label: this.$root.$tc('asset.sentences'),
    },
    {
      value: AssetType.PERSONAL,
      label: this.$root.$tc('asset.personal'),
    },
    {
      value: AssetType.FAVORITES,
      label: this.$root.$tc('asset.favourites'),
    }
  ]

  public async removeCard(asset: Asset, card: Card): Promise<void> {
    this.isDetailsLoading = true
    try {
      await this.cardService.removeFromAsset(card, asset)
    } finally {
      this.isDetailsLoading = false
    }
  }

  public async updateCardOrder(el: any, asset: Asset): Promise<void> {
    this.isDetailsLoading = true
    try {
      await this.service.setSort(asset)
      this.$buefy.snackbar.open(this.$tc('updated'))
    } finally {
      this.isDetailsLoading = false
    }
  }

  public showDictionaryModal(asset: Asset): void {
    this.isDictionaryModalActive = true
    this.activeAsset = asset
  }

  public closeDictionaryModal(): void {
    this.isDictionaryModalActive = false
    this.translates = []
    this.searchText = ''
  }

  public showCardModal(card: Card): void {
    this.editedCard = card
    this.isCardModalActive = true
  }
  private closeCardModal(): void {
    this.editedCard = new Card()
    this.isCardModalActive = false
  }

  public async search(): Promise<void> {
    this.loadingDictionaryModal = true
    this.translates = []
    try {
      this.translates = await this.service.translate(this.searchText, false)
    } catch (e) {
      //
    } finally {
      this.loadingDictionaryModal = false
    }
  }

  public async searchSentences(): Promise<void> {
    this.loadingDictionaryModal = true
    this.translates = []
    try {
      this.translates = await this.service.translate(this.searchText || '', true)
    } catch (e) {
      //
    } finally {
      this.loadingDictionaryModal = false
    }
  }

  private async addCardToAsset(card: Card) {
    try {
      await this.cardService.addCardToAsset(card, this.activeAsset)
    } catch (e) {
      //
    } finally {
      this.closeDictionaryModal()
      await this.load()
    }
  }
}
