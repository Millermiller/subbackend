import { __decorate, __metadata } from "tslib";
import { Inject } from 'vue-typedi';
import PageService from '@/Scandinaver/Pages/Application/page.service';
import Page from '@/Scandinaver/Pages/Domain/Page';
import Vue from 'vue';
import Component from 'vue-class-component';
let ListPageComponent = class ListPageComponent extends Vue {
    constructor() {
        super(...arguments);
        this.pages = [];
        this.newpage = new Page();
        this.search = '';
        this.loading = false;
    }
    mounted() {
        this.load();
    }
    async load() {
        this.loading = true;
        this.pages = await this.service.getAll();
        this.loading = false;
    }
    add() {
        this.$router.push({ name: 'Добавить страницу' });
    }
    async remove(row) {
        if (confirm('Удалить?')) {
            await this.service.destroy(row);
            this.$snackbar.open('Страница удалена!');
            await this.load();
        }
    }
    edit(row) {
        this.$router.push({ name: 'Страница', params: { id: row.id } });
    }
    async find() {
        this.pages = await this.service.search(this.search);
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PageService)
], ListPageComponent.prototype, "service", void 0);
ListPageComponent = __decorate([
    Component({
        components: {},
    })
], ListPageComponent);
export default ListPageComponent;
//# sourceMappingURL=list-page.component.js.map