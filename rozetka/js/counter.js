(function () {

    function elemObj() {
        var self = this;
        this.allShopping = document.querySelector('.shopping');
        this.productBuy = document.createElement('span');
        this.countElement = document.createElement('span');
        this.buy = document.querySelectorAll('.buy');
        this.value = 0;

        function build(elem) {
            elem.forEach(function (item, elem) {
                click(item);

            });
            addElem(self.allShopping, self.countElement);
        }

        function click(element) {
            element.addEventListener('click', shoppingCounter);
        }

        function addElem(elem, addedElem) {
            elem.appendChild(addedElem);
            return elem;
        }

        function addElemProd(elem) {
            elem.innerHTML += '<span class=' + "counter-show" + '></span>';
        }

        function shoppingCounter() {
            self.value++;
            addValue(self.allShopping, self.value, addClass(self.allShopping));
            addClass(addElem(this, self.productBuy));
            addElemProd(this);
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
