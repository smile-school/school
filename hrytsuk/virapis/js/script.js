(function () {
    function scrolTop() {
        var battonTo = $('.scroll-to');

        $(window).on('scroll', btnScroll);

        function btnScroll() {
            setTimeout(function () {
                if ($(this).scrollTop() >= 200) {
                    battonTo.fadeIn();
                } else {
                    battonTo.fadeOut();
                }
            }, 10)
        }

        battonTo.on('click', () => {
            $('html').animate({scrollTop: 0}, 1000);
        });
    }

    scrolTop();

    function menuChecked() {
        var openMenu = $('.btn-drop-down'),
            closeMenu = $('.close-menu-btn'),
            openFiltr = $('.action-filtr'),
            cloFiltr = $('.exit-filtr'),
            filtr = $('.filter-aside'),
            menuTop = $('.top-menu'),
            openClos = ['close', 'open'],
            open = 'open',
            openFil = 'open-filtr',
            filtrStn = ['open-filtr', 'close-filtr'];

        openMenu.on('click', function () {
            menuTop.toggleClass(openClos);
        });
        closeMenu.on('click', function () {
            menuTop.toggleClass(openClos);
        });
        openFiltr.on('click', function (e) {
            e.preventDefault();
            filtr.toggleClass(filtrStn)
        });
        cloFiltr.on('click', function () {
            filtr.toggleClass(filtrStn)
        });


        $(document).mouseup(function (e) {
            if (menuTop.hasClass(open)) {
                if (!menuTop.is(e.target) && menuTop.has(e.target).length === 0) {
                    menuTop.toggleClass(openClos);
                }
            }
            if (filtr.hasClass(openFil)) {
                if (!filtr.is(e.target) && filtr.has(e.target).length === 0) {
                    filtr.toggleClass(filtrStn)
                }
            }
        });
    }

    menuChecked();

})();
