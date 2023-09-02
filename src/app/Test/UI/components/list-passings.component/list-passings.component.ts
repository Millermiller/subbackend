import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import PassingService from '@/app/Test/Application/passing.service'
import Passing from '@/app/Test/Domain/Passing'
import PassingForm from '@/app/Test/Domain/PassingForm'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'

@Component({
  components: {},
})
export default class ListPassingsComponent extends CRUDComponent<Passing, PassingForm> {
  @Inject()
  protected readonly service: PassingService

  protected watchLanguage = true

  protected modalTitleUpdate = this.$root.$tc('updatePassing')

  protected buildForm(): PassingForm {
    return new PassingForm()
  }

  public tagClass(completed: boolean): string {
    return completed ? 'is-info' : 'is-danger'
  }
}
