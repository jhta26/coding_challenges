// Note: Your solution should have only one BST traversal and O(1) extra space complexity, since this is what you will be asked to accomplish in an interview.

// A tree is considered a binary search tree (BST) if for each of its nodes the following is true:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and the right subtrees must also be binary search trees.
// Given a binary search tree t, find the kth smallest element in it.

// Note that kth smallest element means kth element in increasing order. See examples for better understanding.

function kthSmallestInBST(t, k) {

    function dfs(node) {
        if (node) {
            var current = node
            return [current.value]
            .concat(dfs(current.left))
            .concat(dfs(current.right))
            .filter(a => a || a == 0)
            .sort((a, b) => a - b)

        }
    }
    return dfs(t)[k - 1]
}