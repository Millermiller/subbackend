<template lang="pug">
  aside.menu.app-sidebar.animated(:class="{ slideInLeft: show, slideOutLeft: !show }")
    p.menu-label General

    ul.menu-list
      li(v-for="(item, index) in menu", :key="index")
        router-link(
          :to="item.path",
          :exact="true",
          :aria-expanded="isExpanded(item) ? 'true' : 'false'",
          :class="{'is-active':  item.name ==='Тексты' && $route.name === 'textedit'}",
          v-if="!isParent(item)",
          @click.native="toggle(item)")

          b-icon(icon="account", size="is-small")

          span {{ item.meta.label || item.name }}

          b-icon(icon="chevron-down", size="is-small", v-if="item.children && item.children.length")

        a(:aria-expanded="isExpanded(item)", v-else @click="toggle(item)")
          b-icon(icon="account", size="is-small")
          span {{ item.meta.label || item.name }}

          b-icon(icon="chevron-down", size="is-small", v-if="item.children && item.children.length")

        expanding(v-if="item.children && item.children.length")
          ul(v-show="isExpanded(item)")
            li(v-for="(subItem, index) in item.children" :key="index")
              router-link(:to="generatePath(item, subItem)", v-if="isMenuItem(subItem)").
                {{ subItem.meta && subItem.meta.label || subItem.name }}
</template>

<script lang="ts">
import Expanding from 'vue-bulma-expanding'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { Route, RouteConfig } from 'vue-router'
import { routes } from '@/router'

@Component({
  name: 'Sidebar',
  components: {
    Expanding,
  },
})
export default class Sidebar extends Vue {
  @Prop({ required: true })
  private show!: any
  private menu: Array<RouteConfig> = routes.filter((item) => item.meta.menuitem)
  private isReady: boolean = false

  mounted() {
    const route = this.$route
    if (route.name) {
      this.isReady = true
      this.shouldExpandMatchItem(route)
    }
  }

  isExpanded(item: any): boolean {
    return item.expanded
  }

  isParent(item: RouteConfig) {
    return item.children && item.children.length > 0
  }

  isMenuItem(item: RouteConfig): boolean {
    return item.meta && item.meta.menuitem
  }

  toggle(item: any): void {
    Vue.set(item, 'expanded', !item.expanded)
    item.meta.expanded = item.expanded
  }

  shouldExpandMatchItem(route: Route): void {
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

    if (parent.meta && 'expanded' in parent.meta && !isParent) {
      Vue.set(parent, 'expanded', true)
    }
  }

  generatePath(item: any, subItem: any): string {
    return `${item.component ? `${item.path}/` : ''}${subItem.path}`
  }

  findParentFromMenu(route: Route): any {
    const menu = this.menu
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
  width: 180px;
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
