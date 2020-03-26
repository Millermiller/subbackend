<template lang="pug">
  b-modal.w960(:active.sync="visible", @close="close", :width="960")
    .box
      .header {{card.id}} - {{card.word.word}}
      .translate-section
        .control
          input.input(type="text",
            placeholder="text",
            v-model="text",
            :value="card.word.word",
            style="width: 490px;")

        hr
        .variants
          h2.subtitleis-5 Варианты перевода:
          ul
            li(
              v-for="word in values",
              @click="setActive(word)",
              :class="['variant', {'is-success': word.active }]") {{word.value}}

      hr
      .example-section
        h2.subtitle.is-5 Примеры:
          button.colorbutton.red(@click="color('#e13c4c')") #e13c4c
          button.colorbutton.green(@click="color('#4c7737')") #4c7737
          button.colorbutton.blue(@click="color('#3f4bb8')") #3f4bb8
          span.button.is-success.pull-right(@click="addExample") добавить

        div
          example(
            v-for="(item, index) in examples",
            :item="item",
            :index="index",
            :key="item.id",
            v-on:remove="removeExample")

      hr
      .audio-section
        audio(ref="audio", :src="card.word.audio", preload="auto")
        a.button.is-small(@click="play")
          span.icon
            i.fa.fa-volume-up

        form(enctype="multipart/form-data", method="post", name="addAudio", ref="audioform")
          input(type="file", name="audiofile", @change="bindFile")
          a.button.is-success(@click="updateAudio") Загрузить аудио
          a.button.is-success(@click="updateTranslate") Сохранить
          a.button.is-warning(@click="close") Отмена
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { Prop, Watch } from 'vue-property-decorator'
import Example from '@/components/assets/Modal_example.vue'
import assetAPI from '@/api/assetAPI'

  @Component({
    name: 'Modal',
    components: {
      Example,
    },
  })
export default class Modal extends Vue {
    @Prop({ required: true })
    private visible!: any

    @Prop({ required: true })
    private card!: any

    @Prop({ required: true })
    private index!: any

    private fileUploadFormData: FormData = new FormData()
    private text: string = ''
    private values: any[] = []
    private examples: any[] = []

    bindFile(e: any) {
      e.preventDefault()
      this.fileUploadFormData.append('audiofile', e.target.files[0])
      this.fileUploadFormData.append('id', this.card.word.id)
    }

    close() {
      this.$emit('close')
    }

    updateAudio() {
      assetAPI.updateAudio(this.fileUploadFormData).then((response) => {
        if (response.data.success) {
          this.$store.commit('changeAssetAudio', { index: this.index, url: response.data.url })
          this.close()
        }
      }, (response) => {
        console.log(response)
      })
    }

    updateTranslate() {
      assetAPI.translate({
        card_id: this.card.id,
        id: this.card.translate.id,
        text: this.text,
        examples: this.examples,
      }).then((response) => {
        if (response.data.success) {
          this.$store.commit('changeAssetWord', { index: this.index, text: this.text })
        }
        this.close()
      }, (response) => {
        console.log(response)
      })
    }

    setActive(word: any) {
      assetAPI.changeUsedTranslate({
        card_id: this.card.id,
        word_id: this.card.word.id,
        translate_id: word.id,
      }).then((response) => {
        if (response.data.success) {
          this.text = word.value
          for (const value of this.values) {
            if (value !== 0) {
              value.active = false
            }
          }
          word.active = true
          this.$store.commit('changeAssetTranslate', { index: this.index, translate: word })
          this.close()
        }
      }, (response) => {
        console.log(response)
      })
    }

    play() {
      // @ts-ignore
      this.$refs.audio.play()
    }

    addExample() {
      this.examples.push({ text: '', value: '' })
    }

    removeExample(i: any) {
      this.examples.splice(i, 1)
    }

    @Watch('visible')
    private onChange(val: any) {
      if (val) {
        assetAPI.getValues(this.card).then((response) => {
          this.values = response.data.values
          for (const v in this.values) {
            if (this.values[v].id === this.card.translate_id) {
              this.values[v].active = true
            }
          }
        }, (response) => {
          console.log(response)
        })
        assetAPI.getExamples(this.card).then((response) => {
          this.examples = response.data.values
        }, (response) => {
          console.log(response)
        })
      }
    }

    mounted() {
      this.text = (this.card.translate) ? this.card.translate.value : ''
    }
}
</script>
