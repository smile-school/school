(function () {
    function MySlider(option) {
        var self = this;
        this.options = {
            slideShow: document.querySelector(option.bigImageClass),
            frame: document.querySelector(option.frameClass),
            clickElement: document.querySelector(option.clickElemClass),
        };

        function build() {
            self.options.clickElement.addEventListener('click', move);
        }

        function move(event) {
            if (event.target.tagName === 'IMG') {
                self.options.frame.style.left = event.target.offsetLeft + 'px';
                show(event.target);
            }
        }

        function show(elem) {

            self.options.slideShow.classList.add('active');
            setTimeout(function () {
                self.options.slideShow.src = 'img/' + elem.dataset['image'];
                self.options.slideShow.classList.remove('active');
            }, 250);
        }

        build();

    }

    window.MySlider = MySlider;

})();
