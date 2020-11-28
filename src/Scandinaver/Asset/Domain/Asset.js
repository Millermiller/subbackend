import { __decorate, __metadata } from "tslib";
import { Card } from '@/Scandinaver/Asset/Domain/Card';
import { Type } from 'class-transformer';
import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity';
export class Asset extends Entity {
    getId() {
        return this.id;
    }
}
__decorate([
    Type(() => Card),
    __metadata("design:type", Array)
], Asset.prototype, "cards", void 0);
//# sourceMappingURL=Asset.js.map