import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Dashboard/Infrastructure/api/dashboard.api'
import { store } from '@/Scandinaver/Core/Infrastructure/store'
import DashboardApi = API.DashboardApi

@Service()
export default class DashboardService {
  @Inject()
  private api: DashboardApi

  async loadDashboard() {
    const { language } = store.getters
    this.api.load(language).then(
      response => store.dispatch('setDashboard', response.data),
    )
  }
}
