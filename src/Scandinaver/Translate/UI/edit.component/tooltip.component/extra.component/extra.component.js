import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
let ExtraComponent = class ExtraComponent extends Vue {
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], ExtraComponent.prototype, "item", void 0);
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], ExtraComponent.prototype, "index", void 0);
ExtraComponent = __decorate([
    Component({
        components: {}
    })
], ExtraComponent);
export default ExtraComponent;
//# sourceMappingURL=extra.component.js.map