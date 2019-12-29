(function () {
    function MenuFilter() {
        var self = this;
        this.classs = {
            blocFilter: document.querySelector('.mod-aside'),
            clasMod: 'filter-aside',
            filtrAction:'action-filtr',
            ehidFiltr:'ehitFiltr',
            parentBloc:   document.querySelector('.wrapper'),
            btnActive: document.querySelector('.btn-active-filtr'),
            ehitFiltr: document.querySelector('.ehitFiltr'),
            mainAside:document.querySelector('.main-aside'),
        };

        function butonFilterClick() {
            self.classs.parentBloc.addEventListener('click', function (elem) {
                if (elem.target.classList.contains(self.classs.filtrAction)) {
                    self.classs.blocFilter.classList.contains(self.classs.clasMod) ? self.classs.mainAside.classList.remove(self.classs.clasMod) : self.classs.mainAside.classList.add(self.classs.clasMod);
                } else if (elem.target.classList.contains(self.classs.ehidFiltr)) {
                    self.classs.blocFilter.classList.remove(self.classs.clasMod);
                }
            })
        }

        butonFilterClick();
    }

    MenuFilter();
})();
