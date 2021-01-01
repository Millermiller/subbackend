import Component from 'vue-class-component'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component({
  components: {},
})
export default class BlogModule extends Vue {
  private access: boolean = false

  created() {
    this.access = this.$ability.can(this.$route.meta.permission)
  }

  @Watch('$route')
  private onRouteChange(route: Route) {
    this.access = this.$ability.can(route.meta.permission)
  }

  edit(row: any) {
    this.$router.push({ name: 'Статья', params: { id: row.id } })
  }
}
