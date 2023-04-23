// https://leetcode.com/problems/validate-binary-search-tree

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function isValidBST(root: TreeNode | null): boolean {
    const elements = depthFirstSearchInOrder(root, []);
    return isSorted(elements);
}

function depthFirstSearchInOrder(node: TreeNode | null, result: number[]) {
    // 1. Traverse the left subtree
    if (node.left) {
        depthFirstSearchInOrder(node.left, result);
    }

    // 2. Visit the root
    result.push(node.val);

    // 3. Traverse the right subtree
    if (node.right) {
        depthFirstSearchInOrder(node.right, result);
    }

    return result;
}

function isSorted(elements: number[]) {
    for (let i = 0; i < elements.length - 1; i++) {
        if (elements[i] >= elements[i + 1]) {
            return false;
        }
    }

    return true;
}
