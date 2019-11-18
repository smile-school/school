(function () {
    // var wrap = document.querySelector('.new-comment'),
    var wrap = document.querySelector('.community-feedbacks'),
        myForm = document.querySelector('#myForm');

    function getMyIp(url, callback) {
        if (!url && !callback) return;
        var xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function () {
            console.log(xhr);
            if (xhr.status == 200 && xhr.readyState == 4){
                callback(xhr.responseText);
            }
        });
        xhr.open('GET', url);
        xhr.send();
    }
    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(this);
        data.forEach(function (value, key) {
            console.log('key = ' + key +', value = ' + value);
        });
        sendForm('myForm.php', data, function (data) {
            var el = document.createElement('div');
            el.classList.add('client-feedback');
            wrap.appendChild(el);
            var newBlock = document.createElement('div');
            newBlock.classList.add('header-client-feedback-new');
            el.appendChild(newBlock);
            var rating = document.createElement('div')
            rating.classList.add('rating');
            rating.innerHTML = data;
            newBlock.appendChild(rating);
            var name = document.createElement('h4');
            name.classList.add('person');
            newBlock.appendChild(name);
            var date = document.createElement('span');
            name.classList.add('date-of-comment');
            name.appendChild(date);
            var comment = document.createElement('p');
            newBlock.appendChild(comment);
            var likeDislike = document.createElement('div');
            likeDislike.classList.add('like-dislike');
            newBlock.appendChild(likeDislike);
            var answer = document.createElement('a');
            answer.classList.add('answer');
            likeDislike.appendChild(answer);
            answer.innerHTML = 'Ответить';

            setTimeout(function () {
                el.classList.add('new');
            },50);
        })
    });
    function sendForm(url, data, callback) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function () {
            if (xhr.status == 200 && xhr.readyState == 4){
                callback(xhr.responseText);
            }
        });
        xhr.open('POST', url);
        xhr.send(data);
    }
})();
