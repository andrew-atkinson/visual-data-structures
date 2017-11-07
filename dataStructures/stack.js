function Stack() {
  this.top = null
}

function Node(value) {
  if (!value) throw new Error('new Nodes need a value passed to them')
  this.value = value
  this.next = null
}

Stack.prototype.pop = function() {
  if (!this.top) throw new Error('nothing to pop!')
  let returnValue = this.top.value
  this.top = this.top.next
  return returnValue
}

Stack.prototype.push = function(value){
  let newNode = new Node(value)
  newNode.next = this.top
  this.top = newNode
}

Stack.prototype.peek = function(){
  if (!this.top) throw new Error('nothing to peek!')
  return this.top.value
}