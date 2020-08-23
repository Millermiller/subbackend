import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  components: {},
})
export default class WordsWidgetComponent extends Vue {
  private loading: boolean = false

  get words() {
    return store.getters.wordsCount
  }
}
