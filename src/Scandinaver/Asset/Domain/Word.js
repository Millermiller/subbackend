import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity';
export class Word extends Entity {
    constructor(value) {
        super();
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    getId() {
        return this.id;
    }
}
//# sourceMappingURL=Word.js.map