(function () {
    function CounterLikes(option) {
        var self = this;
        this.options = {
            likes: document.querySelectorAll('.' + option.likeClass),
            disLikes: document.querySelectorAll('.' + option.disLikesClass)
        };

        function build(collection) {
            collection.forEach(function (item) {
                addEvent(item);
            })
        }

        function addEvent(elem) {
            elem.addEventListener('click', counterLikes(elem));
        }

        function counterLikes(elem) {
            var count = 0;
            return function () {
                count++;
                elem.children[1].innerHTML = count;
                console.log()
            }
        }

        build(self.options.likes);
        build(self.options.disLikes);
    }

    window.CounterLikes = CounterLikes;
})();
