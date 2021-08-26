import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  components: {},
})
export default class AssetWidgetComponent extends Vue {
  public loading: boolean = false

  get assets(): number {
    return store.getters.assetsCount
  }
}
