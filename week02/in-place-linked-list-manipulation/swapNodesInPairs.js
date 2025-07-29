class Node {
    constructor(val = null) {
        this.val = val
        this.next = null
    }
}

const swapNodesInPairs = (head) => {
    // create a dummy to simplify edge cases
    let dummy = new Node()
    dummy.next = head
    let prev = head

    while (head && head.next) {
        let first = head
        let second = head.next

        // swap
        prev.next = second
        first.next = second.next
        second.next = first

        // move forward
        prev = first
        head = first.next
    }
    return dummy.next
}
// notes: remember to manipulate pointers! 