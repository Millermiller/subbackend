<template lang="pug">
  aside.menu.app-sidebar.animated.slideInLeft
    p.menu-label General

    ul.menu-list
      li(v-for="(item, index) in mainMenu", :key="index")
        router-link(
          :to="item.path",
          :exact="item.meta.exact || false",
          :aria-expanded="isExpanded(item) ? 'true' : 'false'",
          v-if="!isParent(item) && $can(item.meta.permission)",
          @click.native="toggle(item)")

          b-icon(:icon="item.meta.icon", size="is-small")

          span {{ item.meta.label}}

          b-icon(icon="chevron-down", size="is-small", v-if="isParent(item)")

        a(:aria-expanded="isExpanded(item)"
          @click="toggle(item)"
          v-if="isParent(item) && item.children.some(childrenItem => $can(childrenItem.meta.permission))")
          b-icon(:icon="item.meta.icon", size="is-small")
          span {{ item.meta.label || item.name }}

          b-icon(icon="chevron-down", size="is-small", v-if="item.children && item.children.length")

        expanding(v-if="isParent(item)")
          ul(v-show="isExpanded(item)")
            li(v-for="(subItem, index) in item.children" :key="index" v-if="$can(subItem.meta.permission)")
              router-link(:to="generatePath(item, subItem)", v-if="isMenuItem(subItem)")
                b-icon(:icon="subItem.meta.icon", size="is-small")
                span {{ subItem.meta && subItem.meta.label || subItem.name }}

    p.menu-label Sub
    ul.menu-list
      li(v-for="(item, index) in subMenu", :key="index")
        router-link(
          :to="item.path",
          :exact="false",
          :aria-expanded="isExpanded(item) ? 'true' : 'false'",
          v-if="!isParent(item) && $can(item.meta.permission)",
          @click.native="toggle(item)")

          b-icon(:icon="item.meta.icon", size="is-small")

          span {{ item.meta.label}}

          span.is-pulled-right(v-if="item.meta.language")
            b-tag(type="is-info") {{language}}

          b-icon(icon="chevron-down", size="is-small", v-if="isParent(item)")

        a(:aria-expanded="isExpanded(item)"
          @click="toggle(item)"
          v-if="isParent(item) && item.children.some(childrenItem => $can(childrenItem.meta.permission))")
          b-icon(:icon="item.meta.icon", size="is-small")
          span {{ item.meta.label || item.name }}

          b-icon(icon="chevron-down", size="is-small", v-if="item.children && item.children.length")

        expanding(v-if="isParent(item)")
          ul(v-show="isExpanded(item)")
            li(v-for="(subItem, index) in item.children" :key="index" v-if="$can(subItem.meta.permission)")
              router-link(:to="generatePath(item, subItem)", v-if="isMenuItem(subItem)")
                b-icon(:icon="subItem.meta.icon", size="is-small")
                span {{ subItem.meta && subItem.meta.label || subItem.name }}
</template>

<script lang="ts">
import Expanding from 'vue-bulma-expanding'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { Route, RouteConfig } from 'vue-router'
import { routes } from '@/router'
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Component({
  name: 'Sidebar',
  components: {
    Expanding,
  },
})
export default class Sidebar extends Vue {
  private mainMenu: Array<RouteConfig> = routes.filter(item => item.meta.menuitem && item.meta.type === 'main')
  private subMenu: Array<RouteConfig> = routes.filter(item => item.meta.menuitem && item.meta.type === 'sub')
  private isReady: boolean = false
  private menu = this.mainMenu.concat(this.subMenu)

  mounted() {
    const route = this.$route
    if (route.name) {
      this.isReady = true
      this.shouldExpandMatchItem(route)
    }
  }

  get language(): string {
    return store.getters.language
  }

  public isExpanded(item: any): boolean {
    return item.expanded
  }

  public isParent(item: RouteConfig): boolean {
    return item.children && item.children.some(item => item.meta.menuitem)
  }

  public isMenuItem(item: RouteConfig): boolean {
    return item.meta && item.meta.menuitem
  }

  public toggle(item: any): void {
    Vue.set(item, 'expanded', !item.expanded)
    item.meta.expanded = item.expanded
  }

  private shouldExpandMatchItem(route: Route): void {
    const { matched } = route
    const lastMatched = matched[matched.length - 1]
    let parent = lastMatched.parent || lastMatched
    const isParent = parent === lastMatched

    if (isParent) {
      const p = this.findParentFromMenu(route)
      if (p) {
        parent = p
      }
    }
    const item = this.menu.find(el => el.path === parent.path)
    if (item) {
      Vue.set(item, 'expanded', true)
    }
    this.menu.filter(el => el.path !== parent.path).forEach(el => Vue.set(el, 'expanded', false))
  }

  public generatePath(item: any, subItem: any): string {
    return `${item.component ? `${item.path}/` : ''}${subItem.path}`
  }

  private findParentFromMenu(route: Route): any {
    const { menu } = this
    for (let i = 0, l = menu.length; i < l; i++) {
      const item = menu[i]
      const k = item.children && item.children.length
      if (k) {
        for (let j = 0; j < k; j++) {
          if (item.children && item.children[j].name === route.name) {
            return item
          }
        }
      }
    }
    return true
  }

  @Watch('$route')
  private onRouteChange(route: Route) {
    this.isReady = true
    this.shouldExpandMatchItem(route)
  }
}
</script>

<style lang="scss">
.app-sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  padding: 20px 0 50px;
  width: 220px;
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #fff;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;

  .icon {
    vertical-align: baseline;
    margin-right: 5px;

    &.is-angle {
      position: absolute;
      right: 10px;
      transition: transform 0.377s ease;
    }
  }

  .menu-label {
    padding-left: 5px;
  }

  .menu-list {
    li a {
      &[aria-expanded='true'] {
        .is-angle {
          transform: rotate(180deg);
        }
      }
    }

    li a + ul {
      margin: 0 10px 0 15px;
    }
  }
}
</style>
