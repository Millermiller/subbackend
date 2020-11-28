import { __decorate, __metadata } from "tslib";
import { Service } from 'typedi';
import { Inject } from 'vue-typedi';
import TextRepository from '@/Scandinaver/Translate/Infrastructure/text.repository';
import { BaseService } from '@/Scandinaver/Core/Application/base.service';
import SynonymRepository from '@/Scandinaver/Translate/Infrastructure/synonym.repository';
import Synonym from '@/Scandinaver/Translate/Domain/Synonym';
import { store } from '@/Scandinaver/Core/Infrastructure/store';
let TextService = class TextService extends BaseService {
    async create(form) {
        return await this.textRepository.create(form);
    }
    async getTranslate(id) {
        return this.textRepository.one(id);
    }
    async all() {
        const language = store.getters.language;
        return this.textRepository.allByLanguage(language);
    }
    async getText(id) {
        return this.textRepository.one(id);
    }
    removeText(translate) {
        return this.textRepository.delete(translate);
    }
    publishText(translate) {
        translate.publish();
        return this.textRepository.save(translate);
    }
    unPublishText(translate) {
        translate.unpublish();
        return this.textRepository.save(translate);
    }
    async getSynonyms(word) {
        return this.synonymRepository.getByWord(word);
    }
    addSynonym(word, value) {
        const synonym = new Synonym();
        synonym.id = word.id;
        synonym.value = value;
        return this.synonymRepository.save(synonym);
    }
    async deleteSynonym(synonym) {
        return this.synonymRepository.delete(synonym);
    }
    saveImage(translate, data) {
        return this.textRepository.saveImage(translate, data);
    }
    async saveExtra(translate, extra) {
        translate.extra = extra;
        await this.textRepository.save(translate);
    }
    async updateSentences(translate, sentences) {
        translate.sentences = sentences;
        await this.textRepository.save(translate);
    }
    async saveDescription(translate, description) {
        translate.description = description;
        await this.textRepository.save(translate);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", TextRepository)
], TextService.prototype, "textRepository", void 0);
__decorate([
    Inject(),
    __metadata("design:type", SynonymRepository)
], TextService.prototype, "synonymRepository", void 0);
TextService = __decorate([
    Service()
], TextService);
export default TextService;
//# sourceMappingURL=text.service.js.map