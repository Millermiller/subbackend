import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import SettingService from '@/app/Settings/Application/settings.service'
import { Setting } from '@/app/Settings/Domain/Setting'
import { SettingForm } from '@/app/Settings/Domain/SettingForm'
import { CRUDComponent } from '@/app/Core/UI/CRUDComponent'

@Component({
  components: {},
})
export default class ListSettingsComponent extends CRUDComponent<Setting, SettingForm> {
  @Inject()
  protected readonly service: SettingService

  protected modalTitleCreate = this.$root.$tc('createSetting')
  protected modalTitleUpdate = this.$root.$tc('updateSetting')

  public async saveSettings(): Promise<void> {
    this.loading = true
    await this.service.save(this.entities)
    this.loading = false
    this.$buefy.snackbar.open(this.$tc('saved'))
  }

  protected buildForm(): SettingForm {
    return new SettingForm()
  }
}
