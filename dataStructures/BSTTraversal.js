const Node = require('./BST')

const inOrderTraversal = (node, val) => {
  if (node) {
    inOrderTraversal(node.left)
    if (val === node.val) console.log( "Value found:" + JSON.stringify(node))
    inOrderTraversal(node.right)
  }
}

const preOrderTraversal = (node, val) => {
  if (node) {
    if (val === node.val) console.log( "Value found:" + JSON.stringify(node))
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
  }
}

const postOrderTraversal = (node, val) => {
    postOrderTraversal(node.left)
    postOrderTraversal(node.right)
    if (val === node.val) console.log( "Value found:" + JSON.stringify(node))
}

module.exports = {
  preOrderTraversal, inOrderTraversal, postOrderTraversal
}