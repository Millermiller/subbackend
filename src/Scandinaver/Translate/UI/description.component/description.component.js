import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Inject } from 'vue-typedi';
import TextService from '@/Scandinaver/Translate/Application/text.service';
import { Translate } from '@/Scandinaver/Translate/Domain/Translate';
let DescriptionComponent = class DescriptionComponent extends Vue {
    constructor() {
        super(...arguments);
        this.form = {
            content: '',
        };
    }
    onChange(val) {
        this.form.content = val.description;
    }
    async save() {
        await this.service.saveDescription(this.item, this.form.content);
        this.$buefy.snackbar.open('Обновлено!');
        this.$emit('reload');
    }
    clear() {
        this.form.content = '';
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Translate)
], DescriptionComponent.prototype, "item", void 0);
__decorate([
    Inject(),
    __metadata("design:type", TextService)
], DescriptionComponent.prototype, "service", void 0);
__decorate([
    Watch('item'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DescriptionComponent.prototype, "onChange", null);
DescriptionComponent = __decorate([
    Component({
        components: {},
    })
], DescriptionComponent);
export default DescriptionComponent;
//# sourceMappingURL=description.component.js.map