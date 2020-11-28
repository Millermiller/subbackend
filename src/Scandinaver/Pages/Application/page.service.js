import { __decorate, __metadata } from "tslib";
import { Inject, Service } from 'typedi';
import { BaseService } from '@/Scandinaver/Core/Application/base.service';
import PageRepository from '@/Scandinaver/Pages/Infrastructure/page.repository';
let PageService = class PageService extends BaseService {
    async create(page) {
        return await this.repository.save(page);
    }
    async getOne(id) {
        return this.repository.one(id);
    }
    async getAll() {
        return this.repository.all();
    }
    async destroy(page) {
        return this.repository.delete(page);
    }
    async search(search) {
        return this.repository.find(search);
    }
    async update(page) {
        return this.repository.save(page);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PageRepository)
], PageService.prototype, "repository", void 0);
PageService = __decorate([
    Service()
], PageService);
export default PageService;
//# sourceMappingURL=page.service.js.map