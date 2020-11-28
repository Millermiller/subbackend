import { __decorate, __metadata } from "tslib";
import Component from 'vue-class-component';
import Vue from 'vue';
import PlanService from '@/Scandinaver/Plan/Application/plan.service';
import { Inject } from 'vue-typedi';
let PlanModule = class PlanModule extends Vue {
    mounted() {
        this.load();
    }
    async load() {
        this.loading = true;
        this.plans = await this.service.getAll();
        this.loading = false;
    }
    edit(row) {
        this.$router.push({ name: 'Тариф', params: { id: row.id } });
    }
    add() {
        this.$router.push({ name: 'Добавить тариф' });
    }
    async remove(row) {
        if (confirm('Удалить?')) {
            await this.service.destroy(row);
            this.$snackbar.open('Тариф удален!');
            await this.load();
        }
    }
};
__decorate([
    Inject(),
    __metadata("design:type", PlanService)
], PlanModule.prototype, "service", void 0);
PlanModule = __decorate([
    Component({
        components: {},
    })
], PlanModule);
export default PlanModule;
//# sourceMappingURL=plan.module.js.map