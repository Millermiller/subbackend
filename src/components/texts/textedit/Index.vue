<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-12
        .tile.is-child.box
          .block.is-flex
            b-tabs
              b-tab-item(label="Tooltips", selected)
                tooltips(:item="text", :extras="extras", :sentences="sentences", @update="updateTooltips")

              b-tab-item(label="Перевод")
                translate(:text="text", :cleartext="cleartext", :sentences="sentences", @update="updateSentences")

              b-tab-item(label="Синонимы")
                synonyms(:sentences="sentences")

              b-tab-item(label="Изображение")
                images(:item="text")

              b-tab-item(label="Описание")
                description(:item="text")

              b-tab-item(label="Тест")
                test(
                  :textdata="text",
                  :dictionary="dictionary",
                  :extras="extras"
                  :cleartext="cleartext")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Tooltips from '@/components/texts/textedit/Tooltips.vue'
import Images from '@/components/texts/textedit/image/Index.vue'
import Translate from '@/components/texts/textedit/translate/Index.vue'
import Synonyms from '@/components/texts/textedit/synonyms/Index.vue'
import Description from '@/components/texts/textedit/description/Index.vue'
import textAPI from '@/api/textAPI'
import Test from '@/components/texts/textedit/Test.vue'

@Component({
  name: 'Index',
  components: {
    Tooltips,
    Translate,
    Synonyms,
    Images,
    Description,
    Test,
  },
})
export default class Index extends Vue {
    private text: any = {}
    private cleartext: string = ''
    private extras: {} = {}
    private dictionary: [] = []
    private sentences: [] = []


    load(id: number) {
      textAPI.getText(id).then((response) => {
        if (response.data.success) {
          this.text = response.data.text
          this.cleartext = response.data.cleartext
          this.extras = response.data.extras
          this.dictionary = response.data.synonyms
          this.sentences = response.data.sentences
        } else {
          //
        }
      }, (response) => {
        console.log(response)
      })
    }

    updateTooltips() {
      textAPI.saveExtra({
        text_id: this.text.id,
        data: this.extras,
      }).then((response) => {
        if (response.data.success) {
          this.load(this.text.id)
        }
      }, (response) => {
        console.log(response)
      })
    }

    updateSentences() {
      textAPI.saveSentences({
        text_id: this.text.id,
        data: this.sentences,
      }).then((response) => {
        if (response.data.success) {
          this.load(this.text.id)
        }
      }, (response) => {
        console.log(response)
      })
    }

    mounted() {
      this.load(parseInt(this.$route.params.id, 10))
    }
}
</script>
