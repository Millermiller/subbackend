import { __decorate, __metadata } from "tslib";
import { BaseRepository } from '@/Scandinaver/Core/Infrastructure/base.repository';
import Intro from '@/Scandinaver/Intro/Domain/Intro';
import { Inject, Service } from 'typedi';
import { API } from '@/Scandinaver/Intro/Infrastructure/api/introAPI';
var IntroAPI = API.IntroAPI;
import { plainToClass } from 'class-transformer';
let IntroRepository = class IntroRepository extends BaseRepository {
    async all() {
        return this.api.all().then(response => plainToClass(Intro, response.data));
    }
    async delete(intro) {
        return this.api.destroy(intro.id);
    }
    async one(id) {
        return this.api.load(id).then(response => plainToClass(Intro, response.data));
    }
    async save(entity) {
        return this.api.save(entity.id, entity).then(response => plainToClass(Intro, response.data));
    }
};
__decorate([
    Inject(),
    __metadata("design:type", IntroAPI)
], IntroRepository.prototype, "api", void 0);
IntroRepository = __decorate([
    Service()
], IntroRepository);
export default IntroRepository;
//# sourceMappingURL=IntroRepository.js.map