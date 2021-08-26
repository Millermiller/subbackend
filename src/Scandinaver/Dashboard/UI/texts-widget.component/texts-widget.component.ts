import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  components: {},
})
export default class TextsWidgetComponent extends Vue {
  public loading: boolean = false

  get texts(): number {
    return store.getters.textsCount
  }
}
