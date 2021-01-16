class UnionFind {
    private parent: Map<number, number>;
    private count: number;

    constructor() {
        this.parent = new Map<number, number>();
        this.count = 0;
    }

    public getCount(): number {
        return this.count;
    }

    public union(x: number, y: number) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX == rootY) {
            return;
        }
        console.log(rootX, rootY)
        this.parent.set(rootX, rootY);
        this.count--;
    }

    public find(x: number): number {
        if (this.parent.has(x) == false) {
            this.parent.set(x, x);
            this.count++;
        }
        if (x != this.parent.get(x)) {
            this.parent.set(x, this.find(this.parent.get(x) ?? 0));
        }

        return this.parent.get(x) ?? 0;
    }
}
export { UnionFind }