import { Comparator } from "../Comparator";

class Heap {
    private heapContainer: number[] = []
    private compare: Comparator

    private constructor(compareFunction: Function) {
        this.heapContainer = [];
        this.compare = new Comparator(compareFunction);
    }

    public getLeftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    public getRightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }

    public getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    public hasParent(childIndex: number): boolean {
        return this.getParentIndex(childIndex) >= 0;
    }

    public hasRightChild(parentIndex: number): boolean {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    public hasLeftChild(parentIndex: number): boolean {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    public leftChild(parentIndex: number): number {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    public rightChild(parentIndex: number): number {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    public parent(childIndex: number): number {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    public swap(a: number, b: number) {
        const tmp = this.heapContainer[a];
        this.heapContainer[a] = this.heapContainer[b];
        this.heapContainer[b] = tmp;
    }

    public peek() {
        if (this.heapContainer.length == 0) {
            return null;
        }
        return this.heapContainer[0];
    }

    public poll(): number | undefined {
        if (this.heapContainer.length === 0) {
            return undefined;
        }

        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }

        const item = this.heapContainer[0];

        this.heapContainer[0] = this.heapContainer.pop() as number;
        this.heapifyDown();

        return item;
    }

    public add(item: number) {
        this.heapContainer.push(item);
        this.heapifyUp();
    }

    public remove(item: number) {
        console.log("todo: implement heap remove")
    }

    public isEmpty(): boolean {
        return this.heapContainer.length == 0;
    }

    public toString(): string {
        return this.heapContainer.toString();
    }

    protected heapifyDown(customStartIndex: number = 0) {
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while (this.hasLeftChild(currentIndex)) {
            if (this.hasRightChild(currentIndex)
                && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    protected heapifyUp(customStartIndex: number) {
        let currentIndex = customStartIndex || this.heapContainer.length - 1;
        while (this.hasParent(currentIndex)
            && this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex]) == false) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    protected pairIsInCorrectOrder(a: number, b: number): boolean {
        throw new Error("You have to implement heap pair comarision method.");
    }
}