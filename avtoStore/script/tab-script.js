(function () {

    function tab() {
       var tabNav = document.querySelectorAll('.tab'),
            tabContent = document.querySelectorAll('.tab-content'),
           tabName;

        tabNav.forEach(item=>{
            item.addEventListener('click', selectTabNav)
        });
        function selectTabNav() {
            tabNav.forEach(item =>{
                item.classList.remove('white-li');
            });
            this.classList.add('white-li');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }
        function selectTabContent(tabName) {
            tabContent.forEach(item =>{
                item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
            });
        }
    }

    tab();

    function TochSlider() {
        var self = this;
        this.param = {
            globBlock:document.querySelector('.glob-bloc-img'),
            blocClick:document.querySelector('.bloc-click'),
            elem : document.querySelector('.slider-wrap')
        };

        function elemClick() {
            self.param.elem.addEventListener('click',function (event) {
                if (event.target.tagName === 'IMG'){
                    self.param.blocClick.style.left = event.target.offsetLeft + 'px';
                    leaving(event.target);
                }
            })
        }
        function leaving(element) {
           setTimeout(function () {
               self.param.globBlock.src = './img/'+ element.dataset['slick'];

           }, 300)
        }

        elemClick();
    }
    TochSlider();
})();




















