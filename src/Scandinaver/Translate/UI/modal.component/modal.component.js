import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
let ModalComponent = class ModalComponent extends Vue {
    constructor() {
        super(...arguments);
        this.form = {
            title: '',
            origtext: '',
            translate: '',
        };
    }
    close() {
        this.$emit('close');
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], ModalComponent.prototype, "visible", void 0);
ModalComponent = __decorate([
    Component({
        components: {}
    })
], ModalComponent);
export default ModalComponent;
//# sourceMappingURL=modal.component.js.map