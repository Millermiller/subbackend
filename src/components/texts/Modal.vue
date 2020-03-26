<template lang="pug">
  b-modal(:active.sync="visible", @close="close")
    .box(style="width: 1100px")
      .columns
        .column
          p.control
            input.input(type="text" v-model="form.title" placeholder="Название")

      .columns
        .column.is-6
          p.control.content
            textarea.textarea(placeholder="оригинал", v-model="form.origtext", style="height: 500px;")

        .column.is-6
          p.control.content
            textarea.textarea(placeholder="перевод", v-model="form.translate", style="height: 500px;")

      .columns
        .column
          button.button.is-succes(@click="$emit('save', form)")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

  @Component({})
export default class extends Vue {
    @Prop({ required: true })
    private visible!: any

    private form: any = {
      title: '',
      origtext: '',
      translate: '',
    }

    close() {
      this.$emit('close')
    }
}
</script>

<style>
  .modal-card, .modal-content {
    width: 1100px;
  }
</style>
