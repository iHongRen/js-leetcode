/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) return false
    let fast = head.next
    let slow = head
    while (fast && fast.next) {
        if (fast === slow) {
            return true
        }
        fast = fast.next.next
        slow = slow.next
    }
    return false
}
