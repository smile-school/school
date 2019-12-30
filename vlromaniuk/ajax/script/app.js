(function () {
    var btn = document.querySelector('#ip'),
        wrap = document.querySelector('.myIp');
    btn.addEventListener('click', function () {
        getMyIp('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (data) {
            if (data){
                data = JSON.parse(data);
                for (var key in data){
                    wrap.innerHTML += '<h2>' + data[key].ccy + ' => ' + data[key].base_ccy + '</h2>';
                    for (var key1 in data[key]){
                        console.log(key1, data[key][key1]);
                        if (key1 !== 'ccy' && key1 !== 'base_ccy') {
                            wrap.innerHTML += '<p>' + key1 + ': '+(+ data[key][key1]).toFixed(2) + '</p>';
                        }
                    }
                }
            }
        });
    });

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
})();
(function () {
    var myForm = document.querySelector('#myForm');
    var res  = document.querySelector('.result');
    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(this);
        console.log(data)
        data.forEach(function (item,key) {
            console.log(key,item)
        });
        sendForm('myForm.php', data, function (data) {
            res.innerHTML = data;
            var el = document.createElement('div');
            myForm.appendChild(el);
            setTimeout(function () {
                el.classList.add('active')
            },10)
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
        xhr.send(data)
    }
})();