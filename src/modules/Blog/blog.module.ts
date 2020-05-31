import Component from 'vue-class-component'
import Vue from 'vue'
@Component({
  components: {},
})
export default class BlogModule extends Vue {
  edit(row: any) {
    this.$router.push({ name: 'Статья', params: { id: row.id } })
  }
}
