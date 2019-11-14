(function () {

    function hoverEffect() {
        var self = this;
        this.tabs = document.querySelectorAll('.tab-button');
        this.imageContainer = document.querySelector('.laptop-photo');
        this.prewElem = 0;

        function build(elemCollection) {
            elemCollection.forEach(function (item, i, elemCollection) {
                addElemAttribute(item, 'number', i);
                addEvent(item);
            })
        }

        function addEvent(elem) {
            elem.addEventListener('mouseenter', classOperatoins);
            elem.addEventListener('mouseenter', changeUrl);
        }

        function classOperatoins() {
            if(self.prewElem === this.getAttribute('number')) return;
            this.classList.add('active');
            self.tabs[self.prewElem].classList.remove('active');
            self.prewElem = this.getAttribute('number');
        }

        function addElemAttribute(elem, attribute, value) {
            elem.setAttribute(attribute, value);
        }

        function changeUrl() {
            self.imageContainer.src = './img/hp_pavilion-' + this.getAttribute('number') + '.jpg';
        }

        build(self.tabs);
    }

    hoverEffect();

})();
