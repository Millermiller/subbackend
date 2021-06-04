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

            b-table-column(field="id" label="ID" width="40" sortable numeric v-slot="props") {{ props.row.id }}

            b-table-column(field="name" label="name" width="90" v-slot="props") {{ props.row.name }}

            b-table-column(field="message" label="message" sortable v-slot="props") {{ props.row.message }}

            b-table-column(field="created_at" label="created_at" sortable centered v-slot="props")
              span.tag.light {{ props.row.createdAt}}

            b-table-column(custom-key="actions" v-slot="props")
              button.button.is-success.is-small(@click="see(props.row)")
                b-icon(icon="eye-outline" size="is-small")

              button.button.is-danger.is-small(@click="remove(props.row)")
                b-icon(icon="close-circle" size="is-small")

</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Message from '@/Scandinaver/Dashboard/Domain/Message'
import MessageService from '@/Scandinaver/Dashboard/Application/message.service'
import { Inject } from 'vue-typedi'

@Component({
  name: 'MessagesPage',
  components: {},
})
export default class MessagesPage extends Vue {
  @Inject()
  private readonly service: MessageService

  public messages: Message[] = []
  public loading: boolean = false
  public defaultSortDirection: string = 'desc'

  mounted(): void {
    this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.messages = await this.service.getAll()
    this.loading = false
  }

  public async remove(row: any): Promise<void> {
    await this.service.destroy(row)
    this.$buefy.snackbar.open(this.$tc('messageRemoved'))
    await this.load()
  }

  see(feedback: Message) {

  }
}
</script>
