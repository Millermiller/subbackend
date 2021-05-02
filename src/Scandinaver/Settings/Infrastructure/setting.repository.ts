import { Inject, Service } from 'typedi'
import { CommonRepository } from '@/Scandinaver/Core/Infrastructure/common.repository'
import { Setting } from '@/Scandinaver/Settings/Domain/Setting'
import { API } from '@/Scandinaver/Settings/Infrastructure/api/settings.api'
import SettingsAPI = API.SettingsAPI
import { SettingForm } from '@/Scandinaver/Settings/Domain/SettingForm'

@Service()
export default class SettingRepository extends CommonRepository<Setting> {
  @Inject()
  protected api: SettingsAPI

  public async saveAll(settings: SettingForm[]): Promise<any> {
    return this.api.saveAll(settings)
  }
}
