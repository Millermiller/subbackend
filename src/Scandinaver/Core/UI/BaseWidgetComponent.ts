import Vue from 'vue'
import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { Watch } from 'vue-property-decorator'
import Language from '@/Scandinaver/Languages/Domain/Language'
import Component from 'vue-class-component'

@Component
export default class BaseWidgetComponent<T extends Entity> extends Vue {
  protected service: BaseService<T>
  public data: number = 0
  public loading: boolean = false
  protected watchLanguage: boolean = false
  protected title: string

  get language(): string {
    return store.getters.language.letter
  }

  async created(): Promise<void> {
    if (this.watchLanguage === true) {
      if (this.language !== undefined) {
        await this.load()
      }
    } else {
      await this.load()
    }
  }

  async load() {
    this.loading = true
    const filtersData = new FiltersData()
    filtersData.pageSize = 1
    const data = await this.service.get(filtersData)
    this.data = data.meta.pagination.total
    this.loading = false
  }

  @Watch('language')
  private async onLanguageChange(language: Language, oldLanguage: Language): Promise<void> {
    if (this.watchLanguage === true) {
      await this.load()
    }
  }

  protected redirect(routeName: string) {
    this.$router.push({ name: routeName })
  }
}
