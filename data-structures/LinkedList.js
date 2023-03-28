class Node {
  constructor(value) {
    this._value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  //  Insert first node
  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  // Insert last node
  insertLast(value) {
    const newNode = new Node(value);
    let current = this._head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this._length++;
  }

  // Insert at index
  insertAt(value, index) {
    if (index > this._length) {
      return;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    if (index === this._length - 1) {
      this.insertLast(value);
      return;
    }

    const newNode = new Node(value);
    let current, prev;

    current = this._head;
    let count = 0;

    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    prev.next = newNode;
    this._length++;
  }

  //Get at index
  getAt(index) {
    let current = this._head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current._value);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //remove at index
  removeAt(index) {
    if (index > this._length) {
      return;
    }
    let current = this._head;
    let prev;
    let count = 0;

    if (index === 0) {
      this._head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
    }

    this._length--;
  }

  //print last data
  printListData() {
    let current = this._head;
    let list = '';
    while (current) {
      list += current._value + '->';
      current = current.next;
    }

    console.log(list);
  }

  //clear list
  clearList() {
    this._head = null;
    this._length = 0;
  }
}
