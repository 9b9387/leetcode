import { UnionFind } from "../common/DisjoinSet/UnionFInd2";

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let set: UnionFind = new UnionFind(equations.length * 2);

    for (let i = 0; i < equations.length; i++) {
        var x = equations[i][0].charCodeAt(0);
        var y = equations[i][1].charCodeAt(1);
        var w = values[i];
        set.union(x, y, w);        
    }

    let result = []
    for (let i = 0; i < queries.length; i++) {
        var x = equations[i][0].charCodeAt(0);
        var y = equations[i][1].charCodeAt(1);
        result.push(set.isConnected(x, y))
    }
    return result;
};

export { calcEquation }
