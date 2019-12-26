(function () {

        this.goTop = $('#go-top');

        $(document).on('scroll', () =>{
            ($(this).scrollTop() >= 250) ? this.goTop.fadeIn() : this.goTop.fadeOut();
        });

        this.goTop.on('click', () =>{
            $('html').animate({scrollTop:0},1000);
        })
})();
