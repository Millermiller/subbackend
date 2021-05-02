import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Setting } from '@/Scandinaver/Settings/Domain/Setting'
import { Inject, Service } from 'typedi'
import SettingRepository from '@/Scandinaver/Settings/Infrastructure/setting.repository'
import { SettingForm } from '@/Scandinaver/Settings/Domain/SettingForm'

@Service()
export default class SettingService extends BaseService<Setting> {
  @Inject()
  private settingRepository: SettingRepository

  create(data: SettingForm): Promise<Setting> | Setting {
    return this.settingRepository.create(data)
  }

  async getAll(): Promise<Setting[]> {
    return this.settingRepository.all()
  }

  async update(setting: Setting, form: SettingForm): Promise<Setting> {
    return this.settingRepository.update(setting, form)
  }

  async save(settings: Setting[]): Promise<any> {
    const settingsData: SettingForm[] = []

    settings.forEach((setting: Setting) => {
      settingsData.push(setting.toDTO())
    })

    return this.settingRepository.saveAll(settingsData)
  }

  async destroy(setting: Setting) {
    return this.settingRepository.delete(setting)
  }
}
