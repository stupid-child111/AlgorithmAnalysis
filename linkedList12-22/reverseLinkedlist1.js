//反转链表 206  法一、双指针法
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    cur = head;
    pre = null;
    while(cur){
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    } 
    return pre;
};