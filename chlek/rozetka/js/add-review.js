(function () {
    function AddReview(option) {
        var self = this;
        this.options = {
            eventElem: {
                buttons: {
                    openButton: document.querySelector('.add-review-js'),
                    formWindow: document.querySelector('.blind-wrapper'),
                },
                addReviewForm: document.querySelector('.add-review-form'),
                /* rating: document.querySelectorAll('.rating-point'),*/
                likes: document.querySelectorAll('.like-js'),
                disLikes: document.querySelectorAll('.dis-like-js'),
            },
        };

        function build(collection) {
            for (var key in collection) {
                if (key === 'buttons') {
                    for (var key2 in collection[key]) {
                        addEvent('click', collection[key][key2], toggleForm);
                    }
                }
                if (key === 'addReviewForm') {
                    addEvent('submit', collection[key], parseForm);
                } else {
                    for (var i = 0; i < collection[key].length; i++) {
                        addEvent('click', collection[key][i], counterLikes(collection[key][i]));
                    }
                }
            }
        }

        function addEvent(eventName, elem, func) {
            elem.addEventListener(eventName, func);
        }

        function toggleForm(event) {
            if (event.target.className === 'add-review-js') {
                setTimeout(function () {
                    self.options.eventElem.buttons.formWindow.classList.add('active');
                }, 10);
            }
            if (event.target.className === 'close-form-js' || event.target.className === 'cancel-form' || event.target.className === 'blind-wrapper active') {
                setTimeout(function () {
                    self.options.eventElem.buttons.formWindow.classList.remove('active');
                }, 10);
            }
        }

        function parseForm(event) {
            var formComment = new FormData(this);
            event.preventDefault();
            self.options.eventElem.buttons.formWindow.classList.remove('active');
            createCommentSection(formComment);
        }

        function newElem(elemName, className) {
            var elem = document.createElement(elemName);
            elem.classList.add(className);
            return elem;
        }

        function createCommentSection(collection) {
            collection.forEach(function (item, key) {
                console.log(item, key);
            })
        }

        function getRating(e) {
            console.log(e.target);
        }

        function counterLikes(elem) {
            var count = 0;
            return function () {
                count++;
                elem.children[1].innerHTML = count;
                console.log()
            }
        }

        build(self.options.eventElem);
    }

    window.AddReview = AddReview;
})();
