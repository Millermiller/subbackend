import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
let ItemComponent = class ItemComponent extends Vue {
    constructor() {
        super(...arguments);
        this.translate = '';
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], ItemComponent.prototype, "word", void 0);
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], ItemComponent.prototype, "index", void 0);
ItemComponent = __decorate([
    Component({
        components: {}
    })
], ItemComponent);
export default ItemComponent;
//# sourceMappingURL=item.component.js.map