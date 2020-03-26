<template lang="pug">
  li(:class="['columns', 'log', item.type, {'today': item.hours < 10}]")
    p.column.is-3.is-small {{item.created_at}}
    p.column {{item.message}}
    a.delete(@click="$emit('deleteLog', item.id)")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'Log',
})
export default class extends Vue {
    @Prop({ required: true })
    private item!: any
}
</script>
