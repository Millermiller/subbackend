<template lang="pug">
  .columns
    .column.is-4.asset-column
      div.box
        b-tabs

          b-tab-item(label="слова")
            button.button.is-small(style="margin: 10px 0;", @click="addAsset(1)") Добавить
            ul
              asset(
                v-for="word in words",
                :item="word",
                @edit="assetEdit",
                @remove="removeAsset")

          b-tab-item label="предложения"
            button.button.is-small(style="margin: 10px 0;", @click="addAsset(2)") Добавить
            ul
              asset(
                v-for="sentence in sentences",
                :item="sentence",
                @edit="assetEdit",
                @remove="removeAsset")
    .column.is-4.cards-column
      .box
        card(
          v-for="(card, index) in cards",
          :card="card",
          :index="index",
          :key="card.id",
          v-on:remove="removeCard")

    div.column.is-4.translate-column
      .box
        div.block
          p.control.has-addons
            input.input(type="text", placeholder="rus", v-model="text")
            a(:class="['button', {'is-loading': searchloaded }]", @click="search") Искать
            a(:class="['button', {'is-loading': sentencesloaded }]", @click="searchsentences") Предложения
        .block
          translate(
            v-for="(item, index) in translates",
            :item="item",
            :index="index",
            @increment="increment",
            @remove="removeTranslate")

    b-modal(:active.sync="isComponentModalActive" @close="close")
      .box
        .translate-section
          p.
            Asset id={{editedAsset.id}} basic={{editedAsset.basic}} type={{editedAsset.type}}
            level={{editedAsset.level}} favorite={{editedAsset.favorite}}

          .b-field
            b-input(type="text", placeholder="text", v-model="editedAsset.title", style="width: 380px;")
            b-input(type="text" placeholder="text" v-model="editedAsset.level" style="width: 80px;")
            p.control
              button.button.is-success(@click="updateTitle") Сохранить
            p.control
              button.button.is-warning(@click="close") Отмена
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import AssetComponent from '@/components/assets/AssetComponent.vue'
import Card from '@/components/assets/Card.vue'
import Translate from '@/components/assets/Translate.vue'
import assetAPI from '@/api/assetAPI'
import { Asset } from '@/models/Asset';

  @Component({
    name: 'AssetsView',
    components: {
      AssetComponent,
      Card,
      Translate,
    },
  })
export default class AssetsView extends Vue {
    private words: [] = []
    private sentences: [] = []
    private text: string = ''
    private translates: [] = []
    private sentence: number = 0
    private searchloaded: boolean = false
    private sentencesloaded: boolean = false
    private isComponentModalActive: boolean = false
    private editedAsset: any = {
      id: '',
      basic: '',
      type: '',
      level: '',
      title: '',
    }

    assetEdit(item: Asset): void {
      this.editedAsset = item
      this.isComponentModalActive = true
    }

    load(): void {
      assetAPI.getAssets().then((response) => {
        this.words = response.data.words
        this.sentences = response.data.sentences
      }, (response) => {
        console.log(response)
      })
    }

    removeCard(data: any): void {
      this.$store.dispatch('removeCard', data)
      this.decrement()
    }

    removeAsset(item: any): void {
      assetAPI.destroyAsset(item.id).then((response) => {
        this.load()
      }, (response) => {
        console.log(response)
      })
    }

    addAsset(type: any): void {
      assetAPI.addAsset(type).then((response) => {
        this.load()
      }, (response) => {
        console.log(response)
      })
    }

    search(): void {
      if (this.text !== '') {
        this.searchloaded = true
        assetAPI.getTranslate(this.text, this.sentence).then(
          (response) => {
            if (!response.data.length) {
              console.log(response.data.message)
              this.translates = []
              this.searchloaded = false
            }
            this.translates = response.data
            this.searchloaded = false
          },
          (response) => {
            console.log(response)
          },
        )
      }
    }

    searchsentences(): void {
      this.sentencesloaded = true
      assetAPI.sentences().then(
        (response) => {
          this.translates = response.data
          this.sentencesloaded = false
        },
        (response) => {
          console.log(response)
        },
      )
    }

    removeTranslate(data: any): void {
      assetAPI.removeTranslate(data.item.id).then(
        (response) => {
          if (response.data.success) {
            this.translates.splice(data.index, 1)
          }
        },
        (response) => {
          console.log(response)
        },
      )
    }

    increment(): void {
      const aid = this.$store.getters.activeAssetId

      this.words.forEach((item: any, i) => {
        if (item.id === aid) item.cards_count++
      })
    }

    decrement(): void {
      const aid = this.$store.getters.activeAssetId

      this.words.forEach((item: any, i) => {
        if (item.id === aid) item.cards_count--
      })
    }

    updateTitle() {
      assetAPI.updateTitle(this.editedAsset.id, {
        text: this.editedAsset.title,
        level: this.editedAsset.level,
      }).then((response) => {
        if (response.data.success) {
          this.$snackbar.open('Обновлено')
          this.load()
        } else {
          this.$snackbar.open('Ошибка')
        }
        this.close()
      }, (response) => {
        console.log(response)
      })
    }

    close() {
      this.isComponentModalActive = false
    }

    mounted() {
      this.load()
    }

    get cards() {
      return this.$store.getters.cards
    }
}
</script>
