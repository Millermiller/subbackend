import { __decorate, __metadata } from "tslib";
import { Card } from '@/Scandinaver/Asset/Domain/Card';
import { Container, Inject, Service } from 'typedi';
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity';
import VariantsFromAssetFactory from '@/Scandinaver/Asset/Domain/VariantsFromAssetFactory';
let Question = class Question extends Entity {
    constructor(card, translates) {
        super();
        this.card = card;
        this.variantsFabric = Container.get(VariantsFromAssetFactory);
        this.variants = this.variantsFabric.build(card, translates);
    }
    getId() {
        return this.subject;
    }
    get subject() {
        return this.card.subject;
    }
};
__decorate([
    Inject(),
    __metadata("design:type", VariantsFromAssetFactory)
], Question.prototype, "variantsFabric", void 0);
Question = __decorate([
    Service(),
    __metadata("design:paramtypes", [Card, Array])
], Question);
export default Question;
//# sourceMappingURL=Question.js.map