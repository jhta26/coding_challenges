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


function dfs(node) {
    if (node) {
        var current = node
        return [current.show()].concat(dfs(current.left)).concat(dfs(current.right)).filter(a=>a)

    }
}

var bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(1)
bst.insert(11)


console.log(dfs(bst.root))