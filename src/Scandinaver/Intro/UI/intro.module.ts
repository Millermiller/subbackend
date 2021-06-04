import Component from 'vue-class-component'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { permissions } from '@/permissions/permission.type'

@Component({})
export default class IntroModule extends Vue {
  private loading: boolean = false
  public access: boolean = false
  private permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  created(): void {
    this.access = this.$ability.can(this.$route.meta.permission)
  }

  @Watch('$route')
  private onRouteChange(route: Route): void {
    this.access = this.$ability.can(route.meta.permission)
  }
}
