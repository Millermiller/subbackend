import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import Message from '@/Scandinaver/Dashboard/Domain/Message';
import Modal from './message-modal.component/index.vue';
let MessageComponent = class MessageComponent extends Vue {
    constructor() {
        super(...arguments);
        this.showModal = false;
        this.cardModal = null;
        this.imageModal = null;
    }
    openModalBasic() {
        this.showModal = true;
    }
    closeModalBasic() {
        this.showModal = false;
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Message)
], MessageComponent.prototype, "item", void 0);
MessageComponent = __decorate([
    Component({
        components: {
            Modal,
        },
    })
], MessageComponent);
export default MessageComponent;
//# sourceMappingURL=message.component.js.map