(function () {
    function buildChildren() {
        if (this.children) {
            this.children.forEach((item) => new Tree(item, this.elementNode));
        }
    }

    function getTreeHTML() {
        console.log(this.elementNode);
        return this.elementNode;
    }

    function Tree(nodeTree, parent = null) {
        this.parent = parent;
        this.elementNode = new ElementNode(nodeTree);
        this.elementNode.createNode();
        this.elementNode = this.elementNode.getNode();
        if (this.parent) {
            this.parent.appendChild(this.elementNode);
        }
        this.children = nodeTree.children;
        this.buildChildren();
    }

    Tree.prototype.buildChildren = buildChildren;
    Tree.prototype.getTreeHTML = getTreeHTML;
    window.elementTree = Tree;
})();
