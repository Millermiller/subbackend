import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  components: {},
})
export default class AudioWidgetComponent extends Vue {
  public loading: boolean = false

  get audiofiles(): number {
    return store.getters.audioCount
  }
}
