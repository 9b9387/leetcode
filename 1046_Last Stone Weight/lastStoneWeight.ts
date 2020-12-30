function lastStoneWeight(stones: number[]): number {

    while (stones.length > 1) {
        stones.sort((a, b) => { return a - b });

        let a = stones.pop() as number;
        let b = stones.pop() as number;

        if (b == a) {
            continue;
        }
        else {
            b = Math.abs(a - b)
            stones.push(b);
        }
    }

    return stones.length == 0 ? 0 : stones[0];
};
export { lastStoneWeight }