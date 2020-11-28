import { __decorate, __metadata } from "tslib";
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Extra from './extra.component/index.vue';
let TooltipComponent = class TooltipComponent extends Vue {
    constructor() {
        super(...arguments);
        this.showedExtra = '';
        this.text = {
            computed: '',
        };
    }
    addExtra() {
        this.extras.push({ text_id: this.item.id });
    }
    removeExtra(id) {
        this.extras.splice(id, 1);
    }
    showExtra(extra) {
        this.showedExtra = extra.extra;
    }
    clearExtra() {
        this.showedExtra = '';
    }
    get output() {
        let computed = '';
        for (let k = 0; k < this.sentences.length; k++) {
            const sentence = this.sentences[k];
            for (let i = 0; i < sentence.length; i++) {
                computed = `${computed} ${sentence[i].word}`;
                if (i == sentence.length - 1) {
                    computed += '. ';
                }
            }
        }
        this.text.computed = computed;
        if (this.showedExtra != '') {
            this.text.computed = this.text.computed.replace(new RegExp(`(^|\\s|>)(${this.showedExtra})([^\\w]|$|<)`, 'gi'), '$1<span class="extra">$2</span>$3');
        }
        return this.text.computed;
    }
    onChange(val) {
        if (val.length) {
            const self = this;
            setTimeout(() => {
                const extras = document.querySelectorAll('.tooltip-extra');
                for (let i = 0; i < extras.length; i++) {
                    extras[i].addEventListener('mouseover', (el) => {
                        self.showedExtra = el.target.getAttribute('data-original-title');
                    }, false);
                    extras[i].addEventListener('mouseout', (el) => {
                        self.showedExtra = '';
                    }, false);
                }
            }, 3000);
        }
    }
};
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "item", void 0);
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "extras", void 0);
__decorate([
    Prop({ required: true }),
    __metadata("design:type", Object)
], TooltipComponent.prototype, "sentences", void 0);
__decorate([
    Watch('extras'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TooltipComponent.prototype, "onChange", null);
TooltipComponent = __decorate([
    Component({
        components: { Extra }
    })
], TooltipComponent);
export default TooltipComponent;
//# sourceMappingURL=tooltip.component.js.map