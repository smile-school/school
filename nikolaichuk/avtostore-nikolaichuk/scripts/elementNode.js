(function () {
    function createNode() {
        var self = this;
        if (this.element.classes) {
            this.element.classes.split(", ").forEach(function (item) {
                self.node.classList.add(item.toString());
            });
        }
        if (this.element.attributes) {
            for (var key in this.element.attributes) {
                if (this.element.descriptor === "use" || this.element.descriptor === "svg") {
                    this.node.setAttributeNS("http://www.w3.org/1999/xlink", key, this.element.attributes[key]);
                } else {
                    this.node.setAttribute(key, this.element.attributes[key]);
                }
            }
        }
        if (this.element.text) {
            if (this.element.text === "&nbsp;") {
                this.node.innerHTML = this.element.text;
            } else {
                this.node.textContent = this.element.text;
            }
        }
    }

    function getNode() {
        return this.node;
    }

    function ElementNode(element) {
        this.element = element;
        if (this.element.descriptor === "use" || this.element.descriptor === "svg") {
            this.node = document.createElementNS("http://www.w3.org/2000/svg", this.element.descriptor.toString());
        } else {
            this.node = document.createElement(this.element.descriptor.toString());
        }
    }

    ElementNode.prototype.createNode = createNode;
    ElementNode.prototype.getNode = getNode;
    window.ElementNode = ElementNode;
})();
