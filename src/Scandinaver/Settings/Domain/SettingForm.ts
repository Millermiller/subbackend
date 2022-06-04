import { EntityForm } from '@/Scandinaver/Core/Domain/Contract/EntityForm'
import { Setting } from '@/Scandinaver/Settings/Domain/Setting'

export class SettingForm extends EntityForm<Setting> {
  title: string
  slug: string
  value: any
  type: string

  public fromDTO(): Setting {
    const setting = new Setting()
    setting.id = this.id || 0
    setting.title = this.title
    setting.slug = this.slug
    setting.value = this.value
    setting.type = this.type

    return setting
  }
}
