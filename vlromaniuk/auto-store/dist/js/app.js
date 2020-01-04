(function() {
    $(document).ready(function(){

        $('ul.tabs-link li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs-link li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
        })

    })
    $(function () {
        $('#accordion').accordion({
            heightStyle: "content"
        })
    })
    $('.menu__btn').on('click', function (e) {
            e.preventDefault()
            $('.menu__box').toggleClass('active')
            $('.menu__btn').css('top', '20px')
        })
})();
(function () {
    // Product card gallery
    var gallery = $('.gallery'),
        imageProduct = gallery.find('.img > img'),
        overlay = $('<div class="overlay"></div>'),
        arrowNext = gallery.find('a.next'),
        arrowPre = gallery.find('a.prev');
    var sliderPrev = $('.preview > .img').smilecarousel({
        delay: 300,
        toShow: 4,
        toSlide: 1,
        handlerItem: function (e) {
            var src = e.target.getAttribute('src'),
                index = e.currentTarget.getAttribute('data-item');
            if (src){
                imageProduct.attr({'src' : src, 'data-img': index});
                imageProduct.data('img', index);
                overlay.css('left', e.target.parentElement.offsetLeft)
            }
        },
        overlay: overlay,
    });
    var sliderPrevOption = sliderPrev.smilecarousel('option'),
        sliderWidth = sliderPrevOption.sliderWidth,
        sliderItem = sliderPrevOption.itemWidth,
        sliderCount = sliderPrevOption.countSlide;
    function galleryGo(){
        var slide = '';
        if($(this).hasClass('next')){
            slide = sliderPrev.find('[data-item=' + (+imageProduct.data('img') + 1) +']');
            if(+imageProduct.data('img') < sliderCount - 1){
                go();
            }
            if ((sliderItem * imageProduct.data('img') -Math.abs(parseInt(sliderPrev.find('.scarousel_item_wrapper').css('marginLeft')))) >= sliderWidth) {
                sliderPrev.smilecarousel('toNext')
            }
        } else {
            slide = sliderPrev.find('[data-item=' + (+imageProduct.data('img') - 1) +']');
            if(imageProduct.data('img') > 0){
                go();
            }
            Math.abs(sliderPrev.find('.scarousel_item_wrapper').css('marginLeft'));
            if(sliderItem * imageProduct.data('img') < Math.abs(parseInt(sliderPrev.find('.scarousel_item_wrapper').css('marginLeft')))){
                sliderPrev.smilecarousel('toPrev');
            }
        }
        function go() {
            imageProduct.attr({'src': slide.find('img').attr('src'), 'data-img': slide.data('item')});
            imageProduct.data('img', slide.data('item'));
            overlay.css('left', slide[0].offsetLeft);
        }
        return false;
    }

    arrowNext.on('click', galleryGo);
    arrowPre.on('click', galleryGo);
    $('.right-prev').on('click', function () {
        sliderPrev.smilecarousel('toNext')
    });
    $('.left-prev').on('click', function () {
        sliderPrev.smilecarousel('toPrev')
    });
    // Featured card gallery
    var slider = $('.containers').smilecarousel({
        delay: 300,
        toShow: 4,
        toSlide: 1,
    });
    $('.right').on('click', function () {
        slider.smilecarousel('toNext');
    });
    $('.left').on('click', function () {
        slider.smilecarousel('toPrev');
    });
})();
(function () {
    $('.fom').on('click', function () {
        $('.overlay').toggleClass('active');
        $('#formElem').toggleClass('active');
    });
    $('.overlay').on('click', function () {
        $('.overlay').toggleClass('active');
        $('#formElem').toggleClass('active');
    });
    $('.close').on('click', function () {
        $('.overlay').toggleClass('active');
        $('#formElem').toggleClass('active');
    });
    $('button#submitForm').on('click', function () {
        $('.overlay').removeClass('active');
        $('#formElem').removeClass('active');
    });
    function Message(name, comment) {
        this.name = ko.observable(name);
        this.comment = ko.observable(comment);
    }
    function Messages() {
        this.name = ko.observable('');
        this.comment = ko.observable('');
        this.messagesList = ko.observableArray([]);

        this.submitForm = function () {
        };
        this.clearForm = function () {
            this.name('');
            this.comment('');
            this.required(false);
        };
        this.addMessage = function () {
            if(this.name() && this.comment()){
                this.messagesList.push(new Message(this.name(), this.comment()));
            }
            console.log(this.comment())
        };
    }
    ko.applyBindings(new Messages());
})();

