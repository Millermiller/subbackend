import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/Scandinaver/Core/Infrastructure/store';
let UsersWidgetComponent = class UsersWidgetComponent extends Vue {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    get users() {
        return store.getters.usersCount;
    }
};
UsersWidgetComponent = __decorate([
    Component({
        components: {},
    })
], UsersWidgetComponent);
export default UsersWidgetComponent;
//# sourceMappingURL=users-widget.component.js.map