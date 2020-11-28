import { Mutations } from 'vuex-smart-module';
export default class DashboardMutations extends Mutations {
    setWordsCount(data) {
        this.state.wordsCount = data;
    }
    setAssetsCount(data) {
        this.state.assetsCount = data;
    }
    setAudioCount(data) {
        this.state.audioCount = data;
    }
    setUsersCount(data) {
        this.state.usersCount = data;
    }
    setTextsCount(data) {
        this.state.textsCount = data;
    }
}
//# sourceMappingURL=mutations.js.map