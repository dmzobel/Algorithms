Given a Binary Search Tree and two values that are in the tree,
calculate the number of edges between the two values.

Example:

```js
const binarySearchTree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 6,
      left: null,
      right: null
    }
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: null,
      right: null
    },
    right: null
  }
};
```

          8
        /   \
       4     12
     /  \      \
    2    6      10

`calcDistance(binarySearchTree, 2, 6) => 2`

Rough Draft Solution:

```js
function calcDistance(tree, num1, num2) {
  // check if root node is between the two nums or < or >
  // need a right counter and left counter
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  let currentNode = tree;
  while (currentNode.value) {
    if (currentNode.value >= min && currentNode.value < max) {
      const rightEdges = findEdges(currentNode.right, max);
      const leftEdges = findEdges(currentNode.left, min);
      return rightEdges + leftEdges;
    } else if (currentNode.value > max) {
      currentNode = currentNode.left;
    } else if (currentNode.value < min) {
      currentNode = currentNode.right;
    }
  }
}

function findEdges(tree, num) {
  let currentNode = tree;
  let counter = 0;
  while (currentNode.value) {
    if (currentNode.value === num) {
      return counter;
    } else if (currentNode.value > num) {
      currentNode = currentNode.left;
      counter++;
    } else {
      currentNode = currentNode.right;
      counter++;
    }
  }
}
```
