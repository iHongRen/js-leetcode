/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

let newHead = reverseList(head)
while (newHead) {
    console.log(newHead.val)
    newHead = newHead.next
}
