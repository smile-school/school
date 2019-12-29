(function () {
    var self = this;
    this.pageToTop = 'page-up';
    $('.home' + self.pageToTop).click(function () {
        $('body, html').animate({scrollTop: 0}, 1000);
    });
    var el = document.querySelector('.burger-nav'),
        trigger = document.querySelector('#burger');
    trigger.addEventListener('click', function () {
        el.classList.toggle('visibility');
        trigger.classList.toggle('active');
    }, false);
})();
