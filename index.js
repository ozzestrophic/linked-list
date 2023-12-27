class LinkedList {
  constructor(value) {
    //create first node with the value
    this.head = new Node(value);
    this.tail = this.head;
  }
  append(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }

  prepend(value) {
    const oldHead = this.head;
    this.head = new Node(value);
    this.head.next = oldHead;
  }

  size() {
    let counter = 0;
    if (this.head) counter++;
    let node = this.head;

    while (node.next != null) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  head() {
    // awaiting implementation
  }
  tail() {
    // awaiting implementation
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    function lookForPreTail(node) {
      if (node.next.next == null) {
        return node;
      }
      return lookForPreTail(node.next);
    }
    if (this.head.next == null) {
      //remove head without recursion
      this.head = new Node(null);
      this.tail = this.head;
      return;
    }
    // assign new tail
    let preTail = lookForPreTail(this.head);
    preTail.next = null;
    this.tail = preTail;
  }

  contains(value, node = this.head) {
    let found = false;
    if (node && node.value == value) {
      return true;
    }
    if (node && node.next != null) {
      found = this.contains(value, node.next);
    }
    return found;
  }

  find(value, node = this.head, index = 0) {
    if (node && node.value == value) {
      return index;
    }
    if (node && node.next != null) {
      index++;
      index = this.find(value, node.next, index);
    }
    return index;
  }

  toStringConsole(node = this.head) {
    if (!node || !node.value) {
      console.log(null);
      return;
    } else {
      console.log(node.value);
    }

    this.toStringConsole(node.next);
  }

  toString(node = this.head, string = "") {
    if (!node || !node.value) {
      string = string.concat(`null `);
      console.log(string);
      return;
    } else if (node == this.head) {
      string = `( ${node.value} ) `;
    } else {
      string = string.concat(`( ${node.value} ) `);
    }
    string = string.concat(`--> `);
    this.toString(node.next, string);
  }

  insertAt(value, index = 0, node = this.head, prev = this.head) {
    if (index === 0) {
      if (node === this.head) {
        this.prepend(value);
        return;
      }
      const newValue = new Node(value);
      prev.next = newValue;
      newValue.next = node;
      return;
    }
    if (node.next) {
      return this.insertAt(value, index - 1, node.next, node);
    }
  }

  removeAt(index, node = this.head, prev = this.head) {
    if (index === 0) {
      if (node === this.head) {
        this.head = node.next;
        return;
      }
      prev.next = node.next;
      return;
    }
    if (node.next) {
      return this.removeAt(index - 1, node.next, node);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList("thing");
list.append(1);
list.append(2);
list.append(3);
list.append(4);

const list1 = new LinkedList();
list.pop();
