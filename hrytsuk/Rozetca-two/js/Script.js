(function () {
    function FormValid(a) {
        var self = this;
        this.parament = {
            ratings : 0,
            myForm:document.querySelector('#comentForm'),
            starInp:document.querySelector('.star-bloc'),
            comentCou : document.querySelector('.number-ret'),
        };
        this.parament.myForm.addEventListener('submit', parsForm);

        this.parament.starInp.addEventListener('click', ratingCounter) ;


        function parsForm(e) {
            e.preventDefault();
            var data = new FormData(this);
            validForms(data);
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


        function ratingCounter(event) {
            if (event.target.tagName === 'LABEL'){
                self.parament.elements = +(event.target.dataset.ret) / 5;
                return self.parament.elements;
            }
            else if(event.target.tagName === 'use'){
               var label =  event.target.closest('.rat');
                self.parament.elements = +(label.dataset.ret) / 5;
                return self.parament.elements;
            }

        }

        function validForms(data) {
            var validationEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            var  elementForm = {
                textComent: document.querySelector('#comment-input'),
                nameComent: document.querySelector('#name-input'),
                emailComent: document.querySelector('#email-input'),
                benefitsComent: document.querySelector('#digniti-input'),
                disadvadComent: document.querySelector('#disadvantages-input'),
                youtubeUrl: document.querySelector('#yotube-input'),
            };

            if (!validationEmail.test(elementForm.emailComent.value)) {
                elementForm.emailComent.classList.add('erors');
            }
            if (elementForm.nameComent.value.length < 1 || elementForm.nameComent.value.length > 40) {
                elementForm.nameComent.classList.add('erors');
            }
            if (elementForm.textComent.value.length < 10 || elementForm.textComent.value.length > 140) {
                elementForm.textComent.classList.add('erors');
            }
            if (validationEmail.test(elementForm.emailComent.value) &&
                elementForm.nameComent.value.length > 1 &&
                elementForm.nameComent.value.length < 40 &&
                elementForm.textComent.value.length > 10) {
                remoteForm(elementForm);
                Valid(data)
            }

        }

         function Valid(data) {
             this.elemForm = {};

             data.forEach(function (item, key) {
                 if (key === 'name') this.elemForm.name = item;
                 else if (key === 'rating') this.elemForm.rating = self.parament.elements;
                 else if (key === 'digniti') this.elemForm.digniti = item;
                 else if (key === 'disadvantages') this.elemForm.disadvantages = item;
                 else if (key === 'coment') this.elemForm.coment = item;
                 else if (key === 'url-yotube') this.elemForm.urlYotube = item.split('v=')[1];
             });
             AddedComent(data);

         }

         function AddedComent(e) {
            var  date = new Date(),
                curr_date = date.getDate(),
                curr_month = date.getMonth() + 1,
                curr_year = date.getFullYear(),
                setDate = curr_year + "-" + curr_month + "-" + curr_date,

             li = document.createElement('li'),

             ul = document.querySelector(".coment-list");
            ul.prepend(li);

             var topComent = createElem('div',{'class':'list-coment-bloc'},undefined),
                 comentBloc = createElem('div',{'class':'top-coment-list top-coment'},undefined),
                 pTop = createElem('p',undefined,undefined),
                nameList =createElem('span',{'class':'name-list'},this.elemForm.name),
                 todauList = createElem('span',{'class':'todau-list'},undefined),
                 time = createElem('time',undefined,setDate);

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
                 '                <stop stop-color="#ffa900" stop-opacity="1" offset="' + this.elemForm.rating + '"></stop>\n' +
                 '                <stop attr.offset="100%" stop-color="#d2d2d2" stop-opacity="1"></stop>\n' +
                 '            </linearGradient>\n' +
                 '        </defs>\n' +
                 '        <path d="M11.91,4.88,9.28,7.57a.3.3,0,0,0-.08.27l.62,3.8a.3.3,0,0,1-.43.32L6.14,10.17a.28.28,0,0,0-.28,0L2.61,12a.3.3,0,0,1-.43-.32l.62-3.8a.3.3,0,0,0-.08-.27L.09,4.88a.31.31,0,0,1,.16-.53L3.89,3.8a.32.32,0,0,0,.22-.17L5.73.17a.3.3,0,0,1,.54,0L7.89,3.63a.32.32,0,0,0,.22.17l3.64.55A.31.31,0,0,1,11.91,4.88Zm12.84-.53L21.11,3.8a.32.32,0,0,1-.22-.17L19.27.17a.3.3,0,0,0-.54,0L17.11,3.63a.32.32,0,0,1-.22.17l-3.64.55a.31.31,0,0,0-.16.53l2.63,2.69a.3.3,0,0,1,.08.27l-.62,3.8a.3.3,0,0,0,.43.32l3.25-1.79a.28.28,0,0,1,.28,0L22.39,12a.3.3,0,0,0,.43-.32l-.62-3.8a.3.3,0,0,1,.08-.27l2.63-2.69A.31.31,0,0,0,24.75,4.35Zm13,0L34.11,3.8a.32.32,0,0,1-.22-.17L32.27.17a.3.3,0,0,0-.54,0L30.11,3.63a.32.32,0,0,1-.22.17l-3.64.55a.31.31,0,0,0-.16.53l2.63,2.69a.3.3,0,0,1,.08.27l-.62,3.8a.3.3,0,0,0,.43.32l3.25-1.79a.28.28,0,0,1,.28,0L35.39,12a.3.3,0,0,0,.43-.32l-.62-3.8a.3.3,0,0,1,.08-.27l2.63-2.69A.31.31,0,0,0,37.75,4.35Zm13,0L47.11,3.8a.32.32,0,0,1-.22-.17L45.27.17a.3.3,0,0,0-.54,0L43.11,3.63a.32.32,0,0,1-.22.17l-3.64.55a.31.31,0,0,0-.16.53l2.63,2.69a.3.3,0,0,1,.08.27l-.62,3.8a.3.3,0,0,0,.43.32l3.25-1.79a.28.28,0,0,1,.28,0L48.39,12a.3.3,0,0,0,.43-.32l-.62-3.8a.3.3,0,0,1,.08-.27l2.63-2.69A.31.31,0,0,0,50.75,4.35Zm13.16.53a.31.31,0,0,0-.16-.53L60.11,3.8a.32.32,0,0,1-.22-.17L58.27.17a.3.3,0,0,0-.54,0L56.11,3.63a.32.32,0,0,1-.22.17l-3.64.55a.31.31,0,0,0-.16.53l2.63,2.69a.3.3,0,0,1,.08.27l-.62,3.8a.3.3,0,0,0,.43.32l3.25-1.79a.28.28,0,0,1,.28,0L61.39,12a.3.3,0,0,0,.43-.32l-.62-3.8a.3.3,0,0,1,.08-.27Z"\n' +
                 '              fill="url(#ratingFill_44730882)"></path>\n' +
                 '    </g>\n' +
                 '</svg>';

            var reting = createElem('div',{'class':'reting'},star) ;


             if (this.elemForm.rating){
                 topComent.appendChild(reting);
             }
             var interest = createElem('span',{'class':'interest'},undefined) ;
            topComent.appendChild(interest);

             var comentText = createElem('div',{'class':'coment-text'},undefined),
             coments = createElem('p',{'class':'coment'},this.elemForm.coment) ;
            comentText.appendChild(coments);

            var characterBloc = createElem('dl',{'class':'character-bloc'}),
             dt1 = createElem('dt',{'class':'character-bloc'},'Достоинства:'),
             dd1 = createElem('dd',undefined,this.elemForm.digniti);

            if (this.elemForm.digniti){
                characterBloc.appendChild(dt1);
                characterBloc.appendChild(dd1);
            }

            comentText.appendChild(characterBloc);
            topComent.appendChild(comentText);

            var characterBloc2 = characterBloc.cloneNode(false),

            dt2 = createElem('dt',undefined,'Недостатки:'),
             dd2 = createElem('dd',undefined,this.elemForm.disadvantages) ;

            if (this.elemForm.disadvantages){
                characterBloc2.appendChild(dt2);
                characterBloc2.appendChild(dd2);
            }

            comentText.appendChild(characterBloc2);

            if (this.elemForm.urlYotube){
                var ifreme = '<iframe width="560" height="315"  src="https://www.youtube.com/embed/' + this.elemForm.urlYotube + '" frameborder="0"' +
                             'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                 video = createElem('div',{'class':'video'},ifreme) ;

                topComent.appendChild(video);
            }

             var comentFooter = createElem('div',{'class':'coment-footer'},undefined),
                 svgRetur = '<svg aria-hidden="true" height="12" width="12">\n' +
                 '                                            <use xlink:href="#icon-return"\n' +
                 '                                                 xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                 '                                        </svg>',
                 answerButon = createElem('button',{'class':'answer-bottom'},svgRetur+'Ответить') ;

                 comentFooter.appendChild(answerButon);

             var comentLice = createElem('div',{'class':'coment-lice'},undefined),
                 svgLice = '<svg aria-hidden="true" height="16" width="16">\n' +
                 '                                                <use xlink:href="#icon-thumb-up"\n' +
                 '                                                     xmlns:xlink="http://www.w3.org/1999/xlink"></use>\n' +
                 '                                            </svg>',

                 butonLice = createElem('button',{'class':'answer-bottom buton-lice'},svgLice);


            var like1 = createElem('span',{'class':'like1'},0);
            butonLice.appendChild(like1);
            comentLice.appendChild(butonLice);
            butonLice.addEventListener('click',counterLike(butonLice));

             var butonDiz = createElem('button',{'class':'answer-bottom lice buton-diz'});
                 butonDiz.innerHTML+=svgLice;
             var like2 = createElem('span',{'class':'like2'},0);
                 butonDiz.appendChild(like2);
                 butonDiz.addEventListener('click',counterLike(butonDiz));
                 comentLice.appendChild(butonDiz);
                comentFooter.appendChild(comentLice);

                 topComent.appendChild(comentFooter);
                 li.appendChild(topComent);

            var form = document.querySelector('.action-form-bloc');
             form.classList.remove('acForm');
        }

        function remoteForm(data) {
            for (var key in data){
                data[key].value = "";

                if (data[key].classList.contains('erors')) {
                    data[key].classList.remove('erors');
                }

            }
            countComent();

        }
        function countComent() {
            +(self.parament.comentCou.innerHTML)++;
        }
        function counterLike(elem) {
            var count = 0;
            return function () {
                count++;
                elem.children[1].innerHTML = count;
            }
        }
    }


    FormValid();
})();
