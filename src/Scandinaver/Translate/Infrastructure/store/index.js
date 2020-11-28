import { Module } from 'vuex-smart-module';
import TextMutations from '@/Scandinaver/Translate/Infrastructure/store/mutations';
import TextGetters from '@/Scandinaver/Translate/Infrastructure/store/getters';
import State from '@/Scandinaver/Translate/Infrastructure/store/state';
export const textModule = new Module({
    namespaced: false,
    state: State,
    getters: TextGetters,
    mutations: TextMutations,
});
//# sourceMappingURL=index.js.map