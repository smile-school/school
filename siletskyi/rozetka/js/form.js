(function () {

    var reviewWrite = document.querySelector('.review-write');
    reviewWrite.addEventListener('click', function () {
        formBlock()
    });
    function formBlock() {
        document.querySelector('.form-none').style.display = 'block';
        document.querySelector('.form-overlay').style.display = 'block';
    }

    var form = document.querySelector('.form-send');
    var submit = document.querySelector('.go-review-btn');

    submit.addEventListener('click', function () {
       formNone()
    });
    function formNone() {
        document.querySelector('.form-none').style.display = 'none';
        document.querySelector('.form-overlay').style.display = 'none';
    }

    function sendComments() {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var data = new FormData(this);
            validForm(data);
        });

        function validForm(data) {
            var starCount = 0,
                plus = '',
                minus = '',
                comment = '',
                name = '',
                email = '';

            data.forEach(function (item,key){
                if (key == 'plus') plus = item;
                else if (key == 'minus') minus = item;
                else if (key == 'comments') comment = item;
                else if (key == 'name') name = item;
                else if (key == 'email') email = item;
                else if (key == 'rating') starCount = item;
            });

            function createData() {
                Data = new Date();
                Year = Data.getFullYear();
                Month = Data.getMonth();
                Day = Data.getDate();
                switch (Month) {
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
            createData();

            function createComent(data) {
                var parent = document.querySelector('.all-reviews-wrap');
                var reviewItem = document.createElement('div');
                reviewItem.classList.add('review-item');
                parent.append(reviewItem);
                var topReviewItem = document.createElement('div');
                topReviewItem.classList.add('review-author-list');
                reviewItem.append(topReviewItem);
                var reviewAuthor = document.createElement('div');
                reviewAuthor.classList.add('review-author');
                topReviewItem.append(reviewAuthor);
                var nameReview = document.createElement('span');
                nameReview.classList.add('review-name');
                reviewAuthor.append(nameReview);
                nameReview.textContent = name;

                var reviewRating = document.createElement('div');
                reviewRating.classList.add('review-rating');
                topReviewItem.append(reviewRating);
                var reviewRatingText = document.createElement('p');
                reviewRatingText.classList.add('review-rating-text');
                reviewRating.append(reviewRatingText);
                reviewRatingText.textContent = '100% пользователей считают этот отзыв полезным';

                var reviewDate = document.createElement('div');
                reviewDate.classList.add('review-date');
                topReviewItem.append(reviewDate);
                var currentDate = document.createElement('span');
                currentDate.classList.add('date');
                reviewDate.append(currentDate);
                currentDate.innerHTML = Day + fMonth + Year;
                var revLink = document.createElement('a');
                revLink.classList.add('rev-link');
                revLink.href = '#';
                reviewDate.append(revLink);

                var reviewText = document.createElement('div');
                reviewText.classList.add('review-text');
                reviewItem.append(reviewText);
                var massage = document.createElement('span');
                reviewText.append(massage);
                massage.textContent = comment;

                var plusF = document.createElement('span');
                plusF.classList.add('plus');
                reviewText.append(plusF);
                plusF.textContent = plus;

                var minusF = document.createElement('span');
                minusF.classList.add('minus');
                reviewText.append(minusF);
                minusF.textContent = minus;

                var reviewTools = document.createElement('div');
                reviewTools.classList.add('review-tools');
                reviewItem.append(reviewTools);
                reviewTools.innerHTML = '<div class="review-tools-ans-btn"><a href="#"><span>Ответить</span></a></div><div class="review-rating"><span class="rev-like rev-btn" title="Полезный отзыв"></span><span class="rev-dislike rev-btn" title="Не полезный отзыв"></span></div><div class="review-complaint"><span title="Пожаловаться на отзыв"></span></div>'

            }
            createComent();
        }

        function reset() {
            form.reset();
        }
        reset();

    }
    sendComments();

    form.addEventListener('submit', function () {
        this.reset();
    });
})();
