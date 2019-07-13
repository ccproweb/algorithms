// List: Contains
// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. 
// Given a ListNode pointer and a val, return whether val is found in any node in the list.

// SList: Length
// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. 
// Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

// SList: Display
// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

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
}
const array = ['Joy', 'Don', 'Chris', 'Joseph', 'Mary', 'Scott', 'James'];
const list = new List();

for (let index = 0; index < array.length; index++){
    const value = array[index];
    console.log('Adding Value: ' + value);
    list.add(value);
}
list.add('Rudy')
// console.log(list);
list.print();
console.log(list.remove());
list.print();
// console.log(list)
list.print();
// console.log(list)
console.log('Does the Sam value exists? ', list.contains('Sam'));
console.log(list.display());
console.log('Number of nodes: ',list.length());