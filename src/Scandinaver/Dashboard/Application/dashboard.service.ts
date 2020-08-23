import { Inject, Service } from 'typedi'
import { API } from '@/Scandinaver/Dashboard/Infrastructure/api/dashboard.api'
import DashboardApi = API.DashboardApi
import { store } from '@/Scandinaver/Core/Infrastructure/store'

@Service()
export default class DashboardService {

  @Inject()
  private api: DashboardApi

  async loadDashboard() {
    this.api.load().then(
      response => store.dispatch('setDashboard', response.data)
    )
  }
}
