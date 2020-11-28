import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Inject } from 'vue-typedi';
import TextService from '@/Scandinaver/Translate/Application/text.service';
let SynonymsComponent = class SynonymsComponent extends Vue {
    constructor() {
        super(...arguments);
        this.synonyms = [];
        this.wordId = 0;
        this.newSynonym = '';
        this.activePlaceholder = '';
    }
    setActive(word) {
        this.activePlaceholder = word.getValue();
        this.load(word);
        this.newSynonym = '';
    }
    async load(word) {
        this.synonyms = await this.service.getSynonyms(word);
        this.wordId = word.id;
        this.word = word;
    }
    async add() {
        await this.service.addSynonym(this.word, this.newSynonym);
        await this.load(this.word);
    }
    async remove(synonym) {
        await this.service.deleteSynonym(synonym);
        await this.load(this.word);
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], SynonymsComponent.prototype, "sentences", void 0);
__decorate([
    Inject(),
    __metadata("design:type", TextService)
], SynonymsComponent.prototype, "service", void 0);
SynonymsComponent = __decorate([
    Component({
        components: {},
    })
], SynonymsComponent);
export default SynonymsComponent;
//# sourceMappingURL=synonyms.component.js.map