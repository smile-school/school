(function () {
    function AddReview(option) {
        var self = this;
        this.options = {
            buttons: {
                openButton: document.querySelector('.' + option.addReviewClass),
                formWindow: document.querySelector('.' + option.formWindowClass),
            },
            addReview: document.querySelector('.' + option.formClass),
            likes: document.querySelectorAll('.' + option.likeClass),
            disLikes: document.querySelectorAll('.' + option.disLikesClass),
        };

        function build(collection) {
            for (var key in collection) {
                if (key === 'buttons') {
                    for (var key2 in collection[key]) {
                        addEvent(collection[key][key2], toggleForm);
                    }
                }
                if (key === 'addReview') {
                    addEvent(collection[key], parseForm);
                } else {
                    for (var i = 0; i < collection[key].length; i++) {
                        addEvent(collection[key][i], counterLikes(collection[key][i]));
                    }
                }
            }
        }

        function addEvent(elem, func) {
            elem.addEventListener('click', func);
        }

        function toggleForm(event) {
            self.options.buttons.formWindow.classList.toggle('active');
            if(event.target.className === 'DIV'|| event.target.tagName==='BUTTON'){
                console.log(event.target.tagName);
            }
        }

        function parseForm() {
            console.log('Hi');
        }

        function counterLikes(elem) {
            var count = 0;
            return function () {
                count++;
                elem.children[1].innerHTML = count;
                console.log()
            }
        }

        build(self.options);
    }

    window.AddReview = AddReview;
})();
