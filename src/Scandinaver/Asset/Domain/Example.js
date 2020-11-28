import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity';
export default class Example extends Entity {
    constructor() {
        super(...arguments);
        this.text = '';
        this.value = '';
    }
    getId() {
        return this.id;
    }
}
//# sourceMappingURL=Example.js.map