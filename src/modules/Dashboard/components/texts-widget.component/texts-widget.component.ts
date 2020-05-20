import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/store'

@Component({
  components: {},
})
export default class TextsWidgetComponent extends Vue {
  private loading: boolean = false

  get texts() {
    return store.getters.textsCount
  }
}
