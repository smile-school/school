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
        this.menuTop = $('.top-menu');
        this.close = 'close';
        this.open = 'open';

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
        // $(document).mouseup(function (e) {
        //   if (!self.menuTop.is(e.target) && self.menuTop.has(e.target).length ===0){
        //       self.menuTop.addClass('close');
        //   }
        // });


    }
    menuChecked();

})();