(function () {

    function Form() {
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
            // var li = document.createElement('li');

            var name = '',
                digniti = '',
                disadvantages = '',
                coment = '',
                rating = 0,
                urlYotube = '',
                date = new Date(),
                curr_date = date.getDate(),
                curr_month = date.getMonth() + 1,
                curr_year = date.getFullYear(),
                setDate = curr_year + "-" + curr_month + "-" + curr_date;



            data.forEach(function (item,key){
                if (key === 'name') name = item;
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

            var reting = document.createElement('div');
            reting.classList.add('reting');
            comentBloc.appendChild(reting);
            var interest = document.createElement('span');
            interest.classList.add('interest');
            comentBloc.appendChild(interest);

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
            comentBloc.appendChild(comentText);
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
            comentBloc.appendChild(video);

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

            comentBloc.appendChild(comentFooter);


            li.appendChild(topComent);



            // var comentBl = document.createElement('div');
            // comentBl.classList.add('list-coment-bloc');
            // li.append(comentBl);
            // var topComent = document.createElement('div').classList.add('top-coment-list');
            //
            // comentBl.append(topComent);


           // var comentBloc = li.appendChild(div).classList.add('list-coment-bloc');
           // var topComent = document.createElement('div').classList.add('top-coment-list');
           // comentBloc.appendChild(topComent);


            console.log(ul);
            // var name= data.get("name"),
            //     digniti = data.get("digniti"),
            //     disadvantages = data.get("disadvantages"),
            //     coment = data.get("coment");

        }

    }


    formValid();
})();