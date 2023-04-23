// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Time complexity: O(n+m)
export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // Linked List A: length n
    // Linked List B: length m
    const visitedNodes: Set<ListNode> = new Set();

    let current = headA;
    // O(n)
    while (current != null) {
        visitedNodes.add(current);
        current = current.next;
    }

    current = headB;
    // O(m)
    while (current != null) {
        if (visitedNodes.has(current)) {
            return current;
        } else {
            visitedNodes.add(current);
            current = current.next;
        }
    }

    return null;
}
