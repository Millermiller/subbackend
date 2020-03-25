<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h4.title.text-center Intro.js
          b-field
            p.control
              button.button.is-success(@click="add") Добавить
          b-table(
            :data="intros",
            paginated,
            narrowed="",
            :loading="loading",
            per-page="10")


            template(slot-scope="props")
              b-table-column(field="id", label="ID", width="40", sortable, numeric).
                {{ props.row.id }}

              b-table-column(field="page", label="page", sortable).
                {{ props.row.page }}

              b-table-column(field="element", label="element", sortable).
                {{ props.row.element }}

              b-table-column(field="intro", label="intro").
                {{ props.row.intro }}

              b-table-column(field="position", label="position").
                {{ props.row.position }}

              b-table-column(field="sort", label="sort").
                {{ props.row.sort }}

              b-table-column(custom-key="actions")
                button.button.is-warning(@click="edit(props.row)")
                  b-icon(icon="account-edit", size="is-small")
                button.button.is-danger @click="remove(props.row)")
                  b-icon(icon="account-remove" size="is-small")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import introAPI from '@/api/introAPI'

  @Component({
    name: 'AssetsView',
  })
export default class AssetsView extends Vue {
    private intros: [] = []

    load() {
      introAPI.all().then((response) => {
        this.intros = response.data
      }, (response) => {
        console.log(response)
      })
    }

    edit(row: any) {
      this.$router.push({ name: 'Intro', params: { id: row.id } })
    }

    remove(row: any) {
      if (confirm('удалить?')) {
        introAPI.destroy(row.id).then((response) => {
          this.load()
        }, (response) => {
          console.log(response)
        })
      }
    }

    mounted() {
      this.load()
    }
}
</script>
