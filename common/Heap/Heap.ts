import { Comparator } from "../Comparator";

class Heap {
    protected heapContainer: number[] = []
    protected compare: Comparator

    protected constructor(compareFunction: Function | null) {
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

        this.heapContainer[0] = this.heapContainer.pop() as any;
        this.heapifyDown();

        return item;
    }

    public add(item: any) {
        this.heapContainer.push(item);
        this.heapifyUp(this.heapContainer.length - 1);
    }

    public remove(item: any, comparator: Comparator = this.compare) {
        const numberOfItemsToRemove = this.find(item, comparator).length;

        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration++) {
            const indexToRemove = this.find(item, comparator).pop() as number;
            if (indexToRemove == (this.heapContainer.length - 1)) {
                this.heapContainer.pop();
            }
            else {
                this.heapContainer[indexToRemove] = this.heapContainer.pop() as number;
                const parentItem = this.parent(indexToRemove);
                if (this.hasLeftChild(indexToRemove)
                    && (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))) {
                    this.heapifyDown(indexToRemove);
                }
                else {
                    this.heapifyUp(indexToRemove);
                }
            }
        }
    }

    public find(item: any, comparator: Comparator = this.compare): number[] {
        const foundItemIndices = [];
        for (let index = 0; index < this.heapContainer.length; index++) {
            if (comparator.equal(item, this.heapContainer[index])) {
                foundItemIndices.push(index);
            }

        }
        return foundItemIndices;
    }

    public isEmpty(): boolean {
        return this.heapContainer.length == 0;
    }

    public toString(): string {
        return this.heapContainer.toString();
    }

    /**
     * 下沉操作
     * 如果有子节点，满足条件时，交换位置。
     * @param customStartIndex 
     */
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

    /**
     * 上浮操作
     * 比较当前节点，和其父节点。满足条件时，交换位置。
     * @param customStartIndex 
     */
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

export { Heap }