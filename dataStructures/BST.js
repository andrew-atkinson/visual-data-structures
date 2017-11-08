class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }

  insert(value) {
    let direction = value <= this.value ? 'left' : 'right'
    if (this[direction]) {
      this[direction].insert(value)
    } else {
      let newNode = new Node(value)
      this[direction] = newNode;
    }
  }

  find(value) {
    let direction = value <= this.value ? 'left' : 'right'
    if (this.value === value) {
      return this
    } else {
      return this[direction] ? this[direction].find(value) : null
    }
  }
}

/* ---------- */

let myBST = new Node(10)
myBST.insert(9);
myBST.insert(12);
myBST.insert(2);
myBST.insert(4);
myBST.insert(18);
console.log(myBST)
myBST.find(9)
myBST.find(7)