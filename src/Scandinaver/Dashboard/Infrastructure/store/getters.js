import { Getters } from 'vuex-smart-module';
export default class DashboardGetters extends Getters {
    get wordsCount() {
        return this.state.wordsCount;
    }
    get assetsCount() {
        return this.state.assetsCount;
    }
    get audioCount() {
        return this.state.audioCount;
    }
    get usersCount() {
        return this.state.usersCount;
    }
    get textsCount() {
        return this.state.textsCount;
    }
}
//# sourceMappingURL=getters.js.map