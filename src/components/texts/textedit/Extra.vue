<template lang="pug">
  .columns(v-on:mouseover="$emit('show', item)" v-on:mouseout="$emit('clear')")
    .column.is-5
      p.control
        input.input(type="text" placeholder="orig" v-model="item.orig")

    .column.is-5
      p.control
        input.input(type="text" placeholder="extra" v-model="item.extra")

    .column.is-2
      a.button.is-danger(@click="$emit('remove', index)")
        span.icon
          i.fa.fa-trash-o
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'Extra',
})
export default class Extra extends Vue {
  @Prop({ required: true })
  private item!: any
  @Prop({ required: true })
  private index!: any
}
</script>
