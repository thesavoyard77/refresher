// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val) {
    if (!this.root) {
      this.root = new TreeNode(val);
    }
    if (this.val == val) {
      throw new Error("Data already exists in within tree");
    } else if (this.val > val) {
      if (this.left) {
        this.left.insert(val)
      } else {
        this.left = new TreeNode(val)
      }
    } else {
      if (this.right) {
        this.right.insert(val)
      } else {
        this.right = new TreeNode(val)
      }
    }
  };

  search(val) {
    // Fill this in
  }

  preOrderTraversal() {
    // Fill this in
  }

  inOrderTraversal() {
    // Fill this in
  }

  postOrderTraversal() {
    // Fill this in
  }

}

module.exports = BinarySearchTree;