const getPathFromChildToParent = (parent, child) => {
  let currentNode = child;
  const pathArr = [];
  while (currentNode !== parent) {
    const parentElement = currentNode.parentElement;
    const childArr = Array.from(parentElement.children);
    console.log("childArr", childArr);
    pathArr.push(childArr.indexOf(currentNode));
    currentNode = parentElement;
  }
  return pathArr;
};

const getValueFromPath = (parent, path) => {
  let currentNode = parent;
  while (path.length) {
    currentNode = currentNode.children[path.pop()];
  }
  return currentNode;
};

const findNodeValue = () => {
  console.log("1");
  const rootA = document.getElementById("rootA");
  const rootB = document.getElementById("rootB");
  const nodeA = document.getElementById("nodeA");
  const path = getPathFromChildToParent(rootA, nodeA);
  console.log("Path", path);
  return getValueFromPath(rootB, path);
};

console.log(findNodeValue());
