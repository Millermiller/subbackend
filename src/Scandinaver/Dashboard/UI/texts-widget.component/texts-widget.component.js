import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/Scandinaver/Core/Infrastructure/store';
let TextsWidgetComponent = class TextsWidgetComponent extends Vue {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    get texts() {
        return store.getters.textsCount;
    }
};
TextsWidgetComponent = __decorate([
    Component({
        components: {},
    })
], TextsWidgetComponent);
export default TextsWidgetComponent;
//# sourceMappingURL=texts-widget.component.js.map