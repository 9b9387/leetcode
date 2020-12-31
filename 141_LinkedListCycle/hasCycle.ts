/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function hasCycle(head: ListNode | null): boolean {
    if (head == null || head.next == null) {
        return false;
    }

    let slow: ListNode = head;
    let fast: ListNode | null = head.next;

    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }

        slow = slow.next as ListNode;
        fast = fast.next.next;
    }
    return true;
};

export { hasCycle }