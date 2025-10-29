
//<-----[ REVERSE SINGLY LINKED LIST ]------>
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
          let newNode = new Node (value);

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

     reverseList(node = this.head){
          if (!node || !node.next){
               return node;
          }

          let newHead = this.reverseList(node.next)

          node.next.next = node;
          node.next = null;

          return newHead
     }
     removeDuplicatesSorted(){
          let current = this.head;

          while(current && current.next){
               if (current.value === current.next.value){
                    current.next = current.next.next;
               }

               current = current.next;
          }
     }

     removeDuplicatesUnsorted(){
          let current = this.head;
          let prev = null;
          let seen = new Set();

          while (current){
              if (!seen.has(current.value)){
                    seen.add(current.value)
                    prev = current
              }else{
               prev.next = current.next
              }

              current = current.next
               
          }
     }
}

let sll = new SinglyLinkedList();
[10,20,30].forEach((val)=> sll.append(val))
console.log(sll.printList())

sll.reverseList()
console.log(sll.printList())
