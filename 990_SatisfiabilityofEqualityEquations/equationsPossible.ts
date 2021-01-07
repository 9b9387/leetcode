function equationsPossible(equations: string[]): boolean {
    let uf = new UnionFind(26);
    for (let i = 0; i < equations.length; i++) {
        let token = equations[i].split("==");
        let e = true;
        if (token.length < 2) {
            e = false;
        }
        uf.union(equations[i].charCodeAt(0), equations[i].charCodeAt(3), e);
    }

    for (let i = 0; i < equations.length; i++) {
        let token = equations[i].split("==");
        if (token.length < 2) {
            token = equations[i].split("!=");
            if (uf.isConnected(token[0].charCodeAt(0), token[1].charCodeAt(0))) {
                return false;
            }
        }
        else {
            if (uf.isConnected(token[0].charCodeAt(0), token[1].charCodeAt(0)) == false) {
                return false;
            }
        }
    }
    return true;
};

class UnionFind {
    private parent: number[] = [];

    constructor(n: number) {
        this.parent = new Array(n);

        for (let i = 97; i < n + 97; i++) {
            this.parent[i] = i;
        }
    }

    public union(x: number, y: number, b: boolean) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX == rootY || b == false) {
            return;
        }
        else {
            this.parent[rootX] = rootY;
        }
    }

    private find(i: number): number {
        if (this.parent[i] != i) {
            this.parent[i] = this.find(this.parent[i]);
        }
        return this.parent[i];
    }

    public isConnected(x: number, y: number): boolean {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX == rootY) {
            return true;
        }
        return false;
    }
}

export { equationsPossible }