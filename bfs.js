// Node {
//   Node l; // left child
//   Node r; // right child
//   int v; // value stored in the node
// }
// // Example tree; note the binary tree doesn't have to be complete
//     8     <-- level 0 (root)
//   2   3   <-- level 1
// 4  5    1 <-- level 2
// // Examples:
// PrintLevel(root, 0); -> 8
// PrintLevel(root, 1); -> 2 3
// PrintLevel(root, 2); -> 4 5 1
// // Complete this function
// void PrintLevel(Node root, int level) 
// {
//   // for level 0, print 8
  
//   // for level 1, 2 3
  
//   // for level 2, 4, 5, 1 
// }

class BinarySearchNode {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
    show() {
        return this.value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        if (!this.root) {
            this.root = new BinarySearchNode(val)
        } else {
            var current = this.root
            while (true) {
                if (val < current.show()) {
                    if (current.left) {
                        current = current.left
                    } else {
                        current.left = new BinarySearchNode(val)
                        break
                    }
                } else {
                    if (current.right) {
                        current = current.right
                    } else {
                        current.right = new BinarySearchNode(val)
                        break
                    }
                }
            }
        }
    }
}

var bst = new BinarySearchTree()
bst.insert(5)
bst.insert(10)
bst.insert(1)
bst.insert(4)
bst.insert(6)
bst.insert(9)
bst.insert(11)

function bfs(node, level) {
    queue = [node]
    while (queue.length > 0) {

        if (level == 0) {
            return queue.map(a=>a.show())
        }
        level--
        parent = queue.shift()
        if (parent.left) {
            queue.push(parent.left)
        }
        if (parent.right) {
            queue.push(parent.right)
        }


    }
    return false
}

