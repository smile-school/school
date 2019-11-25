(function () {
    var form = document.querySelector('.comment-send-form');
    var submit = document.querySelector('#submit');

    function createComments() {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var data = new FormData(this);
            valid(data);
        });

        function valid(data) {
            var starCount = 0,
                plus = '',
                minus = '',
                comment = '',
                name = '',
                tel = '';

            data.forEach(function (item,key){
                if (key == 'plus') plus = item;
                else if (key == 'minus') minus = item;
                else if (key == 'comments') comment = item;
                else if (key == 'name') name = item;
                else if (key == 'tel') tel = item;
                else if (key == 'rating') starCount = item;
            });


            function curentData() {
                Data = new Date();
                Year = Data.getFullYear();
                Month = Data.getMonth();
                Day = Data.getDate();
                switch (Month)
                {
                    case 0: fMonth=" января "; break;
                    case 1: fMonth=" февраля "; break;
                    case 2: fMonth=" марта "; break;
                    case 3: fMonth=" апреля "; break;
                    case 4: fMonth=" мае "; break;
                    case 5: fMonth=" июня "; break;
                    case 6: fMonth=" июля "; break;
                    case 7: fMonth=" августа "; break;
                    case 8: fMonth=" сентября "; break;
                    case 9: fMonth=" октября "; break;
                    case 10: fMonth=" ноября "; break;
                    case 11: fMonth=" декабря "; break;
                }
            }
            curentData();


            function createContent(data) {
                var parent = document.querySelector('.append-comment');
                var parentComment = document.createElement('section');
                parentComment.classList.add('feedback-section');
                parent.append(parentComment);
                var head = document.createElement('section')
                head.classList.add('head');
                parentComment.append(head)
                var nameSender = document.createElement('span')
                nameSender.classList.add('name')
                head.append(nameSender)
                nameSender.textContent = name;

                var ratings = document.createElement('span');
                ratings.classList.add('rating')
                head.append(ratings)
                ratings.innerHTML = '<svg fill="none" viewBox="-‎1 -1 108 22" id="g-rating-stars-medium-active" x="594" y="129" xmlns="http://www.w3.org/2000/svg"><path fill-opacity="0" d="M0 0h106v20H0z"></path><path d="M10.394.289a.546.546 0 0 1 .963 0l2.945 5.753c.078.153.23.26.404.284l6.584.923c.44.061.617.584.298.883l-4.765 4.479a.506.506 0 0 0-.154.458l1.124 6.324c.076.424-.384.746-.779.546l-5.889-2.985a.556.556 0 0 0-.5 0l-5.89 2.985c-.394.2-.854-.122-.779-.546l1.125-6.324a.506.506 0 0 0-.155-.458L.162 8.13c-.319-.298-.143-.82.297-.882l6.585-.924a.535.535 0 0 0 .404-.283L10.393.288z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffa900"></path><path d="M31.456.289a.546.546 0 0 1 .963 0l2.945 5.753c.078.153.23.26.404.284l6.584.923c.44.061.617.584.298.883l-4.766 4.48a.506.506 0 0 0-.154.457l1.125 6.325c.075.423-.385.745-.78.545l-5.888-2.985a.556.556 0 0 0-.5 0l-5.89 2.985c-.394.2-.854-.122-.779-.545l1.125-6.325a.506.506 0 0 0-.155-.458l-4.765-4.479c-.319-.3-.143-.821.297-.883l6.585-.923a.535.535 0 0 0 .404-.283L31.454.289z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffa900"></path><path d="M52.518.289a.546.546 0 0 1 .963 0l2.945 5.753c.078.153.23.26.404.284l6.584.923c.44.061.617.584.298.883l-4.765 4.479a.506.506 0 0 0-.154.458l1.124 6.324c.076.424-.384.746-.779.546l-5.889-2.985a.556.556 0 0 0-.5 0l-5.89 2.986c-.393.2-.854-.123-.778-.546l1.124-6.324a.506.506 0 0 0-.154-.459l-4.765-4.479c-.32-.299-.143-.821.298-.883l6.585-.923a.535.535 0 0 0 .404-.283L52.517.289z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffa900"></path><path d="M73.581.289a.546.546 0 0 1 .963 0l2.945 5.753c.078.153.23.26.404.284l6.584.923c.44.061.617.584.298.883L80.01 12.61a.506.506 0 0 0-.154.458l1.124 6.324c.076.424-.384.746-.779.546l-5.889-2.985a.556.556 0 0 0-.5 0l-5.89 2.985c-.393.2-.854-.122-.778-.546l1.124-6.324a.506.506 0 0 0-.154-.458l-4.767-4.48c-.318-.298-.143-.82.298-.882l6.585-.923a.535.535 0 0 0 .404-.284L73.579.29z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffa900"></path><path d="M94.643.289a.546.546 0 0 1 .963 0l2.945 5.753c.078.153.23.26.404.284l6.585.923c.44.061.616.584.298.883l-4.765 4.479a.506.506 0 0 0-.155.458l1.124 6.324c.077.424-.385.746-.779.546l-5.889-2.985a.556.556 0 0 0-.5 0l-5.89 2.985c-.393.2-.854-.122-.778-.546l1.124-6.324a.506.506 0 0 0-.154-.458l-4.762-4.48c-.319-.298-.143-.82.297-.882l6.585-.923a.535.535 0 0 0 .404-.284L94.645.29z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffa900"></path></svg>';
                if (starCount == 1){
                    ratings.children[0].style.width = 21.6 + 'px'
                } else if (starCount == 2){
                    ratings.children[0].style.width = 43.2 + 'px'
                } else if (starCount == 3){
                    ratings.children[0].style.width = 63.8 + 'px'
                } else if (starCount == 4){
                    ratings.children[0].style.width = 86.4 + 'px'
                } else if (starCount == 0){
                    ratings.children[0].style.width = 0;
                }


                var currentDay = document.createElement('span')
                currentDay.classList.add('data')
                head.append(currentDay)
                currentDay.innerHTML = Day + fMonth + Year + "<svg class=\"arr\" _ngcontent-c11=\"\" aria-hidden=\"true\">\n" + "<use _ngcontent-c11=\"\" xlink:href=\"#review-link\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"></use>\n" + "</svg>";

                var main = document.createElement('section')
                main.classList.add('main')
                parentComment.append(main)
                var massage = document.createElement('p')
                massage.classList.add('massage')
                main.append(massage)
                massage.textContent = comment

                var pluse = document.createElement('span')
                pluse.classList.add('pluse')
                main.append(pluse)
                pluse.textContent = plus

                var minuse = document.createElement('span')
                minuse.classList.add('minus')
                main.append(minuse)
                minuse.textContent = minus

                var footerFeedback = document.createElement('section');
                footerFeedback.classList.add('footer-fedback')
                parentComment.append(footerFeedback)
                footerFeedback.innerHTML = ' <section class="left">\n' +
                    '                            <span class="replace">\n' +
                    '                            <svg class="arr" _ngcontent-c11="" aria-hidden="true" height="40" width="40">\n' +
                    '                            <use _ngcontent-c11="" xlink:href="#review-reply-add" xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                    '                        </svg>\n' +
                    '                                 Ответить\n' +
                    '                            </span>\n' +
                    '                            </section>\n' +
                    '                            <section class="right">\n' +
                    '                                <section class="like-dislike">\n' +
                    '                                    <svg class="arr" _ngcontent-c11="" aria-hidden="true" height="40" width="40">\n' +
                    '                                        <use _ngcontent-c11="" xlink:href="#positive-vote" xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                    '                                    </svg>\n' +
                    '                                    <svg class="arr" _ngcontent-c11="" aria-hidden="true" height="40" width="40">\n' +
                    '                                        <use _ngcontent-c11="" xlink:href="#negative-vote" xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                    '                                    </svg>\n' +
                    '                                </section>\n' +
                    '                                <section class="reviev">\n' +
                    '                                    <svg class="arr" _ngcontent-c11="" aria-hidden="true" height="40" width="40">\n' +
                    '                                        <use _ngcontent-c11="" xlink:href="#review-complaint" xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                    '                                    </svg>\n' +
                    '                                </section>\n' +
                    '                            </section>'

            }
            createContent();
        }

        function reset() {
            form.reset();
        }
        reset();

    }
    createComments();

    function validateEmail() {

        var email = document.getElementById('tel');

        var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!mailFormat.test(email.value)) {

            submit.disabled = true
            return false;
        }
        else {
            submit.disabled = false
        }
    }
    document.addEventListener('DOMContentLoaded', validateEmail);
    form.addEventListener('submit', function () {
        this.reset();
    });
})();