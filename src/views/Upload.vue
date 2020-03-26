<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          form(enctype="multipart/form-data", action="", method="post")
            input(type="file", name="file", @change="bindFile")
            a.button.is-success(@click="upload") Загрузить

      .tile.is-parent
        article.tile.is-child.box
          .block
            div.control.is-horizontal
              .control-label
                label.label Добавить

              div.controlis-grouped
                p.control.is-expanded
                  input.input(type="text", v-model="orig", placeholder="icelandic")
                p.control.is-expanded
                  input.input(type="email", v-model="translate", placeholder="перевод")
                button.button.is-success(@click="add") Добавить

            .field
              b-switch(
                v-model="issentence"
                true-value="1"
                false-value="0") {{ switchStat }}
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import fileAPI from '@/api/fileAPI'

  @Component({
    name: 'UploadView',
  })
export default class UploadView extends Vue {
    private fileUploadFormData: FormData = new FormData()
    private orig: string = ''
    private translate: string = ''
    private issentence: boolean = false

    bindFile(e: any) {
      e.preventDefault()
      this.fileUploadFormData.append('file', e.target.files[0])
    }

    upload() {
      fileAPI.uploadWordfile(this.fileUploadFormData).then((response) => {
        if (response.data.success) {
          console.log('ok')
        }
      }, (response) => {
        console.log(response)
      })
    }

    add() {
      fileAPI.addCard(this.orig, this.translate, this.issentence).then((response) => {
        if (response.data.success) {
          this.orig = ''
          this.translate = ''
        }
      }, (response) => {
        console.log(response)
      })
    }

    get switchStat() {
      return this.issentence ? 'Предложение' : 'Слово'
    }
}
</script>
