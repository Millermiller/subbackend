import Component from 'vue-class-component'
import Vue from 'vue'
import { Inject } from 'vue-typedi'
import IntroService from '@/Scandinaver/Intro/Application/IntroService'
import Intro from '@/Scandinaver/Intro/Domain/Intro'
import { Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { permissions } from '@/permissions/permission.type'

@Component({})
export default class IntroModule extends Vue {
  private loading: boolean = false
  private access: boolean = false
  private permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

  created() {
    this.access = this.$ability.can(this.$route.meta.permission)
  }

  @Watch('$route')
  private onRouteChange(route: Route) {
    this.access = this.$ability.can(route.meta.permission)
  }
}
