import { Actions } from 'vuex-smart-module';
export default class DashboardActions extends Actions {
    setDashboard(data) {
        this.commit('setWordsCount', data.words);
        this.commit('setAssetsCount', data.assets);
        this.commit('setAudioCount', data.audio);
        this.commit('setUsersCount', data.users.length);
        this.commit('setTextsCount', data.texts);
    }
}
//# sourceMappingURL=actions.js.map