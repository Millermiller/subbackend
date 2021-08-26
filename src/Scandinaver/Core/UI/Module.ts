import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import Component from 'vue-class-component'

@Component
export class Module extends Vue {
  public access: boolean = false

  created(): void {
    this.access = this.$ability.can(this.$route.meta.permission)
  }

  @Watch('$route')
  private onRouteChange(route: Route): void {
    this.access = this.$ability.can(route.meta.permission)
  }
}
