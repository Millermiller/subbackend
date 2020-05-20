import Component from 'vue-class-component'
import Vue from 'vue'
import Page from './models/Page'
import metaAPI from '@/api/metaAPI'

@Component({
  components: {},
 // template: require('./pages.module.html')
})
export default class PagesModule extends Vue {
  pages: Page[]
  newpage: Page
  private search: string
  private articles: any

  mounted() {
    this.load()
  }

  load() {
    metaAPI.all().then(
      (response) => {
        this.pages = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  add() {
    this.$router.push({ name: 'Добавить страницу' })
  }

  remove(row: any) {
    if (confirm('Удалить?')) {
      metaAPI.destroy(row.id).then(
        (response) => {
          if (response.status === 204) {
            this.$snackbar.open('Страница удалена!')
            this.load()
          } else {
            this.$snackbar.open(this.$tc('error'))
          }
        },
        (response) => {
          this.$snackbar.open(this.$tc('error'))
          console.log(response)
        },
      )
    }
  }

  edit(row: any) {
    this.$router.push({ name: 'Страница', params: { id: row.id } })
  }

  find() {
    metaAPI.search(this.search).then(
      (response) => {
        this.articles = response.data
      },
      (response) => {
        this.$snackbar.open(this.$tc('error'))
        console.log(response)
      },
    )
  }
}
