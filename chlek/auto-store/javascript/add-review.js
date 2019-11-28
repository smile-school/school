(function () {
    function AddReview() {
        var self = this;
        this.options = {
            eventElem: {
                buttons: {
                    openButton: document.querySelector('.add-rev'),
                    formWindow: document.querySelector('.blind'),
                },
                addReviewForm: document.querySelector('.add-review-form'),
                likes: document.querySelectorAll('.like-js'),
                disLikes: document.querySelectorAll('.dis-like-js'),
            },
            prodRating: 0,
            commentCount: document.querySelector('.comment-counter'),
        };

        function build(collection) {
            for (var key in collection) {
                if (key === 'buttons') {
                    for (var key2 in collection[key]) {
                        addEvent('click', collection[key][key2], toggleForm);
                    }

                } else if (key === 'addReviewForm') {
                    addEvent('submit', collection[key], parseForm);
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
            if (event.target.className === 'add-rev') {
                setTimeout(function () {
                    self.options.eventElem.buttons.formWindow.classList.add('active');
                }, 10);

            }
            if (event.target.className === 'close-form-js' || event.target.className === 'blind active' || event.target.className === 'cancel-form') {
                setTimeout(function () {
                    self.options.eventElem.buttons.formWindow.classList.remove('active');
                }, 10);
            }
        }

        function parseForm(event) {
            var formComment = new FormData(this);
            event.preventDefault();
            isValid(formComment);
        }

        function isValid(collect) {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                formElements = {
                    textReview: document.querySelector('#review'),
                    commenterName: document.querySelector('#user-name'),
                    commenterEmail: document.querySelector('#email-address'),
                    prodBenefits: document.querySelector('#benefits'),
                    prodDisadvantages: document.querySelector('#disadvantages'),
                    youtubeUrl: document.querySelector('#youtube'),
                };
            if (reg.test(formElements.commenterEmail.value) && formElements.commenterName.value.length > 1 && formElements.commenterName.value.length < 50 && formElements.textReview.value.length > 60) {
                self.options.eventElem.buttons.formWindow.classList.remove('active');
                resetForm(formElements, createCommentValues(collect));
                return;
            }
            if (!reg.test(formElements.commenterEmail.value)) {
                formElements.commenterEmail.classList.add('active');
                formElements.commenterEmail.nextElementSibling.classList.add('active');
            }
            if (formElements.commenterName.value.length < 1 || formElements.commenterName.value.length > 50) {
                formElements.commenterName.classList.add('active');
                formElements.commenterName.nextElementSibling.classList.add('active');
            }
            if (formElements.textReview.value.length < 60) {
                formElements.textReview.classList.add('active');
                formElements.textReview.nextElementSibling.classList.add('active');
            }
        }

        function createCommentValues(collect) {
            var formVal = {};
            collect.forEach(function (item, key) {
                if (key === 'name') formVal.name = item;
                else if (key === 'benefits') formVal.benefits = item;
                else if (key === 'disadvantages') formVal.disadvantages = item;
                else if (key === 'review') formVal.review = item;
                else if (key === 'youtube') formVal.youtube = item.split('v=')[1];
            });
            creteCommentSection(formVal);
        }

        function creteCommentSection(formValues) {
            var par = document.querySelector('.comments-wrapper'),
                li = document.createElement('li'),
                topSect = document.createElement('div'),
                botSect = document.createElement('div'),
                buttonsSect = document.createElement('div'),
                date = new Date(),
                disLikeBut = document.createElement('button'),
                likeBut = document.createElement('button'),
                iframe = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/' + formValues.youtube + '" frameborder="0"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                topSection = {
                    firstChil: {
                        teg: 'h5',
                        classTeg: 'commentator-name',
                        content: formValues.name,
                    },
                    secondChil: {
                        teg: 'span',
                        classTeg: 'time-comment',
                        content: (date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()),
                    },
                },
                bottomSection = {
                    firstChil: {
                        isValid: true,
                        teg: 'p',
                        classTeg: 'new-com',
                        content: formValues.review,
                    },
                    secondChil: {
                        isValid: (formValues.benefits) ? true : false,
                        teg: 'p',
                        classTeg: 'bold-point',
                        content: 'Benefits:',
                    },
                    thirdChil: {
                        isValid: (formValues.benefits) ? true : false,
                        teg: 'p',
                        classTeg: '',
                        content: formValues.benefits,
                    },
                    fourChil: {
                        isValid: (formValues.disadvantages) ? true : false,
                        teg: 'p',
                        classTeg: 'bold-point',
                        content: 'Disadvantages:',
                    },
                    fifthChil: {
                        isValid: (formValues.disadvantages) ? true : false,
                        teg: 'p',
                        classTeg: '',
                        content: formValues.disadvantages,
                    },
                },
                buttonSection = {
                    fifthChil: {
                        teg: 'button',
                        classTeg: '',
                        content: 'answer'
                    },
                    secondChil: {
                        teg: 'div',
                        classTeg: 'likes-wrap',
                        content: '',
                    },
                };

            topSect.classList.add('top-section');
            botSect.classList.add('bottom-section');
            buttonsSect.classList.add('buttons-section');
            likeBut.classList.add('like-js');
            likeBut.innerHTML += '<i class="far fa-thumbs-up"></i><span>&nbsp;0</span>';
            disLikeBut.classList.add('dis-like-js');
            disLikeBut.innerHTML += '<i class="far fa-thumbs-down"></i><span>&nbsp;0</span>';
            likeBut.addEventListener('click', counterLikes(likeBut));
            disLikeBut.addEventListener('click', counterLikes(disLikeBut));

            for (var key in topSection) {
                topSect.appendChild(newElem(topSection[key].teg, topSection[key].classTeg, topSection[key].content));
            }
            for (var key in bottomSection) {
                if (bottomSection[key].isValid) {
                    botSect.appendChild(newElem(bottomSection[key].teg, bottomSection[key].classTeg, bottomSection[key].content));
                }
            }
            for (var key in buttonSection) {
                if (key === 'secondChil') {
                    var newEl = newElem(buttonSection[key].teg, buttonSection[key].classTeg, buttonSection[key].content);
                    newEl.appendChild(disLikeBut);
                    newEl.appendChild(likeBut);
                    buttonsSect.appendChild(newEl);
                    break;
                }
                buttonsSect.appendChild(newElem(buttonSection[key].teg, buttonSection[key].classTeg, buttonSection[key].content));
            }

            li.appendChild(topSect);
            if (formValues.youtube) botSect.innerHTML += iframe;
            li.appendChild(botSect);
            li.appendChild(buttonsSect);
            par.prepend(li);
        }

        function newElem(elemName, elemClass, content) {
            var elem = document.createElement(elemName);
            if (elemClass) elem.classList.add(elemClass);
            if (content) elem.textContent = content;
            return elem;
        }

        function resetForm(obj) {
            for (var key in obj) {
                obj[key].value = '';

                if (obj[key].classList.contains('active')) {
                    obj[key].classList.remove('active')
                    obj[key].nextElementSibling.classList.remove('active');
                }
            }
        }

        function counterLikes(elem) {
            var count = 0;
            return function () {
                count++;
                elem.children[1].innerHTML = count;
            }
        }

        build(self.options.eventElem);
    }

    window.AddReview = AddReview;

})();
