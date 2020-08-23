import { Actions, Mutations } from 'vuex-smart-module'
import State from '@/Scandinaver/Asset/Infrastructure/store/test/state'
import TestGetters from '@/Scandinaver/Asset/Infrastructure/store/test/getters'
import TestMutations from '@/Scandinaver/Asset/Infrastructure/store/test/mutations'

export default class TestActions extends Actions<State, TestGetters, TestMutations, TestActions> {

}
