/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    return add(l1, l2, 0);

    function add(l1, l2, carry) {
        const v1 = (l1 && l1.val) || 0;
        const v2 = (l2 && l2.val) || 0;
        const sum = v1 + v2 + carry;
        const newCarry = Math.floor(sum / 10);
        const val = sum % 10;
        return l1 || l2 || carry
            ? { val, next: add(l1 && l1.next, l2 && l2.next, newCarry) }
            : null;
    }
};

//straight forward to add two element from each list
