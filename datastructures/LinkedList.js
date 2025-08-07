
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addToTail(node) {
        // if list is empty, if list is 1
        if (!this.head) {
            this.head = node
        } else {
            while (this.head) {
                this.head = this.head.next
            }
            this.head.next = node
        }
        this.size ++
    }

    removeFromTail
}
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)