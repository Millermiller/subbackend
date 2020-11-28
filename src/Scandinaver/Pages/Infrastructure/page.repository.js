import { __decorate, __metadata } from "tslib";
import { Inject, Service } from 'typedi';
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository';
import Page from '@/Scandinaver/Pages/Domain/Page';
import { API } from '@/Scandinaver/Pages/Infrastructure/api/metaAPI';
var MetaAPI = API.MetaAPI;
import { plainToClass } from 'class-transformer';
let PageRepository = class PageRepository extends BaseRepository {
    async all() {
        return this.api.all().then(response => plainToClass(Page, response.data));
    }
    async delete(entity) {
        return this.api.destroy(entity.id);
    }
    async one(id) {
        return this.api.load(id).then(response => plainToClass(Page, response.data));
    }
    async save(entity) {
        return this.api.save(entity.id, entity).then(response => plainToClass(Page, response.data));
    }
    async find(search) {
        return this.api.search(search).then(response => plainToClass(Page, response.data));
    }
};
__decorate([
    Inject(),
    __metadata("design:type", MetaAPI)
], PageRepository.prototype, "api", void 0);
PageRepository = __decorate([
    Service()
], PageRepository);
export default PageRepository;
//# sourceMappingURL=page.repository.js.map