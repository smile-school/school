(function () {
    function formValid(a) {
        var self = this;
        this.parament = {
            myForm:document.querySelector('#comentForm'),
            myForm2:document.querySelector('#comentForm2'),
            starInp:document.querySelector('.star-bloc'),
            comentCou : document.querySelector('.number-ret'),
        };
        this.parament.myForm.addEventListener('submit', parsForm);


        function parsForm(e) {
            e.preventDefault();
            var data = new FormData(this);
            validForms(data,e);
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

        function validForms(data,e) {
            var validationEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            var  elementForm = {
                textComent: document.querySelector('#comment-input'),
                nameComent: document.querySelector('#name-input'),
                emailComent: document.querySelector('#email-input'),
                benefitsComent: document.querySelector('#digniti-input'),
                disadvadComent: document.querySelector('#disadvantages-input'),
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
                Valid(data,e)
            }

        }

        function Valid(data,e) {
            this.elemForm = {};
            data.forEach(function (item, key) {
                if (key === 'name') this.elemForm.name = item;
                else if (key === 'digniti') this.elemForm.digniti = item;
                else if (key === 'disadvantages') this.elemForm.disadvantages = item;
                else if (key === 'coment') this.elemForm.coment = item;
            });
            AddedComent(data,e);

        }

        function AddedComent(data,e) {
            var  date = new Date(),
                curr_date = date.getDate(),
                curr_month = date.getMonth() + 1,
                curr_year = date.getFullYear(),
                setDate = curr_year + "-" + curr_month + "-" + curr_date,
                li = document.createElement('li'),
                ul = document.querySelector(".coment-list"),
                ul2= document.querySelector('.coment-list2');

            if(e.target.classList.contains('formComent')){
                ul.prepend(li);
            }
            else if(e.target.classList.contains('formComent2')){
                console.log('asd');
            }



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


            var comentFooter = createElem('div',{'class':'coment-footer'},undefined),
                answerButon = createElem('button',{'class':'answer-bottom'},'Ответить') ;

            comentFooter.appendChild(answerButon);

            var comentLice = createElem('div',{'class':'coment-lice'},undefined),
                svgLice = ' <i class="far fa-thumbs-up"></i>',
                svgDizLike=' <i class="far fa-thumbs-down"></i>',
                butonLice = createElem('button',{'class':'answer-bottom buton-lice'},svgLice);


            var like1 = createElem('span',{'class':'like1'},0);
            butonLice.appendChild(like1);
            comentLice.appendChild(butonLice);
            butonLice.addEventListener('click',counterLike(butonLice));

            var butonDiz = createElem('button',{'class':'answer-bottom lice buton-diz'});
            butonDiz.innerHTML+=svgDizLike;
            var like2 = createElem('span',{'class':'like2'},0);
            butonDiz.appendChild(like2);
            butonDiz.addEventListener('click',counterLike(butonDiz));
            comentLice.appendChild(butonDiz);
            comentFooter.appendChild(comentLice);
            topComent.appendChild(comentFooter);
            li.appendChild(topComent);

        }

        function remoteForm(data) {
            for (var key in data){
                data[key].value = "";

                if (data[key].classList.contains('erors')) {
                    data[key].classList.remove('erors');
                }
            }
        }

        function counterLike(elem) {
            var count = 0;
            return function () {
                count++;
                elem.children[1].innerHTML = count;
            }
        }



    }


    formValid();
})();
