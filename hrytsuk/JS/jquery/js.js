var sliderWrap = $('.box'),
    sliderWidth = sliderWrap.outerWidth(),  //Ширина любого елемента
    toShow = 4,                               //кількість слайдів
    itemWidth= sliderWidth/toShow,              //ширина одного слайда
    sliderItems = sliderWrap.children(), //отримємо внутрішні елементи дітей
    countSlide = sliderItems.length, //кількість внутрішніх елементів
    itemWraperWidth = itemWidth * countSlide,//
    sliderItemWraper = $('<div class="scarousel_item_wrapper"></div>').width(itemWraperWidth),
    arrowNext = $('<a class="arrow next" href="#"></a>'),
    arrowPrev = $('<a class="arrow prev" href="#"></a>'),
    toSide = 1,
    delay = 500,
    currentSlide = 0,
    arrows;



sliderItems.addClass('item-scarousel').width(itemWidth);
$.each(sliderItems, function (index, item) {
    $(item).attr('data-item',index);    //добавив всім айтемат дата атрибути
});


sliderItems.wrapAll(sliderItemWraper);    //всі елементи запакує в один!!!
sliderItemWraper = sliderItems.parent();
sliderItems.parent().wrap('<div class="scarousel_wrapper" style="width:' + sliderWidth +'"></div>');


sliderItems.closest('.scarousel_wrapper').append(arrowNext, arrowPrev); // звертаємся до всіх елементів що з верху
arrows = sliderWrap.find('.arrow');
$.each(sliderWrap.find('.arrow'), function (i, item) {
    item = $(item);
    var prop = item.hasClass('next') ? 'next': 'prev'; //перевіряємо чи є клас
    item.attr('data-go-to', prop);
    item.on('click', goSlider)
});
setArrow();
function goSlider() {
    setCurentSlide($(this).data('go-to') === 'next');
    setArrow();
    go();
    return false;
}

function setCurentSlide(direction) {
    if (direction){
        currentSlide = (currentSlide != countSlide - toShow) ?
            (( currentSlide + toSide) < (countSlide - toShow))?
                currentSlide + toShow :
                countSlide - toShow :
                countSlide - toShow;
    }
    else {
        currentSlide = (currentSlide !=0)?
            ((currentSlide - toSide) > 0)?
                currentSlide - toSide :
                0 : 0;
    }
}

function setArrow() {
    if (currentSlide == countSlide - toShow){
        arrows.filter('.next').addClass('disable');
    }
    else if(countSlide == 0){
        arrows.filter('.prev').addClass('disable');
    }
    else{
        arrows.removeClass('disable');
    }
}

function go() {
    sliderItemWraper.animate({"marginLeft" : -(currentSlide * itemWidth) + 'px'}, delay,function () {
        console.log('sss');
    })
}