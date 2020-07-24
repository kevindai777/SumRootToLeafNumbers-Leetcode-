//Objective is to find the numerical sum of all paths from root to leaf

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that finds all paths from root to leaf, then sums
//them all together

let paths = []
    
function dfs(node, path) {
    if (!node) {
        return
    }
    
    path.push(node.val)
    
    if (!node.left && !node.right) {
        paths.push([...path].join(''))
    } else {
        dfs(node.left, path)
        dfs(node.right, path)
    }
    
    path.splice(path.length - 1)
}
dfs(tree.root, [])

let sum = 0
for (let path of paths) {
    sum += Number(path)
}

return sum