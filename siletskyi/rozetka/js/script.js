(function () {
    function setCount(element) {
        element.innerHTML = this.counts + ++element.textContent;
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
    var counter = new Counter(document.querySelectorAll('.like'), 0, document.querySelector('.like'));
    console.log(counter.counts);
    console.log(counter.targetElem);
}());
