import { UnionFind } from "../common/DisjoinSet/UnionFind3";

function removeStones(stones: number[][]): number {
    let set = new UnionFind();

    for (let i = 0; i < stones.length; i++) {
        set.union(stones[i][0] + 10000, stones[i][1]);
    }

    return stones.length - set.getCount();
};

export { removeStones }