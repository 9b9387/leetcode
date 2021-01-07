class UnionFind {
    private parent: number[] = [];

    constructor(n: number) {
        this.parent = new Array(n);

        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }

    public union(x: number, y: number)
    {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if(rootX == rootY)
        {
            return;
        }
        else
        {
            this.parent[rootX] = rootY;
        }
    }

    private find(i: number) : number
    {
        if(this.parent[i] != i)
        {   
            this.parent[i] = this.find(this.parent[i]);
        }
        return this.parent[i];
    }

    public isConnected(x: number, y: number) : boolean
    {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if(rootX == rootY)
        {
            return true;
        }
        return false;
    }

}

export { UnionFind }