import { UnionFind } from "../common/DisjoinSet/UnionFind";
import { PriorityQueue } from "../common/PriorityQueue/PriorityQueue";

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    if (pairs.length == 0) {
        return s;
    }

    let len = s.length;
    var set = new UnionFind(len);

    for (let i = 0; i < pairs.length; i++) {
        const i1 = pairs[i][0];
        const i2 = pairs[i][1];
        set.union(i1, i2);
    }

    let charArray = s.split('');
    let map = new Map<number, PriorityQueue>();
    for (let i = 0; i < len; i++) {
        let root = set.find(i);
        if (map.has(root)) {
            let d = map.get(root);
            d?.add(charArray[i], s.charCodeAt(i));
            map.set(root, d);
        }
        else {
            let queue = new PriorityQueue();
            queue.add(charArray[i], s.charCodeAt(i))
            map.set(root, queue);
        }
    }

    let result = ""
    for (let i = 0; i < len; i++) {
        let root = set.find(i);
        result += map.get(root)?.poll();
    }

    return result;
};

export { smallestStringWithSwaps }