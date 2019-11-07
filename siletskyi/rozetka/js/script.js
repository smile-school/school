(function () {
    function setCount() {
        ++this.counts;
        this.rez.innerHTML = this.counts;
    }
    function Counter (elem, count, rez){
        this.targetElem = elem;
        this.counts = count;
        this.rez = rez;
        this.targetElem.addEventListener("click", function () {
            counter.setCount();
        });
    }
    Counter.prototype.setCount = setCount;
    var counter = new Counter(document.querySelector('.like'), 0, document.querySelector('.like'));
    console.log(counter.counts);
    console.log(counter.targetElem);
}());
