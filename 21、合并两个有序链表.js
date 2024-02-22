/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2
    if (list2 === null) return list1

    let head = new ListNode()
    let temp = head
    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1
            list1 = list1.next
        } else {
            temp.next = list2
            list2 = list2.next
        }
        temp = temp.next
    }
    temp.next = list1 || list2
    return head.next
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
let ret = mergeTwoLists(list1, list2)

while (ret) {
    console.log(ret.val)
    ret = ret.next
}
