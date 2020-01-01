(function () {
    function scrolTop() {
       var battonTo = $('.scroll-to');

        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 100){
                battonTo.fadeIn();
            }
            else {
                battonTo.fadeOut();
            }
        });
       battonTo.on('click', () =>{
            $('html').animate({scrollTop:0},1000);
        })
    }
    scrolTop();

    function menuChecked() {
       var openMenu =  $('.btn-drop-down'),
            closeMenu = $('.close-menu-btn'),
            openFiltr = $('.action-filtr'),
            cloFiltr = $('.exit-filtr'),
            filtr = $('.filter-aside'),
            menuTop = $('.top-menu'),
            hidenFiltr = 'close-filtr',
            close = 'close',
            open = 'open',
            openFil = 'open-filtr';

        openMenu.on('click', function () {
            menuTop.toggleClass("close open");
        });
       closeMenu.on('click', function () {
           menuTop.toggleClass("close open");
        });
        openFiltr.on('click', function (e) {
            e.preventDefault();
            filtr.toggleClass('close-filtr open-filtr')
        });
        cloFiltr.on('click',function () {
            filtr.toggleClass('open-filtr close-filtr')
        });


        $(document).mouseup(function (e) {
            if (menuTop.hasClass(open)){
                if (!menuTop.is(e.target) && menuTop.has(e.target).length === 0){
                    menuTop.toggleClass("close open");
                }
            }
            if (filtr.hasClass(openFil)){
                if (!filtr.is(e.target) && filtr.has(e.target).length ===0){
                    filtr.toggleClass('open-filtr close-filtr')
                }
            }

        });


    }
    menuChecked();

})();
