import { __decorate, __metadata } from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import Message from '@/Scandinaver/Dashboard/Domain/Message';
import { Inject } from 'vue-typedi';
import MessageService from '@/Scandinaver/Dashboard/Application/message.service';
let MessageModalComponent = class MessageModalComponent extends Vue {
    close() {
        this.$emit('close');
    }
    async onChange(val) {
        if (val) {
            await this.service.read(this.item);
        }
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Message)
], MessageModalComponent.prototype, "item", void 0);
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], MessageModalComponent.prototype, "visible", void 0);
__decorate([
    Inject(),
    __metadata("design:type", MessageService)
], MessageModalComponent.prototype, "service", void 0);
__decorate([
    Watch('visible'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageModalComponent.prototype, "onChange", null);
MessageModalComponent = __decorate([
    Component({
        components: {},
    })
], MessageModalComponent);
export default MessageModalComponent;
//# sourceMappingURL=message-modal.component.js.map