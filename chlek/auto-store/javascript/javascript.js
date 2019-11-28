(function () {

    var slider = new MySlider(
        {
            bigImageClass: '.show-img',
            frameClass: '.frame',
            clickElemClass: '.images-small',
            events: {
                beforeLoad: function () {
                    console.log("My slider start to load.");
                },
                afterLoad: function () {
                    console.log("My slider is load.");
                },
            }
        }
    );
    var addReview = new AddReview();
    var change = new Change();

    $('.prod-cards').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><img src="./img/prev.png" alt="prev"></div>',
        nextArrow: '<div class="next"><img src="./img/next.png" alt="next"></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            },
        ]
    });
})();
