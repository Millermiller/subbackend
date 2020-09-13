import { Component, Vue } from 'vue-property-decorator'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { Inject } from 'vue-typedi'
import CategoryService from '@/Scandinaver/Blog/Application/CategoryService'

@Component({
  components: {},
})
export default class EditCategoryComponent extends Vue {

  @Inject()
  private categoryService: CategoryService

  private edited: Category = new Category()
  private categories: Category[] = [new Category()]
  private newcategory: string = ''
  private isComponentModalActive: boolean = false
  private loading: boolean = false

  mounted() {
    this.load()
  }

  async load() {
    this.loading = true
    this.categories = await this.categoryService.getAll()
    this.loading = false
  }

  edit(row: any) {
    this.edited = row
    this.isComponentModalActive = true
  }

  async update() {
    await this.categoryService.update(this.edited)
    this.isComponentModalActive = false
    this.$snackbar.open(this.$tc('updated'))
    await this.load()
  }

  async add() {
    await this.categoryService.create(this.newcategory)
    await this.load()
  }

  async remove(category: Category) {
    if (confirm('Удалить?')) {
      await this.categoryService.destroy(category)
      this.$snackbar.open(this.$tc('removedCategory'))
      await this.load()
    }
  }
}