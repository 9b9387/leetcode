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
        // a，b有相同的父节点，表示已经连通
        if (rootA == rootB) {
            return;
        }
        // 否则，把a的根节点rootA的父节点指向rootB，使a, b连通
        this.parent[rootA] = rootB;
        // 挪动rootA后，重新计算rootA的权重
        this.weight[rootA] = w * this.weight[b] / this.weight[a]
    }

    public find(v: number): number {
        if (this.parent[v] != v) {
            let origin = this.parent[v];
            this.parent[v] = this.find(this.parent[v]);
            this.weight[v] *= this.weight[origin];
        }
        return this.parent[v];
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