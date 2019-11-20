var sliderWrap = $('.box'),
    sliderWidth = sliderWrap.outerWidth(),  //Ширина любого елемента
    toShow = 4,                               //кількість слайдів
    itemWidth= sliderWidth/toShow,              //ширина одного слайда
    sliderItems = sliderWrap.children(), //отримємо внутрішні елементи дітей
    countSlide = sliderItems.length, //кількість внутрішніх елементів
    itemWraperWidth = itemWidth * countSlide,//
    sliderItemWraper = $('<div class="scarousel_item_wrapper"></div>').width(itemWraperWidth),
    arrowNext = $('<a class="arrow next" href="#"></a>'),
    arrowPrev = $('<a class="arrow prev" href="#"></a>');


sliderItems.addClass('item-scarousel').width(itemWidth);
$.each(sliderItems, function (index, item) {
    $(item).attr('data-item',index);    //добавив всім айтемат дата атрибути
})

sliderItems.wrapAll(sliderItemWraper);    //всі елементи запакує в один!!!
sliderItems.parent().wrap('<div class="scarousel_wrapper" style="width:' + sliderWidth +'"></div>');


sliderItems.closest('.scarousel_wrapper').append(arrowNext, arrowPrev); // звертаємся до всіх елементів що з верху

$.each(sliderWrap.find('.arrow'), function (i, item) {
    item = $(item);
    var prop = item.hasClass('next') ? 'next': 'prev'; //перевіряємо чи є клас
    item.attr('data-go-to', prop);
    item.on('click', goSlider)
});

function goSlider() {
    this.dataset.goTo
}