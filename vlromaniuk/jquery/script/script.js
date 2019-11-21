var sliderWrap = $('.box'),
    sliderWidth = sliderWrap.outerWidth(),
    toShow = 4,
    itemWidth = sliderWidth / toShow,
    sliderItem = sliderWrap.children(),
    countSlide = sliderItem.length,
    itemWrapperWidth = itemWidth * countSlide,
    sliderItemWrap = $('<div class="scarousel_item_wrapper"></div>').width(itemWrapperWidth),
    arrowNext = $('<a class="arrow next" href="#"></a>'),
    arrowPrev = $('<a class="arrow prev" href="#"></a>'),
    toSlide = 1,
    delay = 500,
    currentSlide = 0,
    arrow;

sliderItem.addClass('item-scarousel').width(itemWidth);

$.each(sliderItem, function (index, item) {
    $(item).attr('data-item', index);
});

sliderItem.wrapAll(sliderItemWrap);
sliderItemWrap = sliderItem.parent();
sliderItem.parent().wrap('<div class="scarousel_wrapper" style="width: '+ sliderWidth +'"></div>');
sliderItem.closest('.scarousel_wrapper').append(arrowNext, arrowPrev);
arrow = sliderWrap.find('.arrow')
$.each(arrow , function (i, item) {
    item = $(item);
    var prop = $(item).hasClass('next') ? 'next' : 'prev';
   item.attr('data-go-to', prop);
   item.on('click', goSlider)
});
setArrow()

function goSlider() {
    setCurrentSlide($(this).data('goTo') === 'next');
    setArrow()
    go();
    return false;
}
function setCurrentSlide(direction) {
    if (direction){
        currentSlide = (currentSlide != countSlide - toShow) ? ((currentSlide + toSlide) < (countSlide - toShow)) ? currentSlide + toSlide : countSlide - toShow : countSlide - toShow;
    } else {currentSlide = (currentSlide != 0) ? ((currentSlide - toSlide) > 0) ? currentSlide - toSlide : 0 : 0;}
}
function go() {
    sliderItemWrap.animate({'margin-left': -(currentSlide * itemWidth) + 'px'}, delay, function () {
        console.log('sss')
    })
    console.log(sliderItemWrap)
}
function setArrow() {
    if (currentSlide == countSlide - toShow){
        arrow.filter('.next').addClass('disable')
    } else if (currentSlide == 0){
        arrow.filter('.prev').addClass('disable')
    } else{
        arrow.removeClass('disable')
    };
}
