import { Actions } from 'vuex-smart-module'
import State from '@/app/Core/Infrastructure/store/user/state'
import UserGetters from '@/app/Core/Infrastructure/store/user/getters'
import UserMutations from '@/app/Core/Infrastructure/store/user/mutations'

export default class UserActions extends Actions<State, UserGetters, UserMutations, UserActions> {

}
