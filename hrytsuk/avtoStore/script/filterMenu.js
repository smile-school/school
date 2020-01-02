(function () {

    function filterBloc() {
        var filter = $('.main-aside'),
            exitFiltr = $('.ehitFiltr'),
            activeFiltr = $('.action-filtr'),
            asideFiltr = 'filter-aside';

        activeFiltr.on('click', function () {
            filter.toggleClass(asideFiltr);
        });
        exitFiltr.on('click', function () {
            filter.toggleClass(asideFiltr);
        });

        $(document).mouseup(function (e) {
            if (filter.hasClass(asideFiltr)) {
                if (!filter.is(e.target) && filter.has(e.target).length === 0) {
                    filter.toggleClass(asideFiltr);
                }
            }

        });

    }

    filterBloc();

})();
