<template lang="pug">
  div
    .columns
      .column.is-12.content.
        {{cleartext}}

    .columns
      .column.is-12
        b-tabs
          template(v-for="(sentence, index) in sentences")
            b-tab-item(:label="index.toString()", :selected="index === 0")
              .columns.is-multiline(style="padding-top: 10px;")
                item(
                  v-for="(word, index) in sentence",
                    :word="word",
                    :index="index",
                    @remove="removeWord",
                    @add="addWord")

    .columns
      .column
        button.button.is-primary(@click="$emit('update')") Сохранить
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import { Prop } from 'vue-property-decorator'
import Item from '@/components/texts/textedit/translate/item.vue'

@Component({
  name: 'Index',
  components: {
    Item,
  },
})
export default class Index extends Vue {
  @Prop({ required: true })
  private text!: any
  @Prop({ required: true })
  private cleartext!: any
  @Prop({ required: true })
  private sentences!: any

  removeWord(data: any) {
    this.sentences[data.word.sentence_num].splice(data.index, 1)
  }
  addWord(data: any) {
    this.sentences[data.word.sentence_num].splice(data.index + 1, 0,
      {
        orig: '',
        sentence_num: data.word.sentence_num,
        text_id: data.word.text_id,
        word: '',
      })
  }
}
</script>
