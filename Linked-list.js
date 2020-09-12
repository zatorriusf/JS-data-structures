function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function (node) {
    this.element = node;
    this.next = null;
  };
  this.head = () => {
    return head;
  };
  this.size = () => {
    return length;
  };
  this.indexOf = (node) => {
    let curNode = head;
    let counter = 0;
    while (curNode.next) {
      if (curNode.element === node) {
        return counter;
      }
      curNode = curNode.next;
      counter++;
    }
    return -1;
  };
  this.elementAt = (index) => {
    if (index < 0 || index >= length) {
      return;
    }
    let counter = 0;
    let curElement = head;
    while (counter < index) {
      curElement = curElement.next;
      counter++;
    }
    return curElement.element;
  };
  this.removeAt = (index) => {
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      let removedElement = head;
      head = head.next;
      length--;
      return removedElement.element;
    }
    let counter = 1;
    let prevElement = head;
    let curElement = prevElement.next;

    while (counter < index) {
      prevElement = curElement;
      curElement = prevElement.next;
      counter++;
    }
    let removedElement = curElement;
    prevElement.next = curElement.next;
    length--;
    return removedElement.element;
  };

  this.isEmpty = () => {
    return length === 0;
  };
  this.add = (node) => {
    const newNode = new Node(node);
    if (length === 0) {
      head = newNode;
      length++;
      return head;
    }
    if (length > 0) {
      let curNode = head;
      while (curNode.next) {
        curNode = curNode.next;
      }
      curNode.next = newNode;
      console.log(curNode);
      length++;
    }
  };
  this.remove = (node) => {
    if (node === head.element) {
      head = head.next;
      length--;
      return head;
    }
    let prevNode = head;
    let curNode = head.next;
    while (curNode) {
      if (node === curNode.element) {
        prevNode.next = curNode.next;
        length--;
        return;
      } else {
        prevNode = curNode;
        curNode = curNode.next;
      }
    }
  };
}
