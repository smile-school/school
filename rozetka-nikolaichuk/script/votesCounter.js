(function () {
    function setPositiveVote() {
        this.positiveVote.innerHTML = ++this.positiveCount;
        this.setPercent();
    }

    function setNegativeVote() {
        this.negativeVote.innerHTML = ++this.negativeCount;
        this.setPercent();
    }

    function setPercent() {
        var percent = (this.positiveCount * 100) / (this.positiveCount + this.negativeCount);
        if (Math.round(percent) === 0) {
            this.percent.innerHTML = "";
        } else {
            this.percent.innerHTML = Math.round(percent) + " % пользователей считают этот отзыв полезным";
        }
    }

    function VoteCounter(positiveVote, positiveCount, negativeVote, negativeCount, percent) {
        this.positiveVote = positiveVote;
        this.negativeVote = negativeVote;
        this.positiveCount = positiveCount;
        this.negativeCount = negativeCount;
        this.percent = percent;
    }

    VoteCounter.prototype.setPositiveVote = setPositiveVote;
    VoteCounter.prototype.setNegativeVote = setNegativeVote;
    VoteCounter.prototype.setPercent = setPercent;

    window.VoteCounter = VoteCounter;
})();
