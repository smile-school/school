(function () {

    function setCount(spn) {
        spn.innerHTML = this.counts + ++spn.textContent;
    }
    function Counter(elem, count) {
        this.targetElem = elem;
        this.counts = count;
        for (var i = 0; i < elem.length; i++) {
            this.targetElem[i].addEventListener("click", function () {
                if (this.classList.contains('buton-lice')){
                    var spn = this.children[1];
                    counter.setCount(spn);
                }
                if (this.classList.contains('buton-diz')){
                    var spn2 = this.children[1];
                    counter2.setCount(spn2);
                }
            });

        }
    }
    Counter.prototype.setCount = setCount;
    var counter = new Counter(document.querySelectorAll('.buton-lice'), 0);
    var counter2 = new Counter(document.querySelectorAll('.buton-diz'), 0);



})();
