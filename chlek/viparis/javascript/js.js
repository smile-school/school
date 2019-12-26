(function () {
    function ViparisPage() {
        var self = this;
        this.pageUpId = 'page-up';
        this.hambButIds = ['hamb-menu-but', 'menu', 'close-menu'];
        this.hambmenuId = $('#menu');
        this.filterBut = ['filters-button', 'filters-close'];
        this.filters = $('#filters');
        this.elemPositLeft = (-320 * 1.15);
        this.tabletPoint = window.matchMedia("(min-width: 960px)");

        $('#' + self.pageUpId).click(function () {
            $('body, html').animate({scrollTop: 0}, 800);
        });

        function build() {
            addEvents(self.hambButIds, isBut);
            addEvents(self.filterBut, isBut);
        }

        function addEvents(idCollect, func) {
            if (Array.isArray(idCollect)) {
                for (var i = 0; i < idCollect.length; i++) {
                    var elem = document.querySelector('#' + idCollect[i]);
                    elem.addEventListener('click', func);
                }
            } else {
                var elem2 = document.querySelector('#' + idCollect);
                elem2.addEventListener('click', func);
            }
        }

        function isBut(e) {
            e.stopPropagation();
            if (self.hambButIds.indexOf(e.target.id) !== -1) {
                show(self.hambmenuId);
            } else if (self.filterBut.indexOf(e.target.id) !== -1) {
                show(self.filters)
            }
        }

        function show(element) {
            if (element.offset().left !== 0){
                element.toggleClass('active');
                setTimeout(function () {
                    element.animate({left: 0}, {duration: 500, queue: false});
                }, 10)
            }
            else {
                element.animate({left: (self.elemPositLeft)}, {duration: 500, queue: false});
                setTimeout(function () {
                    element.toggleClass('active');
                }, 510)
            }
        }

        window.addEventListener('resize', function () {
            setTimeout(toggleClassResp, 0)
        });
        function toggleClassResp() {
            if (!self.tabletPoint.matches){
                self.hambmenuId.offset({left: (self.elemPositLeft)});
            }else {
                self.hambmenuId.offset({left: 0});
            }
        }

        build();
    }

    var ViparisPage = new ViparisPage();
})();
