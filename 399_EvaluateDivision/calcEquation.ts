import { UnionFind } from "../common/DisjoinSet/UnionFind2";

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let set: UnionFind = new UnionFind(equations.length * 2);
    let map: Map<string, number> = new Map<string, number>();

    let id = 0;
    for (let i = 0; i < equations.length; i++) {
        const equation = equations[i];
        let var1 = equation[0];
        let var2 = equation[1];
        
        if(map.has(var1) == false)
        {
            map.set(var1, id);
            id++;
        }

        if(map.has(var2) == false)
        {
            map.set(var2, id);
            id++;
        }

        set.union(map.get(var1) as number, map.get(var2) as number, values[i]);
    }

    let res: number[] = [];
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        let var1 = query[0];
        let var2 = query[1];

        let id1 = map.get(var1);
        let id2 = map.get(var2);

        if(id1 == null || id2 == null)
        {
            res[i] = -1.0;
        }
        else
        {
            res[i] = set.isConnected(id1, id2);
        }
    }

    return res;
};

export { calcEquation }
