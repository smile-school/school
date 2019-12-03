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
                if (element.text === "&nbsp;"){
                    self.node.innerHTML = element.text;
                }
                else{
                    self.node.textContent = element.text;
                }
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

    buttonSubmit.addEventListener("click", validateForm);
    //formRespond.addEventListener("submit", addRespond);

    function validateForm(e) {
        e.preventDefault();
        if (true) addRespond();
        else{
            alert("error");
        }
    }

    function isEmptyField(field) {
        return field.value.trim();
    }

    function addRespond(e) {
        var container = document.querySelector(".responds-wrapper-js"),
            firstRespond = container.querySelector(".respond-js"),
            treeObject = new Tree(getTreeObject()),
            respond = treeObject.getTreeHTML();
            voteCounters.push(getCounter(respond));
        if (firstRespond) {
            container.insertBefore(respond, firstRespond);
        } else {
            container.appendChild(respond);
        }
        getRespondsCount();
        closeFormRespond();
    }

    function getTreeObject() {
        var comment =
                service.createElement("p", undefined, undefined, formRespond.comment.value.trim()),
            userName =
                service.createElement("span", "respond__heading__author", undefined, formRespond.user.value.trim()),
            percentCounter =
                service.createElement("span", "respond__heading__likes__percent, percentVotes-js"),
            likes =
                service.createElement("span", "respond__heading__likes", [percentCounter]),
            currentDate =
                service.createElement("span", "respond__heading__date", undefined, service.getCurrentDate()),
            respondHeader =
                service.createElement("div", "respond__heading", [userName, likes, currentDate]),
            respondText =
                service.createElement("div", "respond__text", [comment]),
            complaintSVG =
                service.createSVG("#review-complaint", 17, 17),
            complaintLink =
                service.createElement("div", "respond__action-links__complaint-link", [complaintSVG]),
            replySVG =
                service.createSVG("#review-reply-add", 12, 12),
            linkText =
                service.createElement("span", undefined,undefined, "Ответить"),
            replyLink =
                service.createElement("a", "respond__action-links__reply-link, link",[replySVG, linkText],undefined,{"href": "#"}),
            likeSVG =
                service.createSVG("#positive-vote", "16","16"),
            likeCounter =
                service.createElement("span", "vote-link_positive__counter, positiveVote-js", undefined, "&nbsp;"),
            dislikeSVG =
                service.createSVG("#negative-vote", "16","16"),
            dislikeCounter =
                service.createElement("span", "vote-link_negative__counter, negativeVote-js",undefined,"&nbsp;"),
            positiveVote =
                service.createElement("div", "vote-link_positive, positiveBtn-js",[likeSVG, likeCounter]),
            negativeVote =
                service.createElement("div", "vote-link_negative, negativeBtn-js", [dislikeSVG, dislikeCounter]),
            voteLinksBlock =
                service.createElement("div", "respond__action-links__vote-links, clearfix-block", [positiveVote, negativeVote]),
            respondFooter =
                service.createElement("div", "respond__action-links, clearfix-block", [replyLink, complaintLink, voteLinksBlock]),
            root =
                service.createElement("div", "product-responds__respond, respond-js", [respondHeader, respondText, respondFooter]),
            advantages,
            disadvantages;

        if (formRespond.ratingStar.value){
            likes.children = service.createRatingStars(+formRespond.ratingStar.value).concat(percentCounter);
                //createRatingStars(+formRespond.ratingStar.value).concat(percentCounter);
        }
        if (formRespond.advantages.value.trim()) {
            var textElement =
                    service.createElement("span", undefined, undefined, "Достоинства: "),
                container = service.createElement("p");
            advantages =
                service.createElement("span", undefined, undefined, formRespond.advantages.value.trim());
            container.children = [textElement, advantages];
            respondText.children.push(container);
        }
        if (formRespond.disadvantages.value.trim()) {
            var textElement =
                    service.createElement("span", undefined, undefined, "Недостатки: "),
                container = service.createElement("p");
            disadvantages =
                service.createElement("span", undefined, undefined, formRespond.disadvantages.value.trim());
            container.children = [textElement, disadvantages];
            respondText.children.push(container);
        }
        return root;
    }
})();