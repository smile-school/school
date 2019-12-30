(function () {
    function setCount(element) {
        element.textContent = this.counts + ++element.textContent;
    }
    function Counter (elem, count, rez){
        this.targetElem = elem;
        this.counts = count;
        this.rez = rez;
        for (var i = 0; i < this.targetElem.length; i++){
            this.targetElem[i].addEventListener("click", function () {
                counter.setCount(this);
            });
        }
    }
    Counter.prototype.setCount = setCount;
    var counter = new Counter(document.querySelectorAll('.click-count'), 0, document.querySelector('.click-count    '));
}());