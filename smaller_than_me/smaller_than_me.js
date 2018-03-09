// Write

// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

function node(value) {
    return {
        value: value,
        left: null,
        right: null,
        lcount: 0,
        scount: 1
    };
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        var count = 0
        if (this.root === null) {
            this.root = node(value)
            return count
        }
        var current = this.root
        console.log(current)
        while (true) {

            if (value < current.value) {
                current.lcount++
                    if (current.left === null) {
                        current.left = node(value)
                        return count
                    }
                current = current.left
            } else if (value > current.value) {
                count += current.scount + current.lcount

                if (current.right === null) {
                    current.right = node(value)
                    return count
                }

                current = current.right
            } else if (value === current.value) {
                count += current.lcount;
                current.scount++
                    return count
            }
        }
    }
}

function smaller(arr) {
    var tmp = [];
    var b = new BinarySearchTree();
    for (var i = arr.length - 1; i >= 0; i--)
        tmp[i] = (b.insert(arr[i]));
    return tmp;
}

