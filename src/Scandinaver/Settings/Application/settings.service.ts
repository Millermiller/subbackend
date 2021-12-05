import { BaseService } from '@/Scandinaver/Core/Application/base.service'
import { Setting } from '@/Scandinaver/Settings/Domain/Setting'
import { Inject, Service } from 'typedi'
import SettingRepository from '@/Scandinaver/Settings/Infrastructure/setting.repository'
import { SettingForm } from '@/Scandinaver/Settings/Domain/SettingForm'
import { FiltersData } from '@/Scandinaver/Core/Application/FiltersData'
import { PaginatedResponse } from '@/Scandinaver/Core/Infrastructure/PaginatedResponse'

@Service()
export default class SettingService extends BaseService<Setting> {
  @Inject()
  private readonly settingRepository: SettingRepository

  public fromDTO(dto: SettingForm): Setting {
    const setting = new Setting()
    setting.id = dto.id || 0
    setting.title = dto.title
    setting.slug = dto.slug
    setting.value = dto.value
    setting.type = dto.type

    return setting
  }

  public async create(data: SettingForm): Promise<Setting> {
    return this.settingRepository.create(data)
  }

  public async getAll(filters: FiltersData): Promise<PaginatedResponse<Setting>> {
    return this.settingRepository.paginate(filters)
  }

  public async update(setting: Setting, form: SettingForm): Promise<Setting> {
    return this.settingRepository.update(setting, form)
  }

  public async save(settings: Setting[]): Promise<any> {
    const settingsData: SettingForm[] = []

    settings.forEach((setting: Setting) => {
      settingsData.push(setting.toDTO())
    })

    return this.settingRepository.saveAll(settingsData)
  }

  public async destroy(setting: Setting): Promise<void> {
    return this.settingRepository.delete(setting)
  }
}
