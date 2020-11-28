import { __decorate, __metadata } from "tslib";
import { Component, Vue } from "vue-property-decorator";
import { Inject } from 'vue-typedi';
import PageService from '@/Scandinaver/Pages/Application/page.service';
let EditPageComponent = class EditPageComponent extends Vue {
    mounted() {
        this.load(Number(this.$route.params.id));
    }
    async load(id) {
        this.page = await this.service.getOne(id);
    }
    async save() {
        await this.service.update(this.page);
        this.$router.go(-1);
    }
    back() {
        this.$router.go(-1);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PageService)
], EditPageComponent.prototype, "service", void 0);
EditPageComponent = __decorate([
    Component({
        components: {}
    })
], EditPageComponent);
export default EditPageComponent;
//# sourceMappingURL=edit-page.component.js.map