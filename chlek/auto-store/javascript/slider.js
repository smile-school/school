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
    function Change (){
        var self = this;
        this.options = {
            showCurrency: document.querySelector('.currency-choice'),
            currencyList: document.querySelector('.all-currency'),
            showLanguage: document.querySelector('.language-choice'),
            languageList: document.querySelector('.all-languages'),
        };
        function build() {
            self.options.currencyList.addEventListener('click', change);
            self.options.languageList.addEventListener('click', change);
        }
        function change(event) {
            console.log(event.target);
        }
        build();
    }
    window.Change = Change;
    window.MySlider = MySlider;

})();
