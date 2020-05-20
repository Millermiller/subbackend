import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/store'

@Component({
  components: {},
})
export default class AudioWidgetComponent extends Vue {
  private loading: boolean = false

  get audiofiles() {
    return store.getters.audioCount
  }
}
