(function () {
    function setCount() {
        this.targetElem.innerHTML = ++this.counts;
    }
    function Counter (elem, count){
        this.targetElem = elem;
        this.counts = count;
    }
    Counter.prototype.setCount = setCount;

    var firstButton = document.querySelector('#first'),
        secondButton = document.querySelector("#second");

    var firstCounter = new Counter(document.querySelector('#block1'), 0),
        secondCounter = new Counter(document.querySelector("#block2"), 0);

    firstButton.addEventListener("click", firstCounter.setCount.bind(firstCounter));
    secondButton.addEventListener("click", secondCounter.setCount.bind(secondCounter));
})();