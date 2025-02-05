// Implement a LinkedList using Class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data, first = true) {
    if (this.head == null) {
      this.head = new Node(data);
    } else if (first) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let head = this.head;
      while (head.next !== null) {
        head = head.next;
      }
      head.next = new Node(data);
    }
  }
  deleteLastNode() {
    let head = this.head;
    if (head == null) return;
    if (head.next == null) {
      this.head = null;
    } else {
      while (head.next.next != null) {
        head = head.next;
      }
      head.next = null;
    }
  }
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  middle(){
    let slow = this.head;
    let fast = this.head;
    while () {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }
}