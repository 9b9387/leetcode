import { Heap } from "./Heap";

class MinHeap extends Heap {
    public constructor()
    {
        super(null)
    }
    pairIsInCorrectOrder(a: number, b: number): boolean {
        return this.compare.lessThanOrEqual(a, b);
    }
}

export { MinHeap }