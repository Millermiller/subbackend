import { Component, Vue } from 'vue-property-decorator'
import categoryAPI from '@/api/categoryAPI'
import Category from '@/modules/Blog/models/Category'

@Component({
  components: {},
})
export default class EditCategoryComponent extends Vue {
  edited: Category
  categories: Category[]
  newcategory: ''
  isComponentModalActive: boolean

  mounted() {
    this.load()
  }

  load() {
    categoryAPI.all().then(
      (response) => {
        this.categories = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  edit(row: any) {
    this.edited = row
    this.isComponentModalActive = true
  }

  update() {
    categoryAPI.save(this.edited.id, this.edited).then(
      (response) => {
        if (response.status === 200) {
          this.isComponentModalActive = false
          this.$snackbar.open(this.$tc('updated'))
          this.load()
        } else this.$snackbar.open(this.$tc('error'))
      },
      (response) => {
        console.log(response)
      },
    )
  }

  add() {
    categoryAPI.create({ name: this.newcategory }).then(
      (response) => {
        if (response.status === 201) {
          this.load()
        } else {
          this.$snackbar.open(this.$tc('error'))
          console.log(response)
        }
      },
      (response) => {
        console.log(response)
      },
    )
  }

  remove(row: any) {
    if (confirm('Удалить?')) {
      categoryAPI.destroy(row.id).then(
        (response) => {
          if (response.status === 204) {
            this.$snackbar.open(this.$tc('removedCategory'))
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
}
