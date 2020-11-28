import { Entity } from '@/Scandinaver/Core/Domain/Contract/Entity';
import Piece from '@/Scandinaver/Puzzle/Domain/Piece';
import PieceCollection from '@/Scandinaver/Puzzle/Domain/PieceCollection';
export class Puzzle extends Entity {
    getId() {
        return this.id;
    }
    generate() {
        const slices = this.translate.split(' ');
        const pieces = [];
        slices.forEach((item) => {
            pieces.push(new Piece(item));
        });
        this.pieces = new PieceCollection(pieces);
        return this;
    }
    get count() {
        return this.pieces.count();
    }
    setActive(active) {
        this.active = active;
        return this;
    }
}
//# sourceMappingURL=Puzzle.js.map