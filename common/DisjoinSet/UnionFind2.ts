class UnionFind {

    private parent: number[] = [];
    private weight: number[] = [];

    constructor(count: number) {
        this.parent = new Array(count);
        this.weight = new Array(count);
        for (let i = 0; i < count; i++) {
            this.parent[i] = i;
            this.weight[i] = 1;
        }
    }

    public union(a: number, b: number, w: number) {
        let rootA = this.find(a);
        let rootB = this.find(b);
        if (rootA == rootB) {
            this.parent[a] = this.parent[b];
            this.weight[a] = w * this.weight[b] / this.weight[a]
            return;
        }
    }

    public find(v: number): number {
        if (this.parent[v] == v) {
            return v;
        }
        else {
            return this.find(this.parent[v]);
        }
    }

    public isConnected(a: number, b: number): number {
        let rootA = this.find(a);
        let rootB = this.find(b);
        if (rootA == rootB) {
            return this.weight[a] / this.weight[b];
        }
        return -1;
    }
}

export { UnionFind }