(function () {
    function setPositiveVote() {
        this.positiveVote.innerHTML = ++this.positiveCount;
        this.setPercent();
    };

    function setNegativeVote() {
        this.negativeVote.innerHTML = ++this.negativeCount;
        this.setPercent();
    };

    function setPercent() {
        var percent = (this.positiveCount * 100) / (this.positiveCount + this.negativeCount);
        if (Math.round(percent) == 0) {
            this.percent.innerHTML = "";
        } else {
            this.percent.innerHTML = Math.round(percent) + " % пользователей считают этот отзыв полезным";
        }
    };

    function CounterVoutes(positiveVote, positiveCount, negativeVote, negativeCount, percent) {
        this.positiveVote = positiveVote;
        this.negativeVote = negativeVote;
        this.positiveCount = positiveCount;
        this.negativeCount = negativeCount;
        this.percent = percent;
    };
    CounterVoutes.prototype.setPositiveVote = setPositiveVote;
    CounterVoutes.prototype.setNegativeVote = setNegativeVote;
    CounterVoutes.prototype.setPercent = setPercent;

    var responds = document.querySelectorAll(".respond-js");
    var counters = [];
    for (var i = 0; i < responds.length; i++) {
        counters[i] = new CounterVoutes(
            responds[i].querySelector(".positiveVote-js"), 0,
            responds[i].querySelector(".negativeVote-js"), 0,
            responds[i].querySelector(".percentVotes-js"));
        var positiveVoteBtn = responds[i].querySelector(".positiveBtn-js"),
            negativeVoteBtn = responds[i].querySelector(".negativeBtn-js");
        positiveVoteBtn.addEventListener("click", counters[i].setPositiveVote.bind(counters[i]));
        negativeVoteBtn.addEventListener("click", counters[i].setNegativeVote.bind(counters[i]));
    };
})();
