(function () {

    function tab() {
       var tabNav = document.querySelectorAll('.tab'),
            tabContent = document.querySelectorAll('.tab-content'),
           tabName;

        tabNav.forEach(item=>{
            item.addEventListener('click', selectTabNav)
        });
        function selectTabNav() {
            tabNav.forEach(item =>{
                item.classList.remove('white-li');
            });
            this.classList.add('white-li');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }
        function selectTabContent(tabName) {
            tabContent.forEach(item =>{
                item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
            });
        }
    }

    tab();

})();




















