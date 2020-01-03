(function () {
    function createNode() {
        if (this.element.classes) {
            this.element.classes.split(", ").forEach(function (item) {
                this.node.classList.add(item.toString());
            },this);
        }
        if (this.element.attributes) {
            for (var key in this.element.attributes) {
                this.node.setAttribute(key, this.element.attributes[key]);
            }
        }
        if (this.element.text) {
            if (this.element.text === "&nbsp;") {
                this.node.innerHTML = this.element.text;
            } else {
                this.node.textContent = this.element.text;
            }
        }
    };

    function getNode() {
        return this.node;
    };

    function ElementNode(element) {
        this.element = element;
        this.node = document.createElement(this.element.descriptor.toString());
    };

    ElementNode.prototype.createNode = createNode;
    ElementNode.prototype.getNode = getNode;
    window.ElementNode = ElementNode;
})();
