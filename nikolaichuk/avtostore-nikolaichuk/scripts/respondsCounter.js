(function () {
    var openFormBtn = document.querySelector(".openFormBtn-js"),
        pageOverlay = document.querySelector(".page-overlay"),
        tabContainer = document.querySelector(".product__tabs-container"),
        respondsCounters = tabContainer.querySelectorAll(".respondCounter-js"),
        formRespond = pageOverlay.querySelector("#form-respond"),
        cancelRespond = formRespond.querySelector(".cancelRespondBtn-js"),
        responds = tabContainer.querySelectorAll(".respond-js");

    openFormBtn.addEventListener('click', function () {
        pageOverlay.classList.add("show");
    });

    cancelRespond.addEventListener("click", closeForm);

    function closeForm() {
        pageOverlay.classList.remove("show");
        service.clearFormFields(formRespond);
    }

    function getRespondsCount() {
        for (var i = 0; i < respondsCounters.length; i++) {
            respondsCounters[i].innerHTML = document.querySelectorAll(".respond-js").length;
        }
    }

    var counters = [];
    for (var i = 0; i < responds.length; i++) {
        counters[i] = getCounter(responds[i]);
    }

    function getCounter(respond) {
        var counter = new VoteCounter(
            respond.querySelector(".positiveVote-js"), 0,
            respond.querySelector(".negativeVote-js"), 0,
            respond.querySelector(".percentVotes-js")
        );
        var positiveVoteBtn = respond.querySelector(".positiveBtn-js"),
            negativeVoteBtn = respond.querySelector(".negativeBtn-js");
        positiveVoteBtn.addEventListener("click", counter.setPositiveVote.bind(counter));
        negativeVoteBtn.addEventListener("click", counter.setNegativeVote.bind(counter));
        return counter;
    }

    getRespondsCount();
    window.getRespondsCount = getRespondsCount;
    window.closeFormRespond = closeForm;
    window.voteCounters = counters;
    window.getCounter = getCounter;
})();
