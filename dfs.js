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
// Input:
// t1: {
//     "value": 5,
//     "left": {
//         "value": 10,
//         "left": {
//             "value": 4,
//             "left": {
//                 "value": 1,
//                 "left": null,
//                 "right": null
//             },
//             "right": {
//                 "value": 2,
//                 "left": null,
//                 "right": null
//             }
//         },
//         "right": {
//             "value": 6,
//             "left": null,
//             "right": {
//                 "value": -1,
//                 "left": null,
//                 "right": null
//             }
//         }
//     },
//     "right": {
//         "value": 7,
//         "left": null,
//         "right": null
//     }
// }
// t2: {
//     "value": 10,
//     "left": {
//         "value": 4,
//         "left": {
//             "value": 1,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 2,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 6,
//         "left": null,
//         "right": {
//             "value": -1,
//             "left": null,
//             "right": null
//         }
//     }
// }

// t1: {
//     "value": 5,
//     "left": {
//         "value": 10,
//         "left": {
//             "value": 4,
//             "left": {
//                 "value": 1,
//                 "left": null,
//                 "right": null
//             },
//             "right": {
//                 "value": 2,
//                 "left": null,
//                 "right": null
//             }
//         },
//         "right": {
//             "value": 6,
//             "left": {
//                 "value": -1,
//                 "left": null,
//                 "right": null
//             },
//             "right": null
//         }
//     },
//     "right": {
//         "value": 7,
//         "left": null,
//         "right": null
//     }
// }
// t2: {
//     "value": 10,
//     "left": {
//         "value": 4,
//         "left": {
//             "value": 1,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 2,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 6,
//         "left": null,
//         "right": {
//             "value": -1,
//             "left": null,
//             "right": null
//         }
//     }
// }
function dfs(node) {
    if (node) {
        
        var current = node
        if(!current.left&&!current.right)return [current.show()]
        if (!current.left) return [current.show()].concat(dfs(current.right))
        if (!current.right) return [current.show()].concat(dfs(current.left))
        
        return [current.show()].concat(dfs(current.left)).concat(dfs(current.right))

    }
}

var bst = new BinarySearchTree()
bst.insert(5)
bst.insert(2)
bst.insert(7)
bst.insert(1)
bst.insert(3)
bst.insert(6)
bst.insert(8)



console.log(dfs(bst.root))