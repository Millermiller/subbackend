<template lang="pug">
  div
    .columns
      column.is-8
        div(v-html="item.text")
        hr
        p(v-html="output")

      div.column.is-4
        div.box(style="margin: 5px;")
          button.button.is-small(style="margin: 10px 0;", @click="addExtra") Добавить
          extra(v-for="(extra, index) in extras",
            :item="extra",
            :index="index",
            @show="showExtra",
            @clear="clearExtra",
            @remove="removeExtra")

    .columns
      .column
        button.button.is-primary(@click="$emit('update')") Сохранить
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { Prop, Watch } from 'vue-property-decorator'
import Extra from '@/components/texts/Extra.vue'

  @Component({
    name: 'Tooltips',
    components: {
      Extra,
    },
  })
export default class Tooltips extends Vue {
    @Prop({ required: true })
    private item!: any

    @Prop({ required: true })
    private extras!: any

    @Prop({ required: true })
    private sentences!: any


    private showedExtra: string = ''
    private text: any = {
      computed: '',
    }

    addExtra() {
      this.extras.push({ text_id: this.item.id })
    }

    removeExtra(id: number) {
      this.extras.splice(id, 1)
    }

    showExtra(extra: any) {
      this.showedExtra = extra.extra
    }

    clearExtra() {
      this.showedExtra = ''
    }

    get output() {
      let computed = ''

      for (let k = 0; k < this.sentences.length; k++) {
        const sentence = this.sentences[k]
        for (let i = 0; i < sentence.length; i++) {
          computed = `${computed} ${sentence[i].word}`
          if (i == (sentence.length - 1)) {
            computed += '. '
          }
        }
      }

      this.text.computed = computed

      if (this.showedExtra != '') {
        this.text.computed = this.text.computed.replace(
          new RegExp(`(^|\\s|>)(${this.showedExtra})([^\\w]|$|<)`, 'gi'),
          '$1<span class="extra">$2</span>$3',
        )
      }
      return this.text.computed
    }

    @Watch('extras')
    private onChange(val: any) {
      if (val.length) {
        const self = this

        setTimeout(() => {
          const extras = document.querySelectorAll('.tooltip-extra')
          for (let i = 0; i < extras.length; i++) {
            extras[i].addEventListener('mouseover', (el: any) => {
              self.showedExtra = el.target.getAttribute('data-original-title')
            }, false)

            extras[i].addEventListener('mouseout', (el) => {
              self.showedExtra = ''
            }, false)
          }
        }, 3000)
      }
    }
}
</script>
