(function () {

    /*var tree = [{
        descriptor: "div",
        classes: "product-responds__respond, respond-js",
        children: [
            {
                descriptor: "div",
                classes: "respond__heading, clearfix-block",
                children: [
                    {
                        descriptor: "span",
                        classes: "respond__heading__author",
                        text: "Аноним Анонимович",
                    },
                    {
                        descriptor: "span",
                        classes: "respond__heading__trade-status",
                    },
                    {
                        descriptor: "span",
                        classes: "respond__heading__likes",
                    },
                    {
                        descriptor: "span",
                        classes: "respond__heading__date",
                        text: "15 ноября 2019",
                    }
                ]
            },
            {
                descriptor: "div",
                classes: "respond__text",
                children: [
                    {
                        descriptor: "p",
                        text: "Lorem ipsum dolor sit amet, consectetur",
                    },
                    {
                        descriptor: "p",
                        text: "Lorem ipsum dolor sit amet",
                        children:[
                            {
                                descriptor: "span",
                                text: "Достоинства: ",
                            },
                        ]
                    },
                    {
                        descriptor: "p",
                        text: "reprehenderit sed, soluta tempora,",
                        children: [
                            {
                                descriptor: "span",
                                text: "Недостатки: ",
                            },
                        ]
                    },
                ]
            },
            {
                descriptor: "div",
                classes: "respond__action-links, clearfix-block",
            }
        ],
    }];*/

    function Node(element) {
        var self = this;
        this.node = document.createElement(element.descriptor.toString());

        this.createNode = function () {
            if (element.classes) {
                element.classes.split(", ").forEach(function (item) {
                    self.node.classList.add(item.toString());
                });
            }
            if (element.text){
               self.node.textContent = element.text;
            }
        };

        this.getNode = function () {
            return this.node;
        };

        this.createNode();
    }

    function Tree(nodeTree, parent = document.createElement("div")) {
        this.parent = parent;
        this.node = new Node(nodeTree);
        this.node = this.node.getNode();
        this.parent.appendChild(this.node);
        this.children = nodeTree.children;

        this.run = function () {
            if (this.children) {
                this.children.forEach((item) => new Tree(item, this.node));
            }
        };

        this.getTree = function () {
            console.log(this.node);
            return this.node;
        };

        this.run();
        console.log(this.node);
    }

    var formRespond = document.querySelector("#form-respond"),
        buttonSubmit = formRespond.querySelector(".submitRespondBtn-js");

    //buttonSubmit.addEventListener("click", parseForm);
    formRespond.addEventListener("submit", parseForm);

    function parseForm(e) {
        e.preventDefault();
        //console.log(formRespond.comment);
        var tree = [],
             comment = {
                descriptor: "p",
                text: formRespond.elements["comment"].value,
            },
            advantages = {
                descriptor: "p",
                text: formRespond.elements["advantages"].value,
                children:[
                    {
                        descriptor: "span",
                        text: "Достоинства: ",
                    },
                ]
            },
            disadvantages = {
                descriptor: "p",
                text: formRespond.elements["disadvantages"].value,
                children: [
                    {
                        descriptor: "span",
                        text: "Недостатки: ",
                    },
                ]
            },
            userName = {
                descriptor: "span",
                classes: "respond__heading__author",
                text: formRespond.elements["user"].value,
            },
            tradeStatus = {
                    descriptor: "span",
                    classes: "respond__heading__trade-status",
            },
            likes = {
                descriptor: "span",
                classes: "respond__heading__likes",
            },
            currentDate = {
                descriptor: "span",
                classes: "respond__heading__date",
                text: new Date(),
            },
            respondHeadind = {
                descriptor: "div",
                classes: "respond__heading, clearfix-block",
                children: [userName, tradeStatus, likes, currentDate],
            },
            respondText = {
                descriptor: "div",
                classes: "respond__text",
                children: [comment, advantages, disadvantages],
            },
            respondFooter = {
                descriptor: "div",
                classes: "respond__action-links, clearfix-block",
            },
            root = {
                descriptor: "div",
                classes: "product-responds__respond, respond-js",
                children: [respondHeadind, respondText, respondFooter],
            };
        tree.push(root);
        var container = document.querySelector(".responds-content_left");
        var firstRespond = container.querySelector(".respond-js");
        var respond = new Tree(tree[0]);
        respond = respond.getTree();
        container.insertBefore(respond, firstRespond);
    }
})();