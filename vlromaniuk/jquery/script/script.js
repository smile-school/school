var sliderWrap = $('.box'),
    sliderWidth = sliderWrap.outerWidth(),
    toShow = 4,
    itemWidth = sliderWidth / toShow,
    sliderItem = sliderWrap.children(),
    countSlide = sliderItem.length,
    itemWrapperWidth = itemWidth * countSlide,
    sliderItemWrap = $('<div class="scarousel_item_wrapper"></div>').width(itemWrapperWidth),
    arrowNext = $('<a class="arrow next" href="#"></a>'),
    arrowPrev = $('<a class="arrow prev" href="#"></a>');
sliderItem.addClass('item-scarousel').width(itemWidth);
$.each(sliderItem, function (index, item) {
    $(item).attr('data-item', index);
});
sliderItem.wrapAll(sliderItemWrap);
sliderItem.parent().wrap('<div class="scarousel_wrapper" style="width: '+ sliderWidth +'"></div>');
sliderItem.closest('.scarousel_wrapper').append(arrowNext, arrowPrev);

$.each(sliderWrap.find('.arrow'), function (i, item) {
    item = $(item);
    var prop = $(item).hasClass('next') ? 'next' : 'prev';
   item.attr('data-go-to', prop);
   item.on('click', goSlider)
});

function goSlider() {
    console.log(this.dataset.goTo)
}
