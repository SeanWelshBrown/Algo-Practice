// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array, node = this) {
		array.push(node.name);
		
    if (!node.children.length) return array;
		
		for (let child of node.children) {
			this.depthFirstSearch(array, child);
		}
		
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
