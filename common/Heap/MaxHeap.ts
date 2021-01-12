import { Heap } from "./Heap";

class MaxHeap extends Heap {
    public constructor()
    {
        super(null)
    }
    pairIsInCorrectOrder(a: number, b: number): boolean {
        return this.compare.greaterThanOrEqual(a, b);
    }
}

export { MaxHeap }