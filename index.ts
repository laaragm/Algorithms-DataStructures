import { BinarySearchTree } from "./data-structures/binary-search-tree/bst";

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

const result = tree.breadthFirstSearch();
console.log(result);
