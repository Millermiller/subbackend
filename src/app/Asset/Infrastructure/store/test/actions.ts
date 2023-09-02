import { Actions, Mutations } from 'vuex-smart-module'
import State from '@/app/Asset/Infrastructure/store/test/state'
import TestGetters from '@/app/Asset/Infrastructure/store/test/getters'
import TestMutations from '@/app/Asset/Infrastructure/store/test/mutations'

export default class TestActions extends Actions<State, TestGetters, TestMutations, TestActions> {

}
