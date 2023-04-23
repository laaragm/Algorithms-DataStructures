import { BSTNode } from "./node";

export class BinarySearchTree<T> {
    public root: BSTNode<T> | null = null;

    public insert(data: T): BSTNode<T> {
        const newNode = new BSTNode(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root as BSTNode<T>;
            while (true) {
                if (data > (currentNode.data as T)) {
                    // Search for an empty position in the right subtree
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        // Insert node
                        currentNode.right = newNode;
                        break;
                    }
                } else {
                    // Search for an empty position in the left subtree
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        // Insert node
                        currentNode.left = newNode;
                        break;
                    }
                }
            }
        }

        return newNode;
    }

    public lookup(data: T): BSTNode<T> | null {
        if (!this.root) {
            return null;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            if (data > (currentNode.data as T)) {
                // Right
                if (currentNode.right) {
                    currentNode = currentNode.right;
                }
            } else {
                // Left
                if (currentNode.left) {
                    currentNode = currentNode.left;
                }
            }
        }

        return null;
    }

    public remove(data: T): boolean {
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (data < (currentNode.data as T)) {
                // Go Left
                parentNode = currentNode;
                currentNode = currentNode.left as any;
            } else if (data > (currentNode.data as T)) {
                // Go Right
                parentNode = currentNode;
                currentNode = currentNode.right as any;
            } else if (currentNode.data === data) {
                // We have a match
                // Case 1: No right child
                if (!currentNode.right) {
                    if (!parentNode) {
                        // Modify the root node
                        this.root = currentNode.left;
                    } else {
                        // Whenever parent > current value, left child of the current node (node to remove) will become the left child of the parent node
                        if ((parentNode.data as T) > (currentNode.data as T)) {
                            parentNode.left = currentNode.left;
                        }
                        // Whenever parent < current value, left child of the current node (node to remove) will become the right child of the parent node
                        else if ((parentNode.data as T) < (currentNode.data as T)) {
                            parentNode.right = currentNode.left;
                        }
                    }
                }
                // Case 2: Right child of the current node which doesn't have a left child
                else if (!currentNode.right.left) {
                    if (!parentNode) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;
                        // Whenever parent > current value, left child of the parent will be the right child of the current node
                        if ((parentNode.data as T) > (currentNode.data as T)) {
                            parentNode.left = currentNode.right;
                        }
                        // Whenever parent < current value, right child of the parent will be the right child of the current node
                        else if ((parentNode.data as T) < (currentNode.data as T)) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }
                // Case 3: Right child that has a left child
                else {
                    // Find the right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (!parentNode) {
                        this.root = leftmost;
                    } else {
                        if ((currentNode.data as T) < (parentNode.data as T)) {
                            parentNode.left = leftmost;
                        } else if ((currentNode.data as T) > (parentNode.data as T)) {
                            parentNode.right = leftmost;
                        }
                    }
                }

                return true;
            }
        }

        return false;
    }

    public traverse(node: BSTNode<T> | null = null): BSTNode<T> | null {
        if (node) {
            const tree: BSTNode<T> = { data: node.data, left: null, right: null };
            tree.left = node.left === null ? null : this.traverse(node.left);
            tree.right = node.right === null ? null : this.traverse(node.right);

            return tree;
        }

        return null;
    }

    public breadthFirstSearch(): T[] {
        let currentNode = this.root;
        let queue = []; // Keep track of the level we're at in order to access the children
        let result = [];

        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift(); // Returns and removes the first item in the queue
            result.push(currentNode.data);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }

    public depthFirstSearchInOrder() {
        return this.traverseInOrder(this.root, []);
    }

    private traverseInOrder(node: BSTNode<T>, result: T[]) {
        // 1. Traverse the left subtree
        if (node.left) {
            this.traverseInOrder(node.left, result);
        }

        // 2. Visit the root
        result.push(node.data);

        // 3. Traverse the right subtree
        if (node.right) {
            this.traverseInOrder(node.right, result);
        }

        return result;
    }

    public depthFirstSearchPreOrder() {
        return this.traversePreOrder(this.root, []);
    }

    private traversePreOrder(node: BSTNode<T>, result: T[]) {
        // 1. Visit the root
        result.push(node.data);

        // 2. Visit the left subtree
        if (node.left) {
            this.traversePreOrder(node.left, result);
        }

        // 3. Visit the right subtree
        if (node.right) {
            this.traversePreOrder(node.right, result);
        }

        return result;
    }

    public depthFirstSearchPostOrder() {
        return this.traversePostOrder(this.root, []);
    }

    private traversePostOrder(node: BSTNode<T>, result: T[]) {
        // 1. Traverse the left subtree
        if (node.left) {
            this.traversePostOrder(node.left, result);
        }

        // 2. Traverse the right subtree
        if (node.right) {
            this.traversePostOrder(node.right, result);
        }

        // 3. Visit the root
        result.push(node.data);

        return result;
    }
}
