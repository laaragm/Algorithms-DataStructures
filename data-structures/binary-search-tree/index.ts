import { BinarySearchTree } from "./bst";

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(tree.traverse(tree.root)));
//       9
//    4     20
//  1   6  15  170

console.log(tree.lookup(4));

console.log(tree.remove(9));
console.log(JSON.stringify(tree.traverse(tree.root)));
