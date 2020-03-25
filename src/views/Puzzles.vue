<template lang="pug">
  div
    div.tile.is-ancestor
      div.tile.is-parent
        article.tile.is-child.box
          h4.title.text-center Паззлы
          b-field
            p.control
              button.button.is-success(@click="showSettingsModal") Добавить

          b-table(
            :data="puzzles",
            paginated,
            narrowed="",
            :loading="loading",
            per-page="10")

            template(slot-scope="props")
              b-table-column(field="id" label="ID" width="40" sortable numeric).
                {{ props.row.id }}


              b-table-column(field="text" label="Text" sortable).
                {{ props.row.text }}


              b-table-column(field="translate" label="translate" sortable).
                {{ props.row.translate }}


              b-table-column(custom-key="actions")
                button.button.is-warning(@click="edit(props.row)")
                  b-icon(icon="account-edit" size="is-small")

                button.button.is-danger(@click="remove(props.row)")
                  b-icon(icon="account-remove", size="is-small")

    b-modal(:active.sync="isComponentModalActive", has-modal-card)
      form
        .modal-card(style="width: 400px")

          section.modal-card-body
            b-field(label="На русском")
              b-input(type="textarea" v-model="edited.text")

          section.modal-card-body
            b-field(label="На нерусском")
              b-input(type="textarea", v-model="edited.translate")

          footer.modal-card-foot
            button.button(type="button" @click="isComponentModalActive = false") Закрыть
            button.button.is-primary(@click="add") Сохранить

</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import puzzleAPI from '@/api/puzzleAPI'

  @Component({
    name: 'PuzzlesView',
  })
export default class PuzzlesView extends Vue {
    private edited: {} = {
      text: '',
      translate: '',
    }
    private puzzles: [] = []
    private isComponentModalActive: boolean = false

    mounted() {
      this.load()
    }

    load() {
      puzzleAPI.all().then((response) => {
        this.puzzles = response.data
      }, (response) => {
        console.log(response)
      })
    }

    add() {
      puzzleAPI.create(this.edited).then((response) => {
        if (response.data.success) {
          this.load()
          this.$snackbar.open('Загружено!')
          this.closeSettingsModal()
        } else {
          this.$snackbar.open('Ошибка!')
        }
      }, (response) => {
        console.log(response)
      })
    }

    remove(row: any) {
      if (confirm('удалить?')) {
        puzzleAPI.destroy(row.id).then((response) => {
          this.load()
        }, (response) => {
          console.log(response)
        })
      }
    }

    showSettingsModal() {
      this.isComponentModalActive = true
    }

    closeSettingsModal() {
      this.isComponentModalActive = false
    }
}
</script>
