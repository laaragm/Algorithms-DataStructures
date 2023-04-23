import { LinkedList } from "./doubly-linked-list";

const linkedList = new LinkedList();

// Test append
linkedList.append(3);
linkedList.append(10);
linkedList.append(23);
console.log(linkedList.traverse().map((x) => x.data));

// Test prepend
linkedList.prepend(2);
linkedList.prepend(1);
console.log(linkedList.traverse().map((x) => x.data));

// Test insert
linkedList.insert(3, 7);
console.log(linkedList.traverse().map((x) => x.data));

linkedList.insert(0, 0.9);
console.log(linkedList.traverse().map((x) => x.data));

linkedList.insert(7, 65);
console.log(linkedList.traverse().map((x) => x.data));

// Test delete
const first = linkedList.getFirst();
if (first) linkedList.delete(first);
const last = linkedList.getLast();
if (last) linkedList.delete(last);
console.log(linkedList.traverse().map((x) => x.data));

linkedList.deleteAt(1);
linkedList.deleteAt(4);
console.log(linkedList.traverse().map((x) => x.data));
