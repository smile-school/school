var gallery = $('.gallery'),
    imageProduct = gallery.find('.img > img'),
    overlay = $('.overla'),
    arrowNext = gallery.find('a.next'),
    arrowPrew = gallery.find('a.prew');
var sliderPrev = $('.preview > .img').smilecarousel({
    delay: 300,
    toShow: 4,
    toSlide: 1,
    fullSizeImg: $('.gallery > .img > img'),
    fullSizeGal: $('.gallery > .img'),
    handlerItem: function (e) {
        var src = e.target.getAttribute('src'),
            index = e.currentTarget.getAttribute('data-item');
        if (src) {
            imageProduct.attr({'src': src, 'data-img': index});
            imageProduct.data('img', index);
            overlay.css('left', e.target.parentElement.offsetLeft);
        }
    },
    overlay: overlay,
});
arrowNext.on('click', galleryGo);
arrowPrew.on('click', galleryGo);
var sliderPrewOptions = sliderPrew.smilecarousel('option'),
    sliderWidth = sliderPrewOptions.sliderWidth,
    sliderItem = sliderPrewOptions.itemWidth,
    sliderCount = sliderPrewOptions.countSlide;
function galleryGo() {
    var slide = '',
        currentSlideCords = sliderItem * imageProduct.data('img'),
        carouselOffset = Math.abs(parseInt(sliderPrev.find('.scarousel_item_wrapper').css('marginLeft')));
    if ( $(this).hasClass('next')) {
        slide = sliderPrev.find('[data-item=' + (+imageProduct.data('img') + 1) + ']');
        if (+imageProduct.data('img') < sliderCount -1) {
            go();
        }
        if ((currentSlideCords -carouselOffset) >= sliderWidth) {
            sliderPrev.smilecarousel('toNext');
        }
    } else {
        slide = sliderPrev.find('[data-item=' + (+imageProduct.data('img') - 1) + ']');
        if (imageProduct.data('img') > 0) {
            go();
        }
        if (currentSlideCords < carouselOffset) {
            sliderPrev.smilecarousel('toPrew');
        }
    }
    function go() {
        imageProduct.attr({'src': slide.find('img').attr('src'), 'data-img': slide.data('item')});
        imageProduct.data('img', slide.data('item'));
        overlay.css('left', slide[0].offsetLeft);
    }
    return false;
}
$('.right-prev').on('click', function () {
    sliderPrev.smilecarousel('toNext')
});
$('.left-prev').on('click', function () {
    sliderPrev.smilecarousel('toPrev')
});
