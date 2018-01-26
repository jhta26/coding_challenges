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
        var nodetoDelete = null
        if (position < 0 || position > length) {
            return 'ERROR'
        }
        while(count<position){
        	beforeNodeToDelete=currentNode
        	nodeToDelete=currentNode.next
        	count++
        }
        beforeNodeToDelete.next=nodeToDelete.next
        deletedNode=nodeToDelete
        nodeToDelete=null
        return deletedNode
    }

}