// SList: Back
// Create a function that accepts a ListNode pointer and returns the last value in the list.

// SList: Remove Back
// Create a standalone function that removes the last ListNode in the list and returns the new list.

// SList: Add Back
// Create a function that creates a ListNode with given value and inserts it at end of a linked list.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class List {
    constructor(){
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
    print(){
        console.log('Beginning to print list');
        let current = this.head;
        while (current){
            console.log(current.value);
            current = current.next;
        }
        console.log('Finished printing list!')
    }
    remove(){
        const current = this.head;
        if (current){
            this.head = current.next;
        } 
        return current ? current.value : null;
    }
    contains(findValue){
        let current = this.head;
        while (current){
            if (current.value === findValue){
                return true;
            }
            current = current.next;            
        }
        return false;
    }
    length() {
        let count = 0;
        let current = this.head;
        
        while (current) {
          count++;
          current = current.next;
        }
    
        return count;
      }
    display(){
        let current = this.head;
        while (current){
            console.log('Display current value: ', current.value);
            current = current.next;
        }
    }
    findBack() {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        console.log(current.value, 'is the last node.')
    }
    addToBack(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    removeFromBack() {
        let current = this.head;
        let current_temp = null;
        while (current.next != null) {
            current_temp = current
            current = current.next
        }
        current_temp.next = null;
    }

}
const array = ['Joy', 'Don', 'Chris', 'Joseph', 'Mary', 'Scott', 'James'];
const list = new List();

for (let index = 0; index < array.length; index++){
    const value = array[index];
    console.log('Adding Value: ' + value);
    list.add(value);
}
list.add('Rudy')
list.print();
console.log(list.remove());
list.print();
console.log('Does the Sam value exists? ', list.contains('Sam'));
console.log(list.display());
list.findBack();
list.print();
list.removeFromBack();
list.print();
console.log('Number of nodes: ',list.length());
list.addToBack('Joe')
list.print();
console.log('Number of nodes: ',list.length());