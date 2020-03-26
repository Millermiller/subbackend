<template lang="pug">
  section.hero.is-bold.app-navbar.animated(:class="{ slideInDown: show, slideOutDown: !show }")
    .hero-head
      nav.nav
        .nav-left
          a.nav-item.is-hidden-tablet(@click="toggleSidebar(!sidebar.opened)")
            i.fa.fa-bars(aria-hidden="true")

        .nav-center
          a.nav-item.hero-brand
            img(src="../assets/logo.png")

        .nav-right.is-flex
          a.nav-item(@click="logout") Logout
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {

  components: {},

  props: {
    show: Boolean,
  },

  computed: mapGetters({
    sidebar: 'sidebar',
  }),

  methods: {
    ...mapActions([
      'toggleSidebar',
    ]),
    logout() {
      this.$http.get('/admin/logout').then((response) => {
        if (response.body.success) {
          window.location.href = response.body.url
        }
      }, (response) => {
        console.log(response)
      })
    },
  },
}
</script>

<style lang="scss">

  .app-navbar {
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

    .container {
      margin: auto 10px;
    }

    .nav-right {
      align-items: stretch;
      align-items: stretch;
      flex: 1;
      justify-content: flex-end;
      overflow: hidden;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  .hero-brand {
    .vue {
      margin-left: 10px;
      color: #36AC70;
    }

    .admin {
      color: #28374B;
    }
  }
</style>
