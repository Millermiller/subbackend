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
  private readonly settingsService: SettingService

  public settings: Setting[] = []
  public loading: boolean = false
  public showModal: boolean = false
  public errors: {
    _title: string
    _slug: string
  } = {
    _title: '',
    _slug: '',
  }
  public edited: SettingForm = {
    id: undefined,
    slug: '',
    title: '',
    value: undefined,
    type: undefined
  }

  async mounted(): Promise<void> {
    await this.load()
  }

  private async load(): Promise<void> {
    this.loading = true
    this.settings = await this.settingsService.getAll()
    this.loading = false
  }

  public async save(): Promise<void> {
    await this.settingsService.save(this.settings)
    this.$buefy.snackbar.open(this.$tc('saved'))
  }

  public edit(setting: Setting): void {
    this.edited = setting.toDTO()
    this.showCreateModal()
  }

  public async remove(setting: Setting): Promise<void> {
    await this.$buefy.dialog.confirm({
      message: this.$tc('confirmRemove'),
      onConfirm: async () => {
        await this.settingsService.destroy(setting)
        this.$buefy.snackbar.open(this.$tc('settingRemoved'))
        await this.load()
      },
    })
  }

  public closeModal(): void {
    this.edited = {
      id: undefined,
      slug: '',
      title: '',
      value: undefined,
      type: undefined
    }
    this.showModal = false
  }

  public showCreateModal(): void {
    this.showModal = true
  }

  public async create(): Promise<void> {
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
