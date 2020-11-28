import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/Scandinaver/Core/Infrastructure/store';
let AudioWidgetComponent = class AudioWidgetComponent extends Vue {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    get audiofiles() {
        return store.getters.audioCount;
    }
};
AudioWidgetComponent = __decorate([
    Component({
        components: {},
    })
], AudioWidgetComponent);
export default AudioWidgetComponent;
//# sourceMappingURL=audio-widget.component.js.map