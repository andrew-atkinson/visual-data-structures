#Stacks
- Stacks are LIFO (last in first out)
- have `push` and `pop` methods
- Stacks are (...can be) made of nodes.

1. Create a `Stack` constructor with a `top` property set to `null`
2. Create a `Node(value)` constructor with `value` and `next` properties set to `null`. N.B that next in a stack goes DOWN the stack. 
3. Create a `pop()` method.
  - if there's no `top`, throw a `new Error`
  - create a variable to store `this.top.value`
  - point `this.top` to `this.top.next` (i.e. the next node down the chain or `null` otherwise)
  - return the stored value
4. Create a `push(value)` method
  - create and assign a new Node(value)
  - `newNode.next` is assigned to the current `this.top`
  - `this.top` is reassigned/pointed to `newNode`
5. Create a `peek()` method
  - if there's no `this.top` throw an Error
  - return `this.top.value`

------

```JS
function Stack() {
  this.top = null
}

function Node(value) {
  if (!value) throw new Error('new Nodes need a value passed to them')
  this.value = value
  this.next = null
}

Stack.prototype.pop = function() {
  if (!this.top) throw new Error('no node to pop')
  let returnValue = this.top.value
  this.top = this.top.next
  console.log('pop value: ', returnValue)
  return returnValue
}

Stack.prototype.push = function(value) {
  let newNode = new Node(value)
  newNode.next = this.top
  console.log("new: ",newNode)
  this.top = newNode
  console.log('myStack: ', myStack)
}

Stack.prototype.peek = function() {
  if (!this.top) throw new Error('no node to peek')
  return this.top.value
}

let myStack = new Stack()
myStack.push('first')
myStack.push('second')
myStack.push('third')
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push('fourth')
myStack.push('fifth')
myStack.pop();
```