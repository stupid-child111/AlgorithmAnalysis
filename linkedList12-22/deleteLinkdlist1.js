//删除链表元素   203   法一、常规解法
/**  
 * @param {ListNode} head  
 * @param {number} val  
 * @return {ListNode}  
 */  
var removeElements = function(head, val) {  
    // 处理头节点可能需要删除的情况  
    while (head !== null && head.val === val) {  
        head = head.next; // 更新头节点  
    }  

    let cur = head; // 从新的头节点开始遍历  

    while (cur !== null && cur.next !== null) {  
        if (cur.next.val === val) {  
            // 如果下一个节点的值等于 val，跳过这个节点  
            cur.next = cur.next.next;  
        } else {  
            // 否则，继续遍历下一个节点  
            cur = cur.next;  
        }  
    }  

    // 返回新的头节点  
    return head;  
}; 