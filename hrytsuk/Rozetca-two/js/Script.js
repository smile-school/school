(function () {

    function Form(acForm) {
        var btn = document.querySelector("#actForm"),
            actForm = document.querySelector(".action-form-bloc"),
            exidForm = document.querySelectorAll(".ehitForm"),
            acForm = "acForm";

        btn.addEventListener('click', function () {
            actForm.classList.add(acForm);
        });

        for (var elem of exidForm) {
            elem.addEventListener("click", function () {
                actForm.classList.remove(acForm);
            })
        }

    }

    Form();

    function setCount(spn) {
        spn.innerHTML = this.counts + ++spn.textContent;
    }

    function Counter(elem, count) {
        this.targetElem = elem;
        this.counts = count;
        for (var i = 0; i < elem.length; i++) {
            this.targetElem[i].addEventListener("click", function () {
                var spn = this.children[1];
                counter.setCount(spn);
            });
        }
    }
    Counter.prototype.setCount = setCount;
    var counter = new Counter(document.querySelectorAll('.buton-lice'), 0);





    function formValid(a) {
        var myForm = document.getElementById('comentForm');
         myForm.addEventListener('submit', parsForm);

        function parsForm(e) {
            e.preventDefault();
            var data = new FormData(this);
            Valid(data);
        }

        function Valid(data) {
            var ul = document.querySelector(".coment-list");
            // var li = document.createElement('li');

            var name = '', benefits = '', disadvantages = '', review = '', rating = 0, youtube = '',
                likeBut = '', disLikeBut = '', butWrap = '', li = '', sect = '', date = new Date(),
                tegContent = '';

            data.forEach(function (item,key){
              if (key === 'name') name = item;
                else if (key === 'benefits') benefits = item;
                else if (key === 'disadvantages') disadvantages = item;
                else if (key === 'review') review = item;
                else if (key === 'youtube') youtube = item.split('v=')[1];

            });

            ul.innerHTML += "<li>" +
                "<div class='list-coment-bloc'>" +
                "<div class='top-coment-list top-coment'>"+
                "<p>" +
                "<span class='name-list'>"+name+"</span>"+
                "<span class='todau-list'>" +
                "<time>"+ date +"</time>"+
                '<svg aria-hidden="true" height="16" width="16"><use\n' +
                '                                                    xlink:href="#icon-report"\n' +
                '                                                    xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>'+
                "</span>"+
                "</p>"+
                 "</div>" +
                '<ul class="rating">\n' +
                '<li class="star"><span></span><span></span></li>\n' +
                '<li class="star"><span></span><span></span></li>\n' +
                '<li class="star"><span></span><span></span></li>\n' +
                '<li class="star"><span></span><span></span></li>\n' +
                '<li class="star"><span></span><span></span></li>\n' +
                '</ul>'+
                '<div class="coment-text">\n' +
                '                                    <p class="coment">\n' +
                '                                        Здесь стоит 1 планка на 8 или 2 на 4? десь стоит 1 планка на 8 или 2 на 4? десь стоит 1 планка на 8 или 2 на 4? десь стоит 1 планка на 8 или 2 на 4?\n' +
                '                                    </p>\n' +
                '                                    <dl class="character-bloc">\n' +
                '                                        <dt>Достоинства:</dt>\n' +
                '                                        <dd>'+ benefits +'</dd>\n' +
                '                                    </dl>\n' +
                '                                    <dl class="character-bloc">\n' +
                '                                        <dt>\n' +
                '                                            Недостатки:\n' +
                '                                        </dt>\n' +
                '                                        <dd>\n' +
                '                                            Дорого! Не все драйвера на офф. сайте HP, батарея слабовата.\n' +
                '                                        </dd>\n' +
                '                                    </dl>\n' +
                '                                </div>'
                "</div>" +
                "</li>";

            console.log(ul);
            // var name= data.get("name"),
            //     digniti = data.get("digniti"),
            //     disadvantages = data.get("disadvantages"),
            //     coment = data.get("coment");

        }
    }


    formValid();

    Counter();
})();