import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity';
export default class Translate extends Entity {
    constructor(value) {
        super();
        this.value = value;
    }
    getId() {
        return this.id;
    }
    getValue() {
        return this.value;
    }
}
//# sourceMappingURL=Translate.js.map