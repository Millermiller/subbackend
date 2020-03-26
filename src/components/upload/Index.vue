<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          form(enctype="multipart/form-data", method="post")
            input(type="file" name="file" @change="bindFile")
            a.button.is-success(@click="upload") Загрузить

      .tile.is-parent
        article.tile.is-child.box
          .block
            .control.is-horizontal
              .control-label
                label.label Добавить

              .control.is-grouped
                p.control.is-expanded
                  input.input(type="text", v-model="orig", placeholder="icelandic")

                p.control.is-expanded
                  input.input(type="email" v-model="translate" placeholder="перевод")

                button.button.is-success(@click="add") Добавить

            div(class="field")
              b-switch(v-model="issentence", true-value="1", false-value="0").
                {{ switchStat }}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import fileAPI from '@/api/fileAPI'
import assetAPI from '@/api/assetAPI'

@Component({})
export default class Index extends Vue {
    fileUploadFormData: FormData = new FormData()
    orig: string = ''
    translate: string = ''
    issentence: boolean = false


    bindFile(e: any) {
      e.preventDefault()
      this.fileUploadFormData.append('file', e.target.files[0])
    }

    upload() {
      fileAPI.uploadWordfile(this.fileUploadFormData).then((response) => {
        if (response.data.success) {

        }
      }, (response) => {
        console.log(response)
      })
    }

    add() {
      assetAPI.addAdminCard({ word: this.orig, translate: this.translate, issentence: this.issentence }).then((response) => {
        if (response.data.success) {
          this.orig = this.translate = ''
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
