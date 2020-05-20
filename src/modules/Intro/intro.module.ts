import Component from 'vue-class-component'
import Vue from 'vue'
import introAPI from '@/api/introAPI'

@Component({})
export default class IntroModule extends Vue {
  private intros: [] = []

  load() {
    introAPI.all().then(
      (response) => {
        this.intros = response.data
      },
      (response) => {
        console.log(response)
      },
    )
  }

  edit(row: any) {
    this.$router.push({ name: 'Intro', params: { id: row.id } })
  }

  remove(row: any) {
    if (confirm('удалить?')) {
      introAPI.destroy(row.id).then(
        (response) => {
          this.load()
        },
        (response) => {
          console.log(response)
        },
      )
    }
  }

  mounted() {
    this.load()
  }
}
