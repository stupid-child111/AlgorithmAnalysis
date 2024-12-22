//反转链表 206  法二、递归法
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverse(cur,pre){
    if(cur === null){
        return pre;
    }
    let temp = cur.next;
    cur.next = pre;
    return reverse(temp,cur);
 }
var reverseList = function(head) {
   return reverse(head,null);
};