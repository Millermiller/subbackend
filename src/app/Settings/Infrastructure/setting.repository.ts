import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/app/Core/Infrastructure/common.repository'
import { Setting } from '@/app/Settings/Domain/Setting'
import { API } from '@/app/Settings/Infrastructure/api/settings.api'
import SettingsAPI = API.SettingsAPI
import { SettingForm } from '@/app/Settings/Domain/SettingForm'

@Service()
export default class SettingRepository extends CommonRepository<Setting> {
  @Inject()
  protected readonly api: SettingsAPI

  public async saveAll(settings: SettingForm[]): Promise<any> {
    return this.api.saveAll(settings)
  }
}
