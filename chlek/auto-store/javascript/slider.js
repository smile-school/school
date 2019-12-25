(function () {
    function MySlider(option) {
        var self = this;
        this.options = {
            slideShow: document.querySelector(option.bigImageClass),
            frame: document.querySelector(option.frameClass),
            clickElement: document.querySelector(option.clickElemClass),
            slickWrap: document.querySelector('.slick-wrap'),
            position: 0,
            framePosition: 0,
            counter: 0,
        };

        function build() {
            self.options.clickElement.addEventListener('click', move);
            slickBuild();
            sliderMedia();
        }

        function getElem(selector, all) {
            return (all) ? document.querySelectorAll(selector) : document.querySelector(selector);
        }

        function slickBuild() {
            var ibgButtons = getElem('.big-but', 'all'),
                smallButtons = getElem('.small-but', 'all');
            ibgButtons.forEach(function (item) {
                item.addEventListener('click', bigSlick);
            });
            smallButtons.forEach(function (item) {
                item.addEventListener('click', smallSlick);
            });
        }

        function bigSlick(event) {
            var direction = (this.classList.contains('prev-js')) ? -1 : 1,
                childs = self.options.slickWrap.children,
            maxFrameRight = (childs[0].clientWidth + 10) * 3;
            if (self.options.counter === 0 && direction < 0) return;
            else if (self.options.counter === (childs.length - 1) && direction > 0) return;
            else if (self.options.framePosition < maxFrameRight && direction > 0) {
                self.options.framePosition += direction * (childs[0].clientWidth + 10);
            } else if (self.options.framePosition <= maxFrameRight && direction < 0 && self.options.framePosition > 0) {
                self.options.framePosition += direction * (childs[0].clientWidth + 10);
            } else if ((self.options.framePosition === 0 && direction < 0) || (self.options.framePosition === maxFrameRight && direction > 0)) {
                self.options.position -= direction * (childs[0].clientWidth + 10);
                self.options.slickWrap.style.marginLeft = self.options.position + 'px';
            } else if (self.options.framePosition < 0 || self.options.framePosition > maxFrameRight) {
                self.options.framePosition += direction * (childs[0].clientWidth + 10);
            }
            self.options.frame.style.left = self.options.framePosition + 'px';
            self.options.counter += direction;
            show(childs[self.options.counter]);
        }

        function smallSlick(event) {
            var direction = (this.classList.contains('small-prev-js')) ? 1 : -1,
                childs = self.options.slickWrap.children,
                childShow = 4,
                maxLeft = (childs[0].clientWidth + 10) * (childs.length) - (childs[0].clientWidth + 10) * childShow;
            if (self.options.position === 0 && this.classList.contains('small-prev-js')) return;
            else if (self.options.position === -maxLeft && this.classList.contains('small-next-js')) return;
            self.options.position += direction * (childs[0].clientWidth + 10);
            self.options.slickWrap.style.marginLeft = self.options.position + 'px';
            self.options.framePosition += direction * (childs[0].clientWidth + 10);
            self.options.frame.style.left = self.options.framePosition + 'px';
        }

        function move(event) {
            if (event.target.tagName === 'IMG') {
                for (var key in self.options.slickWrap.children) {
                    if (event.target === self.options.slickWrap.children[key]) {
                        self.options.counter = +key;
                        break;
                    }
                }
                self.options.frame.style.left = event.target.offsetLeft + 'px';
                self.options.framePosition = event.target.offsetLeft;
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

        function sliderMedia() {
            var mediaTablet = window.matchMedia("(max-width: 992px)"),
                mediaMobile = window.matchMedia("(max-width: 500px)");

            mediaTablet.addEventListener('change', reset);
            mediaMobile.addEventListener('change',reset);
        }

        function reset() {
            self.options.position = 0;
            self.options.framePosition = 0;
            self.options.frame.style.left = 0 + 'px';
            self.options.slickWrap.style.marginLeft = 0 + 'px';
        }

        build();
    }

    window.MySlider = MySlider;
})();
