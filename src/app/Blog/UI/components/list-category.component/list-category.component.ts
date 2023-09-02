import { Component } from 'vue-property-decorator'
import Category from '@/app/Blog/Domain/Category'
import { Inject } from 'vue-typedi'
import CategoryService from '@/app/Blog/Application/CategoryService'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'
import CategoryDTO from '@/app/Blog/Domain/CategoryDTO'

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
