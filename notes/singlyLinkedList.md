#Singly Linked List

1. Create a `Queue` with a `head`; a `Node(value)` with a `next` and `value`.
2. Create a `push` method
- assign a `new Node(value)`
- if the `head` doesn't exist, 
  - assign `this.head` to the `newNode` 
  - else create a `currentNode` pointing to `this.head` and
  - while `currentNode.next` exists `currentNode` points to the `next`
  - then point `currentNode.next` to `newNode`
3. Create an `insert(value, idx)` method
  - assign a `new Node(value)`, `currentNodeIdx` to 0, `currentNode` to the `head`
  - walk the list -> while the `idx` parameter isn't `currentNodeIdx`
    - point `currentNode` to `currentNode.next` -> moves the pointer
    - increment `currentNodeIdx`
  - insertion -> if `idx` is 0:
    - point `newNode.next` at this.head
    - and `this.head` to `newNode`
    - else
    - point `newNode.next` to `currentNode.next`
    - and `currentNode.next` to `newNode`
4. Create a `peek` method
  - point `currentNode` to the `head`
  - while `currentNode` is defined
    - log the values
    - point `currentNode` to `next`
    - increment `nodeNumber`

------

```js
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
  while (idx != currentNodeIdx) {
    currentNode = currentNode.next
    currentNodeIdx++
  }
  // insertion 
  if (idx === 0) {
    newNode.next = this.head
    this.head = newNode
  } else {
    newNode.next = currentNode.next
    currentNode.next = newNode
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
```