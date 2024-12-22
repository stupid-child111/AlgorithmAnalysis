//设计链表 707 真的是折磨   代码有问题  留着以后的自己改吧

var MyLinkedList = function() {
    this.dummyHead = {
     val: 0,
     next: null
    } ;
    this.size = 0;
 };
 
 /** 
  * @param {number} index
  * @return {number}
  */
 // MyLinkedList.prototype.get = function(index) {
 //     if(index < 0 || index >= this.size){
 //         return -1;
 //     }
 //     let cur = this.dummyHead.next;
 //     let i = 0;
 //     while(i < index){
 //         cur = cur.next;
 //         i++;
 //     }
 //     return cur.val;
 // };
 MyLinkedList.prototype.get = function(index) {
     if (index < 0 || index >= this.size) {
         return -1; // 下标无效，返回 -1
     }
     let cur = this.dummyHead.next; // 从虚拟头节点的下一个节点（真正的链表头节点）开始遍历
     let i = 0;
     while (i < index) {
         cur = cur.next; // 沿着链表逐步移动指针
         i++;
     }
     return cur.val; // 返回对应下标节点的值
 };
 
 /** 
  * @param {number} val
  * @return {void}
  */
 MyLinkedList.prototype.addAtHead = function(val) {
     const newNode = {
         val: 0,
         next: this.dummyHead.next
     };
     this.dummyHead.next = newNode;
     this.size++;
 };
 
 /** 
  * @param {number} val
  * @return {void}
  */
 MyLinkedList.prototype.addAtTail = function(val) {
     const newNode ={
         val: 0,
         next:this.dummyHead.next
     };
     let cur = this.dummyHead;
     let i = 0;
     while(cur.next){
         cur = cur.next;
     }
     cur.next = newNode;
     this.size++;
 };
 
 /** 
  * @param {number} index 
  * @param {number} val
  * @return {void}
  */
 MyLinkedList.prototype.addAtIndex = function(index, val) {
     const newNode = {
         val: 0,
         next: null
     };
     if(index < 0 || index > this.size){
         return;
     }
     let cur = this.dummyHead;
     let i = 0;
     while(i < index){
         cur = cur.next;
         i++;
     }
     cur.next = newNode.next;
     cur.next = newNode;
     this.size++;
 };
 
 /** 
  * @param {number} index
  * @return {void}
  */
 MyLinkedList.prototype.deleteAtIndex = function(index) {
     if(index < 0 || index > this.size)
     return;
     const newNode = {
         val: 0,
         next: this.dummyHead.next
     };
     let i = 0;
     let cur = this.dummyHead;
     while(i < index){
         cur = cur.next;
         i++;
     }
     cur.next = cur.next.next;
     this.size--;
 };
 
 /** 
  * Your MyLinkedList object will be instantiated and called as such:
  * var obj = new MyLinkedList()
  * var param_1 = obj.get(index)
  * obj.addAtHead(val)
  * obj.addAtTail(val)
  * obj.addAtIndex(index,val)
  * obj.deleteAtIndex(index)
  */