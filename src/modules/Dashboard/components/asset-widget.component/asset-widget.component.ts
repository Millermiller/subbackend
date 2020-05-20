import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/store'

@Component({
  components: {},
})
export default class AssetWidgetComponent extends Vue {
  private loading: boolean = false

  get assets() {
    return store.getters.assetsCount
  }
}
