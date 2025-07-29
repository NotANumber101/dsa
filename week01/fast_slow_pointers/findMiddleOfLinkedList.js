//  Middle of the linked list: Given the head of a singly linked list, return the middle node of the linked list.
var middleNode = function(head) {
    let p1 = head, p2 = head
    while (p2 && p2.next) {
        p1 = p1.next
        p2 = p2.next.next
    }
    return p1
};