<template lang="pug">
  .column.is-6
     .block
        .control.is-horizontal
           .control.is-grouped
              p.control.is-expanded.has-addons
                 span {{index + 1}})&nbsp;
                 input.input(type="text" v-model="word.word" placeholder="Оригинал")
                 input.input(type="text" v-model="word.orig" placeholder="Перевод")
                 a.button(@click="$emit('add', {index:index, word:word})")
                   span.icon
                      i.fa.fa-plus
                 a.button.is-danger(@click="$emit('remove', {index:index, word:word})")
                   span.icon
                     i.fa.fa-trash-o
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'Item',
})
export default class Item extends Vue {
  @Prop({ required: true })
  private word!: any
  @Prop({ required: true })
  private index!: any

  private translate: string = ''
}
</script>
