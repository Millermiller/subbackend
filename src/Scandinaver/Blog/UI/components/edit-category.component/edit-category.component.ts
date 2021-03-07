import { Component, Vue } from 'vue-property-decorator'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { Inject } from 'vue-typedi'
import CategoryService from '@/Scandinaver/Blog/Application/CategoryService'
import { permissions } from '@/permissions/permission.type'

@Component({
  components: {},
})
export default class EditCategoryComponent extends Vue {
  @Inject()
  private categoryService: CategoryService

  private edited: Category = new Category()
  private categories: Category[] = [new Category()]
  public newcategory: string = ''
  private isComponentModalActive: boolean = false
  private loading: boolean = false

  private permissions: {}

  constructor() {
    super();
    this.permissions = permissions;
  }

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
    this.$buefy.snackbar.open(this.$tc('updated'))
    await this.load()
  }

  async add() {
    await this.categoryService.create(this.newcategory)
    await this.load()
  }

  async remove(category: Category) {
    await this.$buefy.dialog.confirm({
      message: 'Are you sure?',
      onConfirm: async () => {
        await this.categoryService.destroy(category)
        this.$buefy.snackbar.open(this.$tc('removedCategory'))
        await this.load()
      },
    })
  }
}
