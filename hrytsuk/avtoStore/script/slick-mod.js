$('.product-slick').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="arrows back"></a>',
    nextArrow: '<a href="#" class="arrows forward"></a>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 421,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});
