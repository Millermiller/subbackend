import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  components: {},
})
export default class WordsWidgetComponent extends Vue {
  public loading: boolean = false

  get words(): number {
    return store.getters.wordsCount
  }
}
