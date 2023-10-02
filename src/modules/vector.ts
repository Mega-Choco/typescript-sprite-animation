export class Vector2D {
    x: number;
    y: number;
    
    public constructor(x: number, y: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    public toString() {
        return `(x: ${this.x.toString()}, y: ${this.y.toString()})`;
    }

    public magnitude(v2: Vector2D) {
        return Math.sqrt((this.x * v2.x) + (this.y * v2.y));
    }
}