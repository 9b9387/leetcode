import { Comparator } from "../Comparator";
import { MinHeap } from "../Heap/MinHeap";

class PriorityQueue extends MinHeap {
    private priorities: Map<any, number>;
    constructor() {
        super();
        this.priorities = new Map<any, number>();
        this.compare = new Comparator(this.comparePriority.bind(this))
    }

    public add(item: any, priority: number = 0) {
        this.priorities.set(item, priority);
        super.add(item);
    }

    public remove(item: any, customFindingComparator: Comparator) {
        super.remove(item, customFindingComparator);
        this.priorities.delete(item);
    }

    public changePriority(item: any, priority: number) {
        this.remove(item, new Comparator(this.compareValue));
        this.add(item, priority);
    }

    public findByValue(item: any) {
        return this.find(item, new Comparator(this.compareValue));
    }

    private compareValue(a: any, b: any): number {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    public hasValue(item: any) {
        return this.findByValue(item).length > 0;
    }

    private comparePriority(a: any, b: any): number {
        if (this.priorities.get(a) === this.priorities.get(b)) {
            return 0;
        }
        let pa = this.priorities.get(a) as number
        let pb = this.priorities.get(b) as number
        return pa < pb ? -1 : 1;
    }
}

export { PriorityQueue }