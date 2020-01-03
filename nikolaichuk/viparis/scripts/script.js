(function () {
    var scrollBtn = document.querySelector('.scroll-js');

    scrollBtn.addEventListener('click', function () {
       window.scrollTo(pageXOffset, 0);
    });

    window.addEventListener('scroll', function () {
        scrollBtn.hidden = ( pageYOffset < document.documentElement.clientHeight );
    });
})();