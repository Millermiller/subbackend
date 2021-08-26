import { Component } from 'vue-property-decorator'
import Category from '@/Scandinaver/Blog/Domain/Category'
import { Inject } from 'vue-typedi'
import CategoryService from '@/Scandinaver/Blog/Application/CategoryService'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'
import CategoryDTO from '@/Scandinaver/Blog/Domain/CategoryDTO'

@Component({
  components: {},
})
export default class ListCategoryComponent extends CRUDComponent<Category, CategoryDTO> {
  @Inject()
  protected service: CategoryService

  protected modalTitleCreate = this.$root.$tc('createCategory')
  protected modalTitleUpdate = this.$root.$tc('updateCategory')

  protected buildForm(): CategoryDTO {
    return new CategoryDTO();
  }
}
