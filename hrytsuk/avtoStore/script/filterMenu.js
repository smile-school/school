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
                    this.classs.blocFilter.classList.contains(this.classs.clasMod) ? this.classs.mainAside.classList.remove(this.classs.clasMod) : this.classs.mainAside.classList.add(t.classs.clasMod);
                } else if (elem.target.classList.contains(this.classs.ehidFiltr)) {
                    this.classs.blocFilter.classList.remove(this.classs.clasMod);
                }
            },this)
        }

        butonFilterClick();
    }

    MenuFilter();
})();
