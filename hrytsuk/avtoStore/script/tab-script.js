(function () {


    function tab() {
        var tabNav = document.querySelectorAll('.tab'),
            tabContent = document.querySelectorAll('.tab-content'),
            tabName;

        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav(e) {
            tabNav.forEach(item => {
                item.classList.remove('white-li');
            });
            this.classList.add('white-li');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }


        $('.reviev-href').click(function (e) {
            tabNav.forEach(item =>{
               item.classList.remove('white-li');
            });
            var activeRevie = document.querySelector('.active-revie');
            activeRevie.classList.add('white-li');

            e.preventDefault();
            var idHref = $(this).attr('href'),
                input = document.querySelector('#input3'),
                ofsetTtop = $(idHref).offset().top;

            input.checked = true;
            $('body,html').animate({scrollTop: ofsetTtop - 30}, 1000);
        })
    }

    tab();


    function acordeon() {
        var acord = document.querySelectorAll('.acordeon-active');
            for (var i=0;i<acord.length; i++){
                acord[i].addEventListener('click', function (e) {
                    this.nextElementSibling.classList.toggle('show');
                })
            }

    }
    acordeon();


})();
