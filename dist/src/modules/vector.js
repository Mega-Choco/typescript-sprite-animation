export class Vector2D {
    constructor(x, y) {
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
    }
    toString() {
        return `(x: ${this.x.toString()}, y: ${this.y.toString()})`;
    }
    magnitude(v2) {
        return Math.sqrt((this.x * v2.x) + (this.y * v2.y));
    }
}
//# sourceMappingURL=vector.js.map