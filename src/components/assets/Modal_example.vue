<template lang="pug">
  .columns
    .column.is-6
      p.control.content
        textarea.textarea(v-model="item.text", placeholder="оригинал")
        .column.is-5
          p.control.content
            textarea.textarea(v-model="item.value" placeholder="оригинал")
        div.column.is-1
          a.button.is-danger.is-small(@click="$emit('remove', index)")
            span.icon
              i.fa.fa-trash-o
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'Modal_example',
})
export default class Modal_example extends Vue {
  @Prop({ required: true })
  private item!: any
  @Prop({ required: true })
  private index!: any
}
</script>
