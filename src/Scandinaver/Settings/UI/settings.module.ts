import Component from 'vue-class-component'
import Vue from 'vue'
import ListSettingsComponent from '@/Scandinaver/Settings/UI/list.settings.component/index.vue'

@Component({
  components: {
    ListSettingsComponent
  }
})
export default class SettingsModule extends Vue {}
