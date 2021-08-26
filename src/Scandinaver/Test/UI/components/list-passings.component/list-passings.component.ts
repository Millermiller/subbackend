import Component from 'vue-class-component'
import Vue from 'vue'
import { Inject } from 'vue-typedi'
import PassingService from '@/Scandinaver/Test/Application/passing.service'
import Passing from '@/Scandinaver/Test/Domain/Passing'
import { permissions } from '@/permissions/permission.type'
import PassingForm from '@/Scandinaver/Test/Domain/PassingForm'
import { CRUDComponent } from '@/Scandinaver/Core/UI/CRUDComponent'

@Component({
  components: {},
})
export default class ListPassingsComponent extends CRUDComponent<Passing, PassingForm> {
  @Inject()
  protected readonly service: PassingService

  protected modalTitleUpdate = this.$root.$tc('updatePassing')

  protected buildForm(): PassingForm {
    return new PassingForm()
  }

  public tagClass(completed: boolean): string {
    return completed ? 'is-info' : 'is-danger'
  }
}
