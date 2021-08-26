import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  components: {},
})
export default class UsersWidgetComponent extends Vue {
  public loading: boolean = false

  get users(): number {
    return store.getters.usersCount
  }
}
