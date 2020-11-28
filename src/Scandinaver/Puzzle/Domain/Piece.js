import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity';
export default class Piece extends Entity {
    constructor(word) {
        super();
        this.word = word;
    }
    getId() {
        return this.word;
    }
}
//# sourceMappingURL=Piece.js.map