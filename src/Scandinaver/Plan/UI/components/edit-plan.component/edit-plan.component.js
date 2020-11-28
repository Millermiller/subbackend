import { __decorate, __metadata } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-typedi';
import PlanService from '@/Scandinaver/Plan/Application/plan.service';
let EditPlanComponent = class EditPlanComponent extends Vue {
    mounted() {
        this.load(Number(this.$route.params.id));
    }
    async load(id) {
        this.plan = await this.service.getOne(id);
    }
    back() {
        this.$router.go(-1);
    }
    async save() {
        await this.service.update(this.plan);
        this.$router.go(-1);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PlanService)
], EditPlanComponent.prototype, "service", void 0);
EditPlanComponent = __decorate([
    Component({
        components: {},
    })
], EditPlanComponent);
export default EditPlanComponent;
//# sourceMappingURL=edit-plan.component.js.map