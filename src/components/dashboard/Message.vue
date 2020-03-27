<template lang="pug">
  li.columns
    p.column.is-3.is-small {{item.name}}

    span.tag.is-success.is-3(v-if="item.readed", @click="openModalBasic") прочитано
    span.tag.is-success.is-3(v-if="!item.readed", @click="openModalBasic") не прочитано

    p.column {{item.subject}}
    p.column {{item.created_at}}
    a.delete(@click="$emit('deleteMessage', item.id)")
    modal(:visible="showModal", :item="item", @close="closeModalBasic")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Modal from '@/components/dashboard/modals/Modal.vue'
import Message from '@/models/Message';

@Component({
  name: 'MessageComponent',
  components: {
    Modal,
  },
})
export default class MessageComponent extends Vue {
  @Prop({ required: true })
  private item!: Message

  private showModal: boolean = false
  private cardModal: any = null
  private imageModal: any = null

  openModalBasic() {
    console.log('show')
    this.showModal = true
  }
  closeModalBasic() {
    console.log('close')
    this.showModal = false
  }
}
</script>
