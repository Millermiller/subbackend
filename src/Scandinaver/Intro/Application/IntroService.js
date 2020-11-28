import { __decorate, __metadata } from "tslib";
import { BaseService } from '@/Scandinaver/Core/Application/base.service';
import Intro from '@/Scandinaver/Intro/Domain/Intro';
import { Inject, Service } from 'typedi';
import IntroRepository from '@/Scandinaver/Intro/Infrastructure/IntroRepository';
let IntroService = class IntroService extends BaseService {
    create(input) {
        const intro = new Intro();
        return this.repository.save(intro);
    }
    async getOne(id) {
        return this.repository.one(id);
    }
    async getAll() {
        return this.repository.all();
    }
    async destroy(intro) {
        return this.repository.delete(intro);
    }
    async update(intro) {
        return this.repository.save(intro);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", IntroRepository)
], IntroService.prototype, "repository", void 0);
IntroService = __decorate([
    Service()
], IntroService);
export default IntroService;
//# sourceMappingURL=IntroService.js.map