import { __decorate, __metadata } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-typedi';
import PageService from '@/Scandinaver/Pages/Application/page.service';
let AddPageComponent = class AddPageComponent extends Vue {
    async save() {
        await this.service.create(this.page);
        this.$router.go(-1);
    }
    back() {
        this.$router.go(-1);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PageService)
], AddPageComponent.prototype, "service", void 0);
AddPageComponent = __decorate([
    Component({
        components: {},
    })
], AddPageComponent);
export default AddPageComponent;
//# sourceMappingURL=add-page.component.js.map