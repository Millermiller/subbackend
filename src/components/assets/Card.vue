<template lang="pug">
  .columns
    .column
      span.asset_title {{card.word.word}}
        .column
          p.is-pulled-left.has-text-dark(v-if="card.translate") {{card.translate.value}}
          span.is-pulled-right.has-text-light(v-if="card.word.variants > 1") ({{card.word.variants}})

        .column
          audio(ref="audio", :src="card.word.audio", preload="auto")
          a(:class="['button', 'is-small', {'danger': !card.word.audio}]", @click="play")
            span.icon
              i.fa.fa-volume-up

            a.button.is-small(@click="showSettingsModal")
              span.icon
                i.fafa-pencil

            a.button.is-danger.is-small(@click="$emit('remove', {card:card, index:index})")
              span.icon
                i.fafa-trash-o

        modal(:visible="settingsModal", :card="card", :index="index", @close="closeSettingsModal")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { Prop } from 'vue-property-decorator'
import Modal from '@/components/assets/Modal.vue'

    @Component({
      name: 'Card',
      components: {
        Modal,
      },
    })
export default class Card extends Vue {
      @Prop({ required: true })
      private card!: any

      @Prop({ required: true })
      private index!: any

      private settingsModal: boolean = false

      showSettingsModal() {
        this.settingsModal = true
      }
      closeSettingsModal() {
        this.settingsModal = false
      }
      play() {
        // @ts-ignore
        this.$refs.audio.play()
      }
}
</script>
