#QUEUES
- Queues are FIFO (first in first out)
- have `enqueue` methods, 
- have `dequeue` methods,
- can have `peek` methods, `length` methods.
- Queues are (...can be) made of nodes. 

1. Create a `Queue` constructor. Give it a `head` and `tail`, with `null` values
2. Create a `Node(value)` constructor. Give it a `next` and `value`
3. Create an `enqueue(value)` method for the queue constructor's prototype.
    - create a `new Node` with the `value`
    - if the queue has a tail value (i.e. a non-null value), assign the current tail's next to the `newNode` 
    - reassign the `tail` to `newNode` (no test needed)
    - if the queue doesn't have a `head` point the `head` to the `tail`
4. Create a `dequeue()` method for the queue constructor's prototype. 
    - if the `queue` doesn't have a `head` `throw` a `new Error`.
    - assign the `head.value` to a variable (only for returning later, if needed)
    - Move the head along one step by pointing the `head` to the `head.next`
    - return the old `head` variable, if needed.
5. Create a `peek()` method. 
    - check for a head, throw an error if there's no head.
    - return the `head.value`

----

```JS
function Queue() {
  this.head = null
  this.tail = null
}

function Node(value) {
  this.value = value
  this.next = null
}

Queue.prototype.enqueue = (value) => {
  let newNode = new Node(value)
  if (this.tail) this.tail.next = newNode
  this.tail = newNode
  if (!this.head) this.head = this.tail
  console.log('\nNew node: ', newNode)
  Queue.prototype.peek();
}

Queue.prototype.dequeue = () => {
  if (!this.head) throw new Error("no head node to return")
  let result = this.head.value
  this.head = this.head.next
  console.log('\ndequeue: ', result)
  return result
}

Queue.prototype.peek = () => {
  if (!this.head) throw new Error("no head node to peek")
  console.log('this head:', this.head, '\nthis tail: ', this.tail)
}
```
