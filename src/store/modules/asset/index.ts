import { Module } from 'vuex-smart-module';
import AssetState from '@/store/modules/asset/state';
import AssetMutations from '@/store/modules/asset/mutations';
import AssetGetters from '@/store/modules/asset/getters'

export default new Module({
  namespaced: false,
  state: AssetState,
  mutations: AssetMutations,
  getters: AssetGetters,
})
