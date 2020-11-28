import { __decorate, __metadata } from "tslib";
import { BaseService } from '@/Scandinaver/Core/Application/base.service';
import { Inject, Service } from 'typedi';
import PlanRepository from '@/Scandinaver/Plan/Infrastructure/plan.repository';
let PlanService = class PlanService extends BaseService {
    create(input) {
        return this.repository.save(input);
    }
    async getAll() {
        return this.repository.all();
    }
    async getOne(id) {
        return this.repository.one(id);
    }
    async destroy(plan) {
        return this.repository.delete(plan);
    }
    async update(plan) {
        return this.repository.save(plan);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PlanRepository)
], PlanService.prototype, "repository", void 0);
PlanService = __decorate([
    Service()
], PlanService);
export default PlanService;
//# sourceMappingURL=plan.service.js.map