<template lang="pug">
  div
    .tile.is-ancestor
      words
      assets
      audio
      texts

    .tile.is-ancestor
      .tile.is-parent.is-8
        .article.tile.is-child.box
          #nprogress(v-if="loading")
            .spinner-icon
          h4.title Log
          .content
            ul
              log(v-for="item in log" :item="item" v-on:deleteLog="deleteLog(item)")

      .tile.is-parent.is-4
        .article.tile.is-child.box
          #nprogress(v-if="loading")
            .spinner-icon
          h4.title Messages
          .content
            ul
              message(
                v-for="item in messages",
                :item="item",
                v-on:deleteMessage="deleteMessage(item)")
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Message from '@/components/dashboard/Message.vue'
import Log from '@/components/dashboard/Log.vue'
import Words from '@/components/dashboard/widgets/Words.vue'
import Assets from '@/components/dashboard/widgets/Assets.vue'
import Audio from '@/components/dashboard/widgets/Audio.vue'
import Texts from '@/components/dashboard/widgets/Texts.vue'
import messageAPI from '@/api/messageAPI'
import logAPI from '@/api/logAPI'

  @Component({
    name: 'DashboardView',
    components: {
      Message,
      Log,
      Words,
      Assets,
      Audio,
      Texts,
    },
  })
export default class DashboardView extends Vue {
    private words: string = ''
    private assets: string = ''
    private audiofiles: string = ''
    private texts: string = ''
    private log: {} = {}
    private messages: {} = {}
    private loading: boolean = false

    deleteLog(log: any) {
      logAPI.delete(log.id).then((response) => {
        if (response.data.success) {
          this.log = response.data.log
          this.$snackbar.open('Удалено!')
        } else {
          this.$snackbar.open('Ошибка!')
        }
      }, (response) => {
        console.log(response)
      })
    }

    deleteMessage(message: any) {
      messageAPI.delete(message.id).then((response) => {
        if (response.data.success) {
          this.messages = response.data.messages
          this.$snackbar.open('Удалено!')
        } else {
          this.$snackbar.open('Ошибка!')
        }
      }, (response) => {
        console.log(response)
      })
    }
}
</script>
