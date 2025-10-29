class Node{
     constructor(value){
          this.value = value;
          this.next = null;
     }
}
class SinglyLinkedList{
     constructor(){
          this.head = null
     }
     append(value){
          let newNode = new Node(value);

          if (!this.head){
               this.head = newNode;
               return;
          }
          let current = this.head;

          while (current.next){
               current = current.next
          }
          current.next = newNode;
     }
     printList(){
          let current = this.head;
          let result = ''

          while (current){
               result += current.value + '->';
               current = current.next;
          }
          return result + null
     }
     insertAtBeginning(value){
          let newNode = new Node(value)

          if (!this.head){
               this.head = newNode;
               return;
          }

          newNode.next = this.head;
          this.head = newNode;
     }
     insertAtPosition(pos,value){
          let newNode = new Node(value)

          if (pos === 0 ){
              newNode.next = this.head;
              this.head = newNode;
              return;
          }

          let current = this.head;
          let count = 0;
          let prev = null

          while (current && count < pos ){
               prev = current
               current = current.next
               count++
          }

          if (pos !== count){
               console.log('Out of bounds !');
               return
          }

          newNode.next = current;
          prev.next = newNode;

     }
     findLength(){
          let count = 0;
          let current = this.head;
          
          while (current){
               current = current.next;
               count++
          }
          return count
     }
     insertAtMiddle(value){

          let newNode = new Node(value)
          let slow = this.head;
          let fast = this.head;
          let prev = null;

          while (fast && fast.next){
               prev = slow;
               slow = slow.next;
               fast = fast.next.next
          }

          newNode.next = slow;
          prev.next = newNode;

     }
     reverseList(){
          let current = this.head;
          let prev = null;
          let next = null;
          while (current){
               next = current.next;
               current.next = prev;
               prev = current;
               current = next;
          }
          this.head = prev
     }
}

let sll = new SinglyLinkedList();

[10,20,30].forEach((val)=> sll.append(val));
// console.log(sll.printList());

// console.log('After insert at beginning');
// sll.insertAtBeginning(5);
// console.log(sll.printList());

// console.log('After inserting at index : 2')
// sll.insertAtPosition(2,25)
// console.log(sll.printList());

// console.log('Length of List:',sll.findLength())

// sll.insertAtMiddle(999)
// console.log('After inserting at middle')
// console.log(sll.printList());

console.log('Original List',sll.printList());
sll.reverseList()
console.log('Reverse List',sll.printList())