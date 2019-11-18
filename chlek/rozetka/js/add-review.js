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
                rating: document.querySelector('.rating-section-js'),
                likes: document.querySelectorAll('.like-js'),
                disLikes: document.querySelectorAll('.dis-like-js'),
            },
            prodRating: 0,
            checkedStar: '',

        };

        function build(collection) {
            for (var key in collection) {
                if (key === 'buttons') {
                    for (var key2 in collection[key]) {
                        addEvent('click', collection[key][key2], toggleForm);
                    }
                } else if (key === 'addReviewForm') {
                    addEvent('submit', collection[key], parseForm);
                } else if (key === 'rating') {
                    addEvent('click', collection[key], getRating);
                } else if (key === 'likes' || key === 'disLikes') {
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
            formComment.forEach(function (item, key) {
                console.log(item, key);
            });
            isValid(formComment);
        }

        function isValid(collect) {
            var textReview = document.querySelector('#review'),
                commenterName = document.querySelector('#user-name'),
                commenterEmail = document.querySelector('#email-address'),
                prodBenefits = document.querySelector('#benefits'),
                prodDisadvantages = document.querySelector('#disadvantages'),
                youtubeUrl = document.querySelector('#youtube'),
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(commenterEmail.value) && commenterName.value.length > 1 && commenterName.value.length < 50 && textReview.value.length > 60) {
                createComment(collect);
                self.options.eventElem.buttons.formWindow.classList.remove('active');
                console.log('Hi')
            }
            commenterName.value = '';
            commenterEmail.value = '';
            textReview.value = '';
            prodBenefits.value = '';
            prodDisadvantages.value = '';
            youtubeUrl.value = '';
            self.prodRating = 0;
            self.options.checkedStar.parentNode.previousElementSibling.checked = false;

        }

        function newElem(elemName, elemClass, content) {
            var elem = document.createElement(elemName);
            if (elemClass) elem.classList.add(elemClass);
            if (content) elem.innerHTML = content;
            return elem;
        }

        function createComment(collect) {

            var name = '', benefits = '', disadvantages = '', review = '', rating = 0, youtube = '',
                par = document.querySelector('.comments-wrapper'),
                likeBut = '', disLikeBut = '', butWrap = '', li = '', sect = '', date = new Date(),
                tegContent = '';

            collect.forEach(function (item, key) {
                if (key === 'rating') rating = self.options.prodRating;
                else if (key === 'name') name = item;
                else if (key === 'benefits') benefits = item;
                else if (key === 'disadvantages') disadvantages = item;
                else if (key === 'review') review = item;
                else if (key === 'youtube') youtube = item.split('v=')[1];
            });

            li = newElem('li');

            tegContent = '<p class="commentator-name">' + name + '</p>\n' +
                '        <span class="time-comment">' + (date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()) + '</span>\n' +
                '        <button>\n' +
                '            <svg aria-hidden="true" height="16" width="16">\n' +
                '                <use xlink:href="#icon-report" xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                '            </svg>\n' +
                '        </button>';

            sect = newElem('div', 'top-section', tegContent);
            li.appendChild(sect);

            tegContent = '<div class="rating-stars-wrap" style="' + ((rating) ? 'display: block' : 'display: none') + '">' + '<svg class="rating-stars" viewBox="0 0 64 12" aria-label="Рейтинг товара ' + self.options.prodRating + ' из 5">\n' +
                '    <g>\n' +
                '        <defs>\n' +
                '            <linearGradient gradientUnits="userSpaceOnUse" id="ratingFill_44730882">\n' +
                '                <stop stop-color="#ffa900" stop-opacity="1" offset="' + rating + '"></stop>\n' +
                '                <stop attr.offset="100%" stop-color="#d2d2d2" stop-opacity="1"></stop>\n' +
                '            </linearGradient>\n' +
                '        </defs>\n' +
                '        <path d="M11.91,4.88,9.28,7.57a.3.3,0,0,0-.08.27l.62,3.8a.3.3,0,0,1-.43.32L6.14,10.17a.28.28,0,0,0-.28,0L2.61,12a.3.3,0,0,1-.43-.32l.62-3.8a.3.3,0,0,0-.08-.27L.09,4.88a.31.31,0,0,1,.16-.53L3.89,3.8a.32.32,0,0,0,.22-.17L5.73.17a.3.3,0,0,1,.54,0L7.89,3.63a.32.32,0,0,0,.22.17l3.64.55A.31.31,0,0,1,11.91,4.88Zm12.84-.53L21.11,3.8a.32.32,0,0,1-.22-.17L19.27.17a.3.3,0,0,0-.54,0L17.11,3.63a.32.32,0,0,1-.22.17l-3.64.55a.31.31,0,0,0-.16.53l2.63,2.69a.3.3,0,0,1,.08.27l-.62,3.8a.3.3,0,0,0,.43.32l3.25-1.79a.28.28,0,0,1,.28,0L22.39,12a.3.3,0,0,0,.43-.32l-.62-3.8a.3.3,0,0,1,.08-.27l2.63-2.69A.31.31,0,0,0,24.75,4.35Zm13,0L34.11,3.8a.32.32,0,0,1-.22-.17L32.27.17a.3.3,0,0,0-.54,0L30.11,3.63a.32.32,0,0,1-.22.17l-3.64.55a.31.31,0,0,0-.16.53l2.63,2.69a.3.3,0,0,1,.08.27l-.62,3.8a.3.3,0,0,0,.43.32l3.25-1.79a.28.28,0,0,1,.28,0L35.39,12a.3.3,0,0,0,.43-.32l-.62-3.8a.3.3,0,0,1,.08-.27l2.63-2.69A.31.31,0,0,0,37.75,4.35Zm13,0L47.11,3.8a.32.32,0,0,1-.22-.17L45.27.17a.3.3,0,0,0-.54,0L43.11,3.63a.32.32,0,0,1-.22.17l-3.64.55a.31.31,0,0,0-.16.53l2.63,2.69a.3.3,0,0,1,.08.27l-.62,3.8a.3.3,0,0,0,.43.32l3.25-1.79a.28.28,0,0,1,.28,0L48.39,12a.3.3,0,0,0,.43-.32l-.62-3.8a.3.3,0,0,1,.08-.27l2.63-2.69A.31.31,0,0,0,50.75,4.35Zm13.16.53a.31.31,0,0,0-.16-.53L60.11,3.8a.32.32,0,0,1-.22-.17L58.27.17a.3.3,0,0,0-.54,0L56.11,3.63a.32.32,0,0,1-.22.17l-3.64.55a.31.31,0,0,0-.16.53l2.63,2.69a.3.3,0,0,1,.08.27l-.62,3.8a.3.3,0,0,0,.43.32l3.25-1.79a.28.28,0,0,1,.28,0L61.39,12a.3.3,0,0,0,.43-.32l-.62-3.8a.3.3,0,0,1,.08-.27Z"\n' +
                '              fill="url(#ratingFill_44730882)"></path>\n' +
                '    </g>\n' +
                '</svg>' + '</div>\n' +
                '         <p>\n' + review + '</p>\n' +
                '         <p class="bold-point" style="' + ((benefits) ? 'display:block' : 'display: none') + '">Переваги:</p>\n' +
                '         <p style="' + ((benefits) ? 'display:block' : 'display: none') + '">\n' + benefits + '         </p>\n' +
                '         <p class="bold-point" style="' + ((disadvantages) ? 'display:block' : 'display: none') + '">Недоліки:</p>\n' +
                '         <p style="' + ((disadvantages) ? 'display:block' : 'display: none') + '">\n' + disadvantages + '</p>\n' +
                '<iframe width="560" height="315" style="' + ((youtube) ? 'display: block' : 'display: none') + '" src="https://www.youtube.com/embed/' + youtube + '" frameborder="0"\n' +
                'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n';

            sect = newElem('div', 'bottom-section', tegContent);
            li.appendChild(sect);

            tegContent = '<svg aria-hidden="true" height="16" width="16"><use xlink:href="#icon-thumb-up" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg><span>0</span>';

            likeBut = newElem('button', 'like-js', tegContent);
            disLikeBut = newElem('button', 'dis-like-js', tegContent);
            likeBut.addEventListener("click", counterLikes(likeBut));
            disLikeBut.addEventListener("click", counterLikes(disLikeBut));

            butWrap = newElem('div', 'likes-wrap');
            butWrap.appendChild(likeBut);
            butWrap.appendChild(disLikeBut);

            tegContent = '<button>\n' +
                '             <svg aria-hidden="true" height="12" width="12">\n' +
                '                 <use xlink:href="#icon-return" xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                '             </svg>\n' +
                '             Відповісти\n' +
                '         </button>\n';

            sect = newElem('div', 'buttons-section', tegContent);
            sect.appendChild(butWrap);
            li.appendChild(sect);

            par.appendChild(li);
        }

        function getRating(event) {
            if (event.target.tagName === 'LABEL') {
                self.options.prodRating = +(event.target.dataset.rating)/5;
                self.options.checkedStar = event.target;
            }
            return self.options.prodRating;
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
