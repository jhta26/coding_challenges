class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SinglyLinkedlist {
    constructor() {
        this.head = null
        this.length = 0
    }
    add(value) {
        var node = new Node(value)
        var currentNode = this.head
        if (!this.head) {
            this.head = node
            this.length++
                return node
        }
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = node
        this.length++
            return node
    }
    searchIndexAt(position) {
        var currentNode = this.head
        var length = this.length
        var count = 1
        if (position > length || length == 0 || position < 0) {
            return 'ERROR'
        }
        while (count < position) {
            currentNode = currentNode.next
            count++
        }
        return currentNode
    }
    remove(position) {
        var currentNode = this.head
        var length = this.length
        var count = 1
        var beforeNodeToDelete = null
        var deletedNode = null
        var nodeToDelete = null
        if (position < 0 || position > length) {
            return 'ERROR'
        }
        if (position == 1) {
            this.head = currentNode.next
            deletedNode = currentNode
            currentNode = null
            this.length--
                return deletedNode
        }
        while (count < position) {
            beforeNodeToDelete = currentNode
            nodeToDelete = currentNode.next
            currentNode = currentNode.next
            count++
        }
        beforeNodeToDelete.next = nodeToDelete.next
        deletedNode = nodeToDelete
        nodeToDelete = null
        this.length--
            return deletedNode
    }

}

var sll = new SinglyLinkedlist()
sll.add(1)
sll.add(2)
sll.add(5)

console.log(sll.searchIndexAt(1))
// class SinglyLinkedlist {
//     constructor() {
//         this.head = null
//         this.length = 0
//     }
//     add(value) {
//         var node = new Node(val)
//         var current = this.head
//         if (!current) {
//             this.head = node
//             this.length++
//                 return node
//         }
//         while (current.next) {
//             current = current.next
//         }
//         current.next = node
//         this.length++
//             return node
//     }
//     searchIndexAt(position){
//     	var current = this.head
//     	var length = this.length
//     	var count =1
//     	while(count<position){
//     		current = current.next
//     		count++
//     	}
//     	return current
//     }
// }