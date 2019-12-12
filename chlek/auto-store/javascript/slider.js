(function () {
    function MySlider(option) {
        var self = this;
        this.options = {
            slideShow: document.querySelector(option.bigImageClass),
            frame: document.querySelector(option.frameClass),
            clickElement: document.querySelector(option.clickElemClass),
            slickWrap: document.querySelector('.slick-wrap'),
            position: 0,
            framePosition: 0
        };

        function build() {
            self.options.clickElement.addEventListener('click', move);
            slickBuild();
        }

        function getElem(selector, all) {
            return (all) ? document.querySelectorAll(selector) : document.querySelector(selector);
        }

        function slickBuild() {
            var buttons = getElem('.but', 'all');
            buttons.forEach(function (item) {
                item.addEventListener('click', slick);
            });
        }

        function slick(event) {
            var direction = (this.classList.contains('prev-js')) ? 1 : -1,
                slick = self.options.slickWrap.style.marginLeft,
                childs = self.options.slickWrap.children,
                maxMarginLeft = -(childs.length * (childs[0].clientWidth + 10) - (childs[0].clientWidth + 10) * 4) + 'px',
                maxLeftPosit = (childs[0].clientWidth + 10) * 3 + 'px';

            if (this.classList.contains('prev-js') && (!slick || slick === '0px') && self.options.framePosition === 0) {
                return;
            } else if (this.classList.contains('next-js') && (slick === maxMarginLeft)) {
                return;
            } else if (this.classList.contains('prev-js') && (!slick || slick !== '0px') && self.options.framePosition === 0) {
                self.options.position += (event) ? direction * (+childs[0].clientWidth + 10) : 0;
                self.options.slickWrap.style.marginLeft = self.options.position + 'px';
                changeSlide(event);
                return;
            } else if (this.classList.contains('prev-js') && maxLeftPosit === self.options.frame.style.left && self.options.frame.style.left !== '0px') {
                self.options.framePosition += direction * (+childs[0].clientWidth + 10);
            } else if (maxLeftPosit === self.options.frame.style.left) {
                self.options.position += (event) ? direction * (+childs[0].clientWidth + 10) : 0;
                self.options.slickWrap.style.marginLeft = self.options.position + 'px';
            }
            self.options.framePosition += (event && maxLeftPosit !== self.options.frame.style.left) ? direction * (+childs[0].clientWidth + 10) : 0;
            self.options.frame.style.left = -self.options.framePosition + 'px';
            changeSlide(event);
        }

        function changeSlide(event) {
            var imageName = self.options.slideShow.src.split('/').slice(-1),
                image = document.querySelector('[data-image = "' + imageName[0] + '"]'),
                imageNewName;
            imageNewName = (event.target.classList.contains('next-js')) ?
                image.nextElementSibling : image.previousElementSibling;
            show(imageNewName);
        }

        function move(event) {
            if (event.target.tagName === 'IMG') {
                self.options.frame.style.left = event.target.offsetLeft + 'px';
                self.options.framePosition = -event.target.offsetLeft;
                show(event.target);
                return self.options.framePosition;
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
