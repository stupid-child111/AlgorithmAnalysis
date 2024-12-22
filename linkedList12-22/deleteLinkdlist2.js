//删除链表元素   203   法二、虚拟头节点
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function(head, val) {  
    const dummyhead = new ListNode();
    dummyhead.next = head;
    let cur = dummyhead;
    while(cur !== null && cur.next !== null){
        if(cur.next.val === val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return dummyhead.next;
}; 