import { __decorate, __metadata } from "tslib";
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository';
import Plan from '@/Scandinaver/Plan/Domain/Plan';
import { Inject, Service } from 'typedi';
import { API } from '@/Scandinaver/Plan/Infrastructure/api/planAPI';
var PlanAPI = API.PlanAPI;
import { plainToClass } from 'class-transformer';
let PlanRepository = class PlanRepository extends BaseRepository {
    async all() {
        return this.api.all().then(response => plainToClass(Plan, response.data));
    }
    async delete(entity) {
        return this.api.destroy(entity.id);
    }
    async one(id) {
        return this.api.load(id).then(response => plainToClass(Plan, response.data));
    }
    async save(entity) {
        return this.api.save(entity.id, entity).then(response => plainToClass(Plan, response.data));
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PlanAPI)
], PlanRepository.prototype, "api", void 0);
PlanRepository = __decorate([
    Service()
], PlanRepository);
export default PlanRepository;
//# sourceMappingURL=plan.repository.js.map