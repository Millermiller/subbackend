import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/Scandinaver/Core/Infrastructure/store';
let AssetWidgetComponent = class AssetWidgetComponent extends Vue {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    get assets() {
        return store.getters.assetsCount;
    }
};
AssetWidgetComponent = __decorate([
    Component({
        components: {},
    })
], AssetWidgetComponent);
export default AssetWidgetComponent;
//# sourceMappingURL=asset-widget.component.js.map