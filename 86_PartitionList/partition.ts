import { ListNode } from "../common/ListNode";

function partition(head: ListNode | null, x: number): ListNode | null {
    let small: ListNode = new ListNode(0);
    const smallHead = small;
    let large: ListNode = new ListNode(0);
    const largeHead = large;

    while(head != null)
    {
        if(head.val < x)
        {
            small.next = head;
        }
    }

    large.next = null;
    small.next = largeHead.next;

    return smallHead.next;
};