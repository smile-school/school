(function () {

    function Form() {
        var btn = document.querySelector("#actForm"),
            actForm = document.querySelector(".action-form-bloc"),
            exidForm = document.querySelectorAll(".ehitForm"),
            acForm = "acForm";

        btn.addEventListener('click', function () {
            actForm.classList.add(acForm);
        });

        for (var elem in exidForm) {
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
                  if (this.classList.contains('buton-lice')){
                      var spn = this.children[1];
                      counter.setCount(spn);
                  }
                    if (this.classList.contains('buton-diz')){
                        var spn2 = this.children[1];
                        counter2.setCount(spn2);
                    }
                });

            }
        }
        Counter.prototype.setCount = setCount;
        var counter = new Counter(document.querySelectorAll('.buton-lice'), 0);
        var counter2 = new Counter(document.querySelectorAll('.buton-diz'), 0);



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

            var name = '',
                digniti = '',
                disadvantages = '',
                coment = '',
                rating = 1,
                urlYotube = '',
                date = new Date(),
                curr_date = date.getDate(),
                curr_month = date.getMonth() + 1,
                curr_year = date.getFullYear(),
                setDate = curr_year + "-" + curr_month + "-" + curr_date;
            


             // var star = document.querySelectorAll('.rat');
             // for (var elems in star){
             //     elems.addEventListener('click',function (event) {
             //         console.log(event.target);
             //     });
             // }



            data.forEach(function (item,key){
                if (key === 'name') name = item;
                else if(key ==='rating') rating = item;
                else if (key === 'digniti') digniti = item;
                else if (key === 'disadvantages') disadvantages = item;
                else if (key === 'coment') coment = item;
                else if (key === 'url-yotube') urlYotube = item.split('v=')[1];

            });


            var li = document.createElement('li');
            var div = document.createElement('div');
            var p = document.createElement('p');
            var span = document.createElement('span');
            var dl = document.createElement('dl');
            var dt = document.createElement('dt');
            var dd = document.createElement('dd');
            var button = document.createElement('button');


            ul.append(li);

            var topComent = document.createElement('div');
            topComent.classList.add('list-coment-bloc');

            var comentBloc = document.createElement('div');
            comentBloc.classList.add('top-coment-list', 'top-coment');

            var pTop = document.createElement('p');
            var nameList = document.createElement('span');
            nameList.classList.add('name-list');
            nameList.append(name);
            var todauList = document.createElement('span');
            todauList.classList.add('todau-list');
            var time = document.createElement('time');
            time.append(setDate);

            todauList.appendChild(time);
            todauList.innerHTML+=  '<svg aria-hidden="true" height="16" width="16"><use xlink:href="#icon-report"'+
            'xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>';
            pTop.appendChild(nameList);
            pTop.appendChild(todauList);
            comentBloc.appendChild(pTop);
            topComent.appendChild(comentBloc);
            var starReting = '<svg class="star-reid" viewBox="0 0 64 12" aria-label="Рейтинг товара">\n' +
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
                '</svg>';

            var reting = document.createElement('div');
            reting.classList.add('reting');
            reting.innerHTML+=starReting;
            topComent.appendChild(reting);
            var interest = document.createElement('span');
            interest.classList.add('interest');
            topComent.appendChild(interest);

            var comentText = document.createElement('div');
            comentText.classList.add('coment-text');
            var coments = document.createElement('p');
            coments.classList.add('coment');
            coments.append(coment);
            comentText.appendChild(coments);
            var characterBloc = document.createElement('dl');
            characterBloc.classList.add('character-bloc');
            var dt1 = document.createElement('dt');
            dt1.append('Достоинства:');
            var dd1 = document.createElement('dd');
            dd1.append(digniti);
            characterBloc.appendChild(dt1);
            characterBloc.appendChild(dd1);
            comentText.appendChild(characterBloc);
            topComent.appendChild(comentText);
            var characterBloc2 = characterBloc.cloneNode(false);
            var dt2 = document.createElement('dt');
            dt2.append('Недостатки:');
            var dd2 = document.createElement('dd');
            dd2.append(digniti);
            characterBloc2.appendChild(dt2);
            characterBloc2.appendChild(dd2);
            comentText.appendChild(characterBloc2);

            var video = document.createElement('div');
            video.classList.add('video');
            var ifreme = '<iframe width="560" height="315"  src="https://www.youtube.com/embed/' + urlYotube + '" frameborder="0"' +
            'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            video.innerHTML +=ifreme;
            topComent.appendChild(video);

            var comentFooter = document.createElement('div');
            comentFooter.classList.add('coment-footer');
            var answerButon = document.createElement('button');
            answerButon.classList.add('answer-bottom');
            var svgRetur = '<svg aria-hidden="true" height="12" width="12">\n' +
                '                                            <use xlink:href="#icon-return"\n' +
                '                                                 xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                '                                        </svg>';
            answerButon.innerHTML+=svgRetur + 'Ответить';
            comentFooter.appendChild(answerButon);

            var comentLice = document.createElement('div');
            comentLice.classList.add('coment-lice');
            var butonLice = document.createElement('button');
            butonLice.classList.add('answer-bottom','buton-lice');
            var svgLice = '<svg aria-hidden="true" height="16" width="16">\n' +
                '                                                <use xlink:href="#icon-thumb-up"\n' +
                '                                                     xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                '                                            </svg>';
            butonLice.innerHTML+=svgLice;
            var like1 = document.createElement('span');
            like1.classList.add('like');
            like1.append('0');
            butonLice.appendChild(like1);
            comentLice.appendChild(butonLice);
            var butonDiz = document.createElement('button');
            butonDiz.classList.add('answer-bottom','lice','buton-diz');
            butonDiz.innerHTML+=svgLice;
            var like2 = document.createElement('span');
            like2.classList.add('like');
            like2.append('0');
            butonDiz.appendChild(like2);
            comentLice.appendChild(butonDiz);
            comentFooter.appendChild(comentLice);

            topComent.appendChild(comentFooter);


            li.appendChild(topComent);


        }

    }


    formValid();
})();
