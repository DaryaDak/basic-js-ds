// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }


  add(data) {
    this.roots = addWithin(this.roots, data);
    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if(node.data === data) {
        return node;
      }
      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }

  }

  has(data) {
    return searchWithin(this.roots, data);

    function searchWithin (node, data) {
      if (!node){
        return false;
      }

      if (node.data == data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
  }

  find(data) {
    return search(this.roots, data);

    function search (node, data) {
      if (!node){
        return null;
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data);
      }
    }
  }

  remove(data) {
    this.roots = removeNode(this.roots, data);

    function removeNode (node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else { 
        if (!node.left && !node.right) { 
          return null;
        } 

        if (!node.left){
          node = node.right; 
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minElRight = node.right;
        while (minElRight.left) {
          minElRight = minElRight.left;
        }
        node.data = minElRight.data;
        node.right = removeNode(node.right, minElRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.roots) {
      return;
    }

    let node = this.roots;
    while (node.left) {
      node = node.left;
    }

    return node.data;
   
  }

  max() {
    if (!this.roots) {
      return
    }

    let node = this.roots;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}
