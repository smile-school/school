(function () {
    function scrolTop() {
        this.battonTo = $('.scroll-to');

        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 100){
                this.battonTo.fadeIn();
            }
            else {
                this.battonTo.fadeOut();
            }
        });
        this.battonTo.on('click', () =>{
            $('html').animate({scrollTop:0},1000);
        })
    }
    scrolTop();

    function menuChecked() {
        var self = this;
        this.openMenu =  document.querySelector('.btn-drop-down');
        this.closeMenu = document.querySelector('.close-menu-btn');
        this.openFiltr = document.querySelector('.action-filtr');
        this.cloFiltr = document.querySelector('.exit-filtr');
        this.filtr = $('.filter-aside');
        this.menuTop = $('.top-menu');
        this.closeFiltr = '';
        this.hidenFiltr = 'close-filtr';
        this.close = 'close';
        this.open = 'open';
        this.openFil = 'open-filtr';

        this.openMenu.addEventListener('click', function f(e) {
            if (self.menuTop.hasClass( self.close)){
                self.menuTop.removeClass('close');
                self.menuTop.addClass('open');
            }
        });
        this.closeMenu.addEventListener('click', function f(e) {
            if (self.menuTop.hasClass(self.open)){
                self.menuTop.removeClass('open');
                self.menuTop.addClass('close');
            }
        });
        this.openFiltr.addEventListener('click', function (e) {
            e.preventDefault();
           if (self.filtr.hasClass(self.hidenFiltr)){
               self.filtr.removeClass(self.hidenFiltr);
               self.filtr.addClass(self.openFil);
           }
        });
        this.cloFiltr.addEventListener('click',function () {
            if (self.filtr.hasClass(self.openFil)){
                self.filtr.removeClass(self.openFil);
                self.filtr.addClass(self.hidenFiltr);
            }
        });


        $(document).mouseup(function (e) {
            if ($('.top-menu').hasClass(self.open)){
                if (!$('.top-menu').is(e.target) && $('.top-menu').has(e.target).length === 0){
                    $('.top-menu').removeClass('open');
                    $('.top-menu').addClass('close');
                    console.log('as');
                }
            }
            if ($('.filter-aside').hasClass(self.openFil)){
                if (!$('.filter-aside').is(e.target) && $('.filter-aside').has(e.target).length ===0){
                    $('.filter-aside').removeClass(self.openFil);
                    self.filtr.addClass(self.hidenFiltr);
                }
            }

        });


    }
    menuChecked();

})();