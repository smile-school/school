(function () {

    var self = this;
    function Form() {
        var btn = document.querySelector("#actForm"),
            actForm = document.querySelector(".action-form-bloc"),
            exidForm = document.querySelectorAll(".ehitForm"),
            acForm = "acForm";

        btn.addEventListener('click', function () {
            actForm.classList.add(acForm);
        });

        exidForm.forEach(elem =>{
            elem.addEventListener('click',function () {
                actForm.classList.remove(acForm);
            })
        });

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
        function createElem(elem, attr,text) {
            if (!elem) return false;
            var el = document.createElement(elem);
            if (attr){
                for (var key in attr){
                    el.setAttribute(key,attr[key]);
                }

            }
            if (text){
                el.innerHTML += text;
            }
            return el;
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
                // reting = 0.5;

             // var star = document.querySelectorAll('.rat');
             // star.forEach(items=>{
             //     items.addEventListener('click',function (event) {
             //         itemss = +(event.target.dataset.rating) / 5;
             //         return itemss;
             //     });
             // });

            data.forEach(function (item,key){
                if (key === 'name') name = item;
                else if(key ==='rating') rating = itemss;
                else if (key === 'digniti') digniti = item;
                else if (key === 'disadvantages') disadvantages = item;
                else if (key === 'coment') coment = item;
                else if (key === 'url-yotube') urlYotube = item.split('v=')[1];

            });






            var li = document.createElement('li');

            ul.append(li);

             var topComent = createElem('div',{'class':'list-coment-bloc'},undefined) ;
             var comentBloc = createElem('div',{'class':'top-coment-list top-coment'},undefined) ;
             var pTop = createElem('p',undefined,undefined);
             var nameList =createElem('span',{'class':'name-list'},name);
             var todauList = createElem('span',{'class':'todau-list'},undefined);
             var time = createElem('time',undefined,setDate);

            todauList.appendChild(time);

            todauList.innerHTML+=  '<svg aria-hidden="true" height="16" width="16"><use xlink:href="#icon-report"'+
            'xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg>';
            pTop.appendChild(nameList);
            pTop.appendChild(todauList);
            comentBloc.appendChild(pTop);
            topComent.appendChild(comentBloc);
             var star = '<svg class="star-reid" viewBox="0 0 64 12" aria-label="Рейтинг товара">\n' +
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

            var reting = createElem('div',{'class':'reting'},star) ;


            topComent.appendChild(reting);
            var interest = createElem('span',{'class':'interest'},undefined) ;
            topComent.appendChild(interest);

             var comentText = createElem('div',{'class':'coment-text'},undefined) ;
            var coments = createElem('p',{'class':'coment'},coment) ;
            comentText.appendChild(coments);

            var characterBloc = createElem('dl',{'class':'character-bloc'}) ;
            var dt1 = createElem('dt',{'class':'character-bloc'},'Достоинства:') ;

            var dd1 = createElem('dd',undefined,digniti) ;
            characterBloc.appendChild(dt1);
            characterBloc.appendChild(dd1);
            comentText.appendChild(characterBloc);
            topComent.appendChild(comentText);

            var characterBloc2 = characterBloc.cloneNode(false);

            var dt2 = createElem('dt',undefined,'Недостатки:') ;
            var dd2 = createElem('dd',undefined,digniti) ;
            characterBloc2.appendChild(dt2);
            characterBloc2.appendChild(dd2);
            comentText.appendChild(characterBloc2);

             var ifreme = '<iframe width="560" height="315"  src="https://www.youtube.com/embed/' + urlYotube + '" frameborder="0"' +
                 'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            var video = createElem('div',{'class':'video'},ifreme) ;

            topComent.appendChild(video);

             var comentFooter = createElem('div',{'class':'coment-footer'},undefined) ;
             var svgRetur = '<svg aria-hidden="true" height="12" width="12">\n' +
                 '                                            <use xlink:href="#icon-return"\n' +
                 '                                                 xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                 '                                        </svg>';
             var answerButon = createElem('button',{'class':'answer-bottom'},svgRetur+'Ответить') ;

            comentFooter.appendChild(answerButon);

             var comentLice = createElem('div',{'class':'coment-lice'},undefined) ;
             var svgLice = '<svg aria-hidden="true" height="16" width="16">\n' +
                 '                                                <use xlink:href="#icon-thumb-up"\n' +
                 '                                                     xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                 '                                            </svg>';
             var butonLice = createElem('button',{'class':'answer-bottom buton-lice'},svgLice);


            var like1 = createElem('span',{'class':'like'},'0');

            butonLice.appendChild(like1);
            comentLice.appendChild(butonLice);

             var butonDiz = createElem('button',{'class':'answer-bottom lice buton-diz'});
            butonDiz.innerHTML+=svgLice;
             var like2 = createElem('span',{'class':'like'},0);

            butonDiz.appendChild(like2);
            comentLice.appendChild(butonDiz);
            comentFooter.appendChild(comentLice);

            topComent.appendChild(comentFooter);

            li.appendChild(topComent);


            var form = document.querySelector('.action-form-bloc');
             form.classList.remove('acForm');


        }

    }


    formValid();
})();