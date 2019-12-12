(function () {
    function Form() {
        var btn = document.querySelector("#actForm"),
            actForm = document.querySelector(".action-form-bloc"),
            exidForm = document.querySelectorAll(".ehitForm"),
            comentForm = document.querySelector('#comentForm'),
            acForm = "acForm";

        btn.addEventListener('click', function () {
            actForm.classList.add(acForm);
        });

        exidForm.forEach(elem =>{
            elem.addEventListener('click',function () {
                actForm.classList.remove(acForm);
                // clearForm(comentForm);
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



})();
