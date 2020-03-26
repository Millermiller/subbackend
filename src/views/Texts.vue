<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h4.title.text-center Тексты
          button.button.is-small(style="margin: 10px 0;", @click="showSettingsModal") Добавить

          b-table(
            :data="texts",
            paginated,
            narrowed="",
            :loading="loading",
            per-page="10")

            template(slot-scope="props")
              b-table-column(field="id", label="ID", width="40", sortable, numeric).
                {{ props.row.id }}

              b-table-column(field="level" label="level" sortable).
                {{ props.row.level }}

              b-table-column(field="title" label="title" sortable).
                {{ props.row.title }}

              b-table-column(field="description" label="description" sortable).
                {{ props.row.description }}

              b-table-column(field="image" label="" width="90")
                img.avatar-small(:src="props.row.image")

              b-table-column(custom-key="actions")
                button.button.is-warning(@click="edit(props.row)")
                  b-icon(icon="account-edit", size="is-small")

                button.button.is-warning(@click="setVisibility(props.row)")
                  b-icon(:icon="icon(props.row)", size="is-small")

                button.button.is-danger(@click="remove(props.row)")
                  b-icon(icon="account-remove", size="is-small")

    b-modal(:active.sync="isComponentModalActive" @close="close")
      .box(style="width: 1100px")
        .columns
          .column
            p.control
              input.input(type="text", v-model="form.title", placeholder="Название")

        .columns
          .column.is-6
            b-field(label="оригинал")
              b-input(type="textarea" v-model="form.origtext" style="height: 500px;")

          .columns.is-6
            b-field(label="перевод")
              b-input(type="textarea" v-model="form.translate" style="height: 500px;")

        .columns
          .column
            button.button.is-succes( @click="add") Сохранить
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import Modal from '@/components/texts/Modal.vue'
import textAPI from '@/api/textAPI'

  @Component({
    name: 'TextsView',
    components: {
      Modal,
    },
  })
export default class TextsView extends Vue {
    private form: {} = {
      title: '',
      origtext: '',
      translate: '',
    }
    private texts: [] = []
    private isComponentModalActive: boolean = false

    icon(row: any) {
      return (row.published) ? 'eye' : 'eye-off'
    }

    load() {
      textAPI.all().then((response) => {
        this.texts = response.data
      }, (response) => {
        console.log(response)
      })
    }

    remove(row: any) {
      if (confirm('удалить?')) {
        textAPI.destroy(row.id).then((response) => {
          this.load()
        }, (response) => {
          console.log(response)
        })
      }
    }

    edit(row: any) {
      this.$router.push({ name: 'textedit', params: { id: row.id } })
    }

    add() {
      textAPI.create(this.form).then((response) => {
        if (response.data.success) {
          this.$snackbar.open('Загружено')
          this.load()
          this.closeSettingsModal()
        } else {
          this.$snackbar.open('Ошибка')
        }
      }, (response) => {
        console.log(response)
      })
    }

    setVisibility(item: any) {
      textAPI.publishText({
        id: item.id,
        published: (item.published) ? '0' : '1',
      }).then((response) => {
        if (response.data.success) {
          this.load()
        } else {
          this.$snackbar.open('Ошибка')
        }
      }, (response) => {
        console.log(response)
      })
    }

    showSettingsModal() {
      this.isComponentModalActive = true
    }

    closeSettingsModal() {
      this.isComponentModalActive = false
    }

    mounted() {
      this.load()
    }
}
</script>
