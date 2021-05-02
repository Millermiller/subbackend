import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-typedi'
import SettingService from '@/Scandinaver/Settings/Application/settings.service'
import { Setting } from '@/Scandinaver/Settings/Domain/Setting'
import { SettingForm } from '@/Scandinaver/Settings/Domain/SettingForm'

@Component({
  components: {},
})
export default class ListSettingsComponent extends Vue {
  @Inject()
  private settingsService: SettingService

  private settings: Setting[] = []
  private loading: boolean = false
  private showModal: boolean = false
  private errors: {
    _title: string
    _slug: string
  } = {
    _title: '',
    _slug: '',
  }
  private edited: SettingForm = {
    id: undefined,
    slug: '',
    title: '',
    value: undefined,
    type: undefined
  }

  async mounted() {
    await this.load()
  }

  async load() {
    this.loading = true
    this.settings = await this.settingsService.getAll()
    this.loading = false
  }

  async save() {
    await this.settingsService.save(this.settings)
    this.$buefy.snackbar.open(this.$tc('saved'))
  }

  edit(setting: Setting) {
    this.edited = setting.toDTO()
    this.showCreateModal()
  }

  async remove(setting: Setting) {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.settingsService.destroy(setting)
        this.$buefy.snackbar.open(this.$tc('settingRemoved'))
        await this.load()
      },
    })
  }

  public closeModal() {
    this.edited = {
      id: undefined,
      slug: '',
      title: '',
      value: undefined,
      type: undefined
    }
    this.showModal = false
  }

  showCreateModal() {
    this.showModal = true
  }

  async create() {
    let errors = false
    if (this.edited.title === '') {
      this.errors._title = 'Empty title'
      errors = true
    } else {
      this.errors._title = ''
    }

    if (this.edited.slug === '') {
      this.errors._slug = 'Empty slug'
      errors = true
    } else {
      this.errors._slug = ''
    }

    if (!errors) {
      try {
        if (this.edited.id) {
          const setting = Setting.fromDTO(this.edited)
          await this.settingsService.update(setting, this.edited)
        } else {
          await this.settingsService.create(this.edited)
        }
        await this.load()
        this.closeModal()
      } catch (response) {
        const keys = Object.keys(response.errors)
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i].toString()
          const data = response.errors[key]
          // @ts-ignore
          // eslint-disable-next-line prefer-destructuring
          this.errors[key] = data[0]
        }
      }
    }
  }
}
