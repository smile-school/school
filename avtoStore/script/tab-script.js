(function () {

    function tab() {
        var tab = document.getElementsByClassName('tab'),
            tabContent = document.getElementsByClassName('tab-content');
        hideTabsContent(0);
        function hideTabsContent(el) {
            for(var i = el; i < tabContent.length;i++){
                tabContent[i].classList.remove('shov');
                tabContent[i].classList.add('hide');
                tab[i].classList.remove('white-li');
            }
        }

        var tabs = document.querySelector('.tabs');
        tabs.addEventListener('click', function (event) {
            var target = event.target;
            if (target.className =='tab'){
                for (var i=0; i<tab.length;i++){
                    if (target == tab[i]){
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
        function showTabContent(bloc) {
            if (tabContent[bloc].classList.contains('hide')){
                hideTabsContent(0);
                tab[bloc].classList.add('white-li');
                tabContent[bloc].classList.remove('hide');
                tabContent[bloc].classList.add('shov');

            }
        }
    }
    tab();






})();