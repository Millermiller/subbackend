import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import ItemComponent from './item.component/index.vue';
let TranslateComponent = class TranslateComponent extends Vue {
    removeWord(data) {
        this.sentences[data.word.sentence_num].splice(data.index, 1);
    }
    addWord(data) {
        this.sentences[data.word.sentence_num].splice(data.index + 1, 0, {
            orig: '',
            sentence_num: data.word.sentence_num,
            text_id: data.word.text_id,
            word: '',
        });
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], TranslateComponent.prototype, "text", void 0);
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], TranslateComponent.prototype, "cleartext", void 0);
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], TranslateComponent.prototype, "sentences", void 0);
TranslateComponent = __decorate([
    Component({
        components: { ItemComponent }
    })
], TranslateComponent);
export default TranslateComponent;
//# sourceMappingURL=translate.component.js.map