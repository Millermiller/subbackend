import { Component, Vue } from 'vue-property-decorator'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  components: {},
})
export default class UsersWidgetComponent extends Vue {
  private loading: boolean = false

  get users() {
    return store.getters.usersCount
  }
}
