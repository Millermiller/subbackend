import { Mutations } from 'vuex-smart-module';
import DashboardState from '@/app/Dashboard/Infrastructure/store/state'

export default class DashboardMutations extends Mutations<DashboardState> {
  public setWordsCount(data: number): void {
    this.state.wordsCount = data
  }

  public setAssetsCount(data: number): void {
    this.state.assetsCount = data
  }

  public setAudioCount(data: number): void {
    this.state.audioCount = data
  }

  public setUsersCount(data: number): void {
    this.state.usersCount = data
  }

  public setTextsCount(data: number): void {
    this.state.textsCount = data
  }
}
