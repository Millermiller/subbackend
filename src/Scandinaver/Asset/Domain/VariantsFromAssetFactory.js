import { __decorate } from "tslib";
import VariantsCollection from '@/Scandinaver/Asset/Domain/VariantsCollection';
import { Service } from 'typedi';
import { TranslatesCollection } from '@/Scandinaver/Translate/Domain/TranslatesCollection';
import Variant from '@/Scandinaver/Asset/Domain/Variant';
let VariantsFromAssetFactory = class VariantsFromAssetFactory {
    constructor() {
        this.count = 4;
    }
    build(payload, data) {
        const variants = new VariantsCollection([]);
        const rightTranslate = payload.translate;
        const rightVariant = new Variant(rightTranslate.value);
        rightVariant.correct = true;
        variants.add(rightVariant);
        const indexes = [];
        const translates = new TranslatesCollection(data);
        translates.remove(rightTranslate);
        while (variants.count() < (translates.count() > this.count ? this.count : translates.count())) {
            const l = Math.floor(Math.random() * translates.count());
            //  if (indexes.indexOf(l) === -1) {
            indexes.push(l);
            const variant = new Variant(translates.get(l).value);
            // console.log(variant)
            variant.correct = false;
            variants.add(variant);
            //  }
        }
        variants.shuffle();
        return variants;
    }
};
VariantsFromAssetFactory = __decorate([
    Service()
], VariantsFromAssetFactory);
export default VariantsFromAssetFactory;
//# sourceMappingURL=VariantsFromAssetFactory.js.map