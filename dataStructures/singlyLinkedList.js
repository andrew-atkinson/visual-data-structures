function SinglyLinkedList() {
  this.head = null
}

function Node(value) {
  this.value = value
  this.next = null
}

SinglyLinkedList.prototype.push = function (value) {
  let newNode = new Node(value)
  if (!this.head) {
    this.head = newNode
  } else {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }
}

SinglyLinkedList.prototype.insert = function (value, idx) {
  let newNode = new Node(value),
    currentNodeIdx = 0,
    currentNode = this.head
  // walking to the insertion idx
  while (idx < currentNodeIdx) {
    currentNode = currentNode.next
    currentNodeIdx++
  }
  // insertion 
  if (idx === 0) {
    newNode.next = this.head
    this.head = newNode
  } else {
    newNode.next = currentNode.next
    currentNode = newNode
  }
}

SinglyLinkedList.prototype.peek = function () {
  let nodeNumber = 0,
    currentNode = this.head
  while (currentNode) {
    console.log('This is node number ', nodeNumber, ': ', currentNode)
    currentNode = currentNode.next
    nodeNumber++
  }
}

// -----------

let mySLL = new SinglyLinkedList();
mySLL.push('first');
mySLL.push('second');
mySLL.push('third');
mySLL.push('fourth');
mySLL.insert('fifth', 1);
mySLL.insert('sixth', 3);
mySLL.insert('seventh', 0);
mySLL.peek();