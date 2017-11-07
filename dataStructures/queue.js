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
}

Queue.prototype.dequeue = () => {
  if (!this.head) throw new Error('no head to dequeue')
  let value = this.head.value
  this.head = this.head.next
  return value
}

Queue.prototype.peek = () => {
  if (!this.head) throw new Error('no head at which to peek')
  return this.head.value
}