import { __decorate, __metadata } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-typedi';
import PlanService from '@/Scandinaver/Plan/Application/plan.service';
let AddPlanComponent = class AddPlanComponent extends Vue {
    back() {
        this.$router.go(-1);
    }
    async save() {
        await this.service.create(this.plan);
        this.$router.go(-1);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PlanService)
], AddPlanComponent.prototype, "service", void 0);
AddPlanComponent = __decorate([
    Component({
        components: {},
    })
], AddPlanComponent);
export default AddPlanComponent;
//# sourceMappingURL=add-plan.component.js.map