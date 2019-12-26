(function () {
    var wrapper = document.querySelector(".search-block-js"),
        gridViewToggle = wrapper.querySelector(".gridView-toggle-js"),
        rowsViewToggle = wrapper.querySelector(".rowsView-toggle-js"),
        products = wrapper.querySelector('.products-list-js');

    gridViewToggle.addEventListener('click', setActiveToggle);
    rowsViewToggle.addEventListener('click', setActiveToggle);

    function setActiveToggle(e) {
        var toggle = e.currentTarget,
            siblings = toggle.parentElement.children;
        if (!toggle.classList.contains('active')){
            for (var elem = 0; elem < siblings.length; elem++){
                if (siblings[elem].classList.contains('active-js')){
                    siblings[elem].classList.remove('active-js');
                }
            }
            toggle.classList.add('active-js');
            setView(toggle);
        }
        return false;
    }

    function setView(toggle) {
        if(toggle.classList.contains('rowsView-toggle-js')){
            products.classList.add('rowsView-js');
        } else {
            products.classList.remove('rowsView-js');
        }
    }
})();