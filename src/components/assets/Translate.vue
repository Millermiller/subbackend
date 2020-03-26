<template lang="pug">
  .columns
    .column
      span.asset_title {{item.word.word}}
        .column
          span.asset_title {{item.value}}
        .column
          a.button.is-success.is-small(@click="add")
            span.icon
              i.fa.fa-plus(style="color: #fff")
          a.button.is-danger.is-small(@click="$emit('remove', {item: item, index: index})")
            span.icon
              i.fa.fa-trash-o
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import assetAPI from '@/api/assetAPI'

  @Component({
    name: 'Translate',
  })
export default class Translate extends Vue {
  @Prop({ required: true })
  private item!: any
  @Prop({ required: true })
  private index!: any

  add() {
    const data = {
      word_id: this.item.word.id,
      translate_id: this.item.id,
      asset_id: this.$store.getters.activeAssetId,
      index: this.index,
    }
    assetAPI.addCard(data).then(
      (response) => {
        if (response.data.success) {
          this.$store.commit('addCard', response.data.card)
          this.$emit('increment', this.index)
        }
      },
      (response) => {

      },
    )
  }
}
</script>
