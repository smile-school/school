(function () {
    function Node(element) {
        var self = this;
        if (element.descriptor === "use" || element.descriptor === "svg") {
            this.node = document.createElementNS("http://www.w3.org/2000/svg", element.descriptor.toString());
        } else {
            this.node = document.createElement(element.descriptor.toString());
        }
        this.createNode = function () {
            if (element.classes) {
                element.classes.split(", ").forEach(function (item) {
                    self.node.classList.add(item.toString());
                });
            }
            if (element.attributes) {
                for (var key in element.attributes) {
                    if (element.descriptor === "use" || element.descriptor === "svg") {
                        self.node.setAttributeNS("http://www.w3.org/1999/xlink", key, element.attributes[key]);
                    } else {
                        self.node.setAttribute(key, element.attributes[key]);
                    }
                }
            }
            if (element.text) {
                self.node.textContent = element.text;
            }
        };

        this.getNode = function () {
            return this.node;
        };

        this.createNode();
    }

    function Tree(nodeTree, parent = null) {
        this.parent = parent;
        this.node = new Node(nodeTree);
        this.node = this.node.getNode();
        if (this.parent) {
            this.parent.appendChild(this.node);
        }
        this.children = nodeTree.children;

        this.run = function () {
            if (this.children) {
                this.children.forEach((item) => new Tree(item, this.node));
            }
        };

        this.getTreeHTML = function () {
            console.log(this.node);
            return this.node;
        };

        this.run();
        console.log(this.node);
    }

    var formRespond = document.querySelector("#form-respond"),
        buttonSubmit = formRespond.querySelector(".submitRespondBtn-js");

    //buttonSubmit.addEventListener("click", parseForm);
    formRespond.addEventListener("submit", addRespond);


    function addRespond(e) {
        e.preventDefault();
        var container = document.querySelector(".responds-wrapper-js"),
            firstRespond = container.querySelector(".respond-js"),
            respond = new Tree(getTreeObject());
        respond = respond.getTreeHTML();
        if (firstRespond) {
            container.insertBefore(respond, firstRespond);
        } else {
            container.appendChild(respond);
        }
    }

    function createElement(descriptor, classes = "", children = null, text = "", attributes = null) {
        var element = {
            descriptor: descriptor,
        };
        if (classes) {
            element.classes = classes;
        }
        if (text) {
            element.text = text;
        }
        if (attributes) {
            element.attributes = attributes;
        }
        if (children) {
            element.children = children;
        }
        return element;
    }

    function createSVG(idSVG, widthSVG, heightSVG) {
        var use =
                createElement("use", undefined, undefined, undefined, {"xlink:href": idSVG}),
            svg =
                createElement("svg", undefined, [use], undefined, {width: widthSVG, height: heightSVG});
        return svg;
    }

    function getTreeObject() {
        var comment =
                createElement("p", undefined, undefined, formRespond.comment.value.trim()),
            userName =
                createElement("span", "respond__heading__author", undefined, formRespond.user.value.trim()),
            likes =
                createElement("span", "respond__heading__likes"),
            currentDate =
                createElement("span", "respond__heading__date", undefined, new Date()),
            respondHeader =
                createElement("div", "respond__heading, clearfix-block", [userName, likes, currentDate]),
            respondText =
                createElement("div", "respond__text", [comment]),
            complaintSVG =
                createSVG("#review-complaint", 17, 17),
            complaintLink =
                createElement("div", "respond__action-links__complaint-link", [complaintSVG]),
            replySVG =
                createSVG("#review-reply-add", 12, 12),
            linkText =
                createElement("span", undefined,undefined, "Ответить"),
            replyLink =
                createElement("a", "respond__action-links__reply-link, link",[replySVG, linkText],undefined,{"href": "#"}),
            respondFooter =
                createElement("div", "respond__action-links, clearfix-block", [replyLink, complaintLink]),
            root =
                createElement("div", "product-responds__respond, respond-js", [respondHeader, respondText, respondFooter]),
            advantages,
            disadvantages;

        if (formRespond.advantages.value.trim()) {
            var textElement =
                    createElement("span", undefined, undefined, "Достоинства: "),
                container = createElement("p");
            advantages =
                createElement("span", undefined, undefined, formRespond.advantages.value.trim());
            container.children = [textElement, advantages];
            respondText.children.push(container);
        }
        if (formRespond.disadvantages.value.trim()) {
            var textElement =
                    createElement("span", undefined, undefined, "Недостатки: "),
                container = createElement("p");
            disadvantages =
                createElement("span", undefined, undefined, formRespond.disadvantages.value.trim());
            container.children = [textElement, disadvantages];
            respondText.children.push(container);
        }
        return root;
    }
})();