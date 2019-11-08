(function () {

    function elemObj() {
        var self = this;
        this.allShopping = document.querySelector('.shopping');
        this.countElement = document.createElement('span');
        this.buy = document.querySelectorAll('.buy');
        this.value = 0;

        function build(elem) {
            elem.forEach(function (item, elem) {
                addElemProd(item);
                click(item);
            });

            addElem(self.allShopping, self.countElement);
        }

        function click(element) {
            element.addEventListener('click', shoppingCounter);
            element.addEventListener('click', clickCount(element));
        }

        function addElem(elem, addedElem) {
            elem.appendChild(addedElem);
        }

        function clickCount(element) {
            var counter = 0;
            return function () {
                counter++;
                element.lastChild.innerHTML = counter;
                if (!element.lastChild.classList.contains('active')) element.lastChild.classList.add('active');
            }
        }

        function addElemProd(elem) {
            elem.innerHTML += '<span class=' + "counter-show" + '></span>';
            return elem;
        }

        function shoppingCounter() {
            self.value++;
            addValue(self.allShopping, self.value, addClass(self.allShopping));
        }

        function addValue(elem, val) {
            elem.lastChild.innerHTML = val;
        }

        function addClass(elem) {
            if (elem.classList.contains('counter-show')) return;
            elem.lastChild.classList.add('counter-show');
        }

        build(self.buy);
    }

    elemObj();
})();
