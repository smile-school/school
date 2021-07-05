(function () {
    var btn = document.querySelector('.button'),
        wrap = document.querySelector('.wrapper'),
        myForm = document.querySelector('.my-form');


    btn.addEventListener('click', function () {
        getMyIp('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (data) {
            if (data) {
                data = JSON.parse(data);
                for (var key in data) {
                    wrap.innerHTML += '<h2>' + data[key].ccy + '=>' + data[key].base_ccy + '</h2>';
                    for (var key1 in data[key]) {
                        if (key1 !== 'ccy' && key1 !== 'base_ccy') {
                            wrap.innerHTML += '<p>' + key + ': ' + (+data[key][key1]).toFixed(2) + '</p>';
                        }
                    }
                }
            }
        });
    });

    function getMyIp(url, callback) {
        if (!url && callback) return;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function () {
            console.log(xhr.readyState);
            if (xhr.status == 200 && xhr.readyState == 4) {
                callback(xhr.responseText);
            }
        });

        xhr.open('GET', 'url');
        xhr.send();
    }

    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(this);
        data.forEach(function (item, key) {
            console.log(key, item);
        });
        sendForm('my-form.php', data, function (data) {
            wrap.innerHTML = data;
            setStatus();
        })
    });

    function setStatus() {
        var el = document.createElement('div');
        el.classList.add('anim');
        wrap.appendChild(el);
        setTimeout(function () {
            el.classList.add('active');
        }, 10);
    }

    function sendForm(url, data, callback) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                callback(xhr.responseText);
            }
        });

        xhr.open('POST', url);
        xhr.send(data);
    }

    getMyIp();
})();
