<template lang="pug">
  div
    div.tile.is-ancestor
      div.tile.is-parent
        article.tile.is-child.box
          b-table(:data="messages",
              paginated,
              narrowed="",
              :loading="loading",
              :default-sort-direction="defaultSortDirection",
              default-sort="id",
              per-page="10")

            template(slot-scope="props")
              b-table-column(field="id" label="ID" width="40" sortable numeric) {{ props.row.id }}

              b-table-column(field="name" label="name" width="90") {{ props.row.name }}

              b-table-column(field="message" label="message" sortable) {{ props.row.message }}

              b-table-column(field="readed" label="readed" sortable) {{ props.row.readed }}


              b-table-column(field="created_at" label="created_at" sortable centered)
                span.tag.light {{ new Date(props.row.created_at).toLocaleDateString()}} | {{new Date(props.row.created_at).toLocaleTimeString()}}

              b-table-column(custom-key="actions")
                button.button.is-success(@click="see(props.row)")
                  b-icon(icon="eye-outline" size="is-small")

                button.button.is-danger(@click="remove(props.row)")
                  b-icon(icon="close-circle" size="is-small")

</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import messageAPI from '@/api/messageAPI'
import Message from '@/modules/Dashboard/models/Message'

@Component({
  name: 'MessagesPage',
  components: {}
})
export default class MessagesPage extends Vue {
  messages: Message[]
  loading: boolean
  defaultSortDirection: string = 'desc'

  mounted() {
    this.load()
  }

  load() {
    this.loading = true
    messageAPI.all().then(
      response => {
        this.messages = response.data
        this.loading = false
      },
      response => {
        console.log(response)
      }
    )
  }

  remove(row: any) {
    messageAPI.destroy(row.id).then(
      response => {
        if (response.status === 204) {
          this.$snackbar.open('Сообщение удалено!')
          this.load()
        } else {
          this.$snackbar.open(this.$tc('error'))
        }
      },
      response => {
        this.$snackbar.open(this.$tc('error'))
        console.log(response)
      }
    )
  }
}
</script>
