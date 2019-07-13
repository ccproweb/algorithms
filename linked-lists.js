//List: Add Front
// Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, 
// create a new node, assign it to the list head, and return a pointer to the new head node.


// List: Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, 
// remove the head node and return the new list head node. If list is empty, return null.

// List: Front
// Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! 
// Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null.

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