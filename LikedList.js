// class LikedListNode{
//     constructor(value, next){
//         this.value=value;
//         this.next=next;
//         // add for double link list
//         this.prevous=null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.length = 0;
//         this.tail=null;
//     }

//     insertAtHead(data){
//       const newNode = new LikedListNode(data,this.head);
//       this.head  = newNode;
//       this.length++;
//     }
//     size(){
//       return this.length;
//     }
//     clear(){
//         this.head = null;
//         this.length = 0;
//     }
//     firstLast(){
//         let current = this.head;
//         console.log(current)
//     }
//     getLast(){
//         let current = this.head;
//         while(current.next){
//             current = current.next;
//         }
//         return current;
//     }
// }


// LinkedList.fromValues = function(...values){
//     const ll = new LinkedList();
//     for(let i= values.length-1;i>=0;i--){
//         ll.insertAtHead(values[i]);
//     }
//     return ll;
// }
// module.exports = LinkedList;


// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//         this.prev=null;
//     }
// }

// class DoublyLikedList{
//     constructor(){
//         this.head = null;
//         this.tail=null;
//         this.length = 0;
//     }
//     push(value){
//         // create  a new node
//         const newNode = new Node(value);
//         if(!this.length){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return newNode;
//     }
// }

// const dl= new DoublyLikedList();
// dl.push(10);
// dl.push(20);
// console.log(dl)


// class CircularLinkedList{
//      size = 0;
//      head=null;
//      tail=null;
//      get size(){
//          return this.size;
//      }

//      push(){
//          const element = this.createElement(item);
//          if(this.head===null){
//              this.head = element;
//          }
//      }
// }


// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }

// class DoubleLikedList{
//     constructor(){
//         this.head = null;
//         this.tail=null;
//         this.length = 0;
//     }
//     push(value){
//         // make a new node
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail=newNode;
//         }
//         this.length++;
//     }
//     // remove from the list
//     pop(){
//         if(!this.tail){
//             return null;
//         }
//         // get removed node
//         const poppedNode = this.tail;
//         // check if there is only one node
//         if(this.head !==this.tail){
//             const newTail = this.getNodeAtIndex(this.length-2);
//             newTail.next = null;
//             this.tail = newTail;

//         }
//     }
// }

// const dl= new DoubleLikedList();
// dl.push(40)
// dl.push(50)

// console.log(dl)

//DOUBLY LINKED
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    pop() {
      //in case of empty list
      if (this.length === 0) {
        return false;
      }
      //get popped node
      const popped = this.tail;
      //save newTail to a variable (could be null)
      const newTail = this.tail.prev;
      //if newTail is not null
      if (newTail) {
        //sever connection to popped node
        newTail.next = null;
        //sever connection from popped node
        this.tail.prev = null;
        //in case of 1 length list
      } else {
        //make sure to edit head in case newTail is null
        this.head = null;
      }
      //assign new tail (could be null)
      this.tail = newTail;
      // subtract length
      this.length--;
  
      return popped;
    }
  
    shift() {
      //in case list is empty
      if (!this.head) {
        return false;
      }
      //save shifted node to variable
      const shiftedNode = this.head;
      //make the new head the next (might be null)
      const newHead = this.head.next; //might be null
      //if list is more than 1
      if (this.head !== this.tail) {
        newHead.prev = null;
        shiftedNode.next = null;
      } else {
        this.tail = null;
      }
      this.head = newHead;
      this.length--;
      return shiftedNode;
    }
  
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
  
    insertAtIndex(index, val) {
      //if index doesn't exist
      if (index > this.length) {
        return false;
      }
      if (index === 0) {
        this.unshift(val);
      } else if (index === this.length) {
        this.push(val);
      } else {
        const newNode = new Node(val);
        const after = this.accessAtIndex(index);
        const before = after.prev;
        after.prev = newNode;
        before.next = newNode;
        newNode.next = after;
        newNode.prev = before;
        this.length++;
      }
      return this;
    }
  
    removeAtIndex(index) {
      let removedNode;
      if (index >= this.length) {
        return false;
      }
      if (index == 0) {
        removedNode = this.shift();
      } else if (index == this.length - 1) {
        removedNode = this.pop();
      } else {
        removedNode = this.getNodeAtIndex(index);
        const after = removedNode.next;
        const before = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        before.next = after;
        after.prev = before;
        this.length--;
      }
      return removedNode;
    }
  
    getNodeAtIndex(index) {
      if (index >= this.length || index < 0) {
        return false;
      }
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentNode;
    }
  
    setNodeAtIndex(index, val) {
      const foundNode = this.getNodeAtIndex(index)
      if(foundNode){
          foundNode.value = val
          return foundNode;
      }
      return null;
    }
    
    printList() {
      console.log(list)
      if(this.head){
        let current = this.head;
        while (current.next) {
          console.log(current);
          current = current.next;
        }
        console.log(current);
      } else {
        console.log("empty list")
      }
    }
  }