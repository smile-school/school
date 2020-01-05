(function () {
    var formReview = document.querySelector("#form-review"),
        buttonSubmit = formReview.querySelector(".submitReviewBtn-js"),
        cancelReviewBtn = formReview.querySelector(".cancelReviewBtn-js"),
        validator = new Validator(formReview);

    buttonSubmit.addEventListener("click", validateForm);
    cancelReviewBtn.addEventListener("click", clearForm);

    function clearForm() {
        service.clearFormFields(formReview);
        validator.removeErrorMessage();
    };

    function validateForm(e) {
        e.preventDefault();
        validator.removeErrorMessage();
        if (validator.isAllRequired('required-js')
            && validator.isValidEmail(formReview.querySelector('.userEmail-js'))) addReview();
    };

    function addReview() {
        var container = document.querySelector(".reviews-wrapper-js"),
            firstReview = container.querySelector(".review-js"),
            treeObject = new ElementTree(getTreeObject()),
            review = treeObject.getTreeHTML();
            voteCounters.push(getCounter(review));
        if (firstReview) {
            container.insertBefore(review, firstReview);
        } else {
            container.appendChild(review);
        }
        getReviewsCount();
        clearForm();
    };

    function getTreeObject() {
        var comment =
                service.createElement("p", undefined, undefined, formReview.comment.value.trim()),
            userName =
                service.createElement("span", "respond__heading__author", undefined, formReview.user.value.trim()),
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
            like =
                service.createElement("i", "far, fa-thumbs-up"),
            likeCounter =
                service.createElement("span", "vote-link_positive__counter, positiveVote-js", undefined, "&nbsp;"),
            dislike =
                service.createElement("i", "far, fa-thumbs-down"),
            dislikeCounter =
                service.createElement("span", "vote-link_negative__counter, negativeVote-js",undefined,"&nbsp;"),
            positiveVote =
                service.createElement("div", "vote-link_positive, positiveBtn-js",[like, likeCounter]),
            negativeVote =
                service.createElement("div", "vote-link_negative, negativeBtn-js", [dislike, dislikeCounter]),
            voteLinksBlock =
                service.createElement("div", "respond__vote-links", [positiveVote, negativeVote]),
            root =
                service.createElement("div", "product-responds__respond, review-js", [respondHeader, respondText, voteLinksBlock]),
            advantages,
            disadvantages;

        if (formReview.ratingStar.value){
            likes.children = service.createRatingStars(+formReview.ratingStar.value).concat(percentCounter);
        }
        if (formReview.advantages.value.trim()) {
            var textElement =
                    service.createElement("span", undefined, undefined, "Advantages: "),
                container = service.createElement("p");
            advantages =
                service.createElement("span", undefined, undefined, formReview.advantages.value.trim());
            container.children = [textElement, advantages];
            respondText.children.push(container);
        }
        if (formReview.disadvantages.value.trim()) {
            var textElement =
                    service.createElement("span", undefined, undefined, "Disadvantages: "),
                container = service.createElement("p");
            disadvantages =
                service.createElement("span", undefined, undefined, formReview.disadvantages.value.trim());
            container.children = [textElement, disadvantages];
            respondText.children.push(container);
        }
        return root;
    };
})();
