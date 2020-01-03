(function () {
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

    function addRespond() {
        var container = document.querySelector(".responds-wrapper-js"),
            firstRespond = container.querySelector(".respond-js"),
            treeObject = new elementTree(getTreeObject()),
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
    window.elementNode = Node;
})();