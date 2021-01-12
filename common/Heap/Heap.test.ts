import 'mocha';
import { assert } from 'chai';
import { MaxHeap } from './MaxHeap';
import { MinHeap } from './MinHeap';

describe("Heap", function () {
    it("case1", function () {
        // let heap = new MaxHeap();
        let heap = new MinHeap();
        heap.add(1);
        console.log(heap.toString())
        heap.add(10);
        console.log(heap.toString())
        heap.add(8);
        console.log(heap.toString())
        heap.add(7);
        console.log(heap.toString())
        heap.add(9);
        console.log(heap.toString())
        heap.add(11);
        console.log(heap.toString())
    });
})