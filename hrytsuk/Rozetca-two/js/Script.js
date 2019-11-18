(function () {

    function Form() {
        var btn = document.querySelector("#actForm"),
            actForm = document.querySelector(".action-form-bloc"),
            exidForm = document.querySelectorAll(".ehitForm"),
            acForm = "acForm";

        btn.addEventListener('click', function () {
            actForm.classList.add(acForm);
        });

        for (var elem of exidForm){
            elem.addEventListener("click", function () {
                actForm.classList.remove(acForm);
            })
        }

    }

Form();

    function setCount(spn) {
        spn.innerHTML = this.counts + ++spn.textContent;
    }
    function Counter (elem, count){
        this.targetElem = elem;
        this.counts = count;
        for (var i = 0; i < elem.length; i++){
            this.targetElem[i].addEventListener("click", function () {
                var spn = this.children[1];
                counter.setCount(spn);
            });
        }
    }
    Counter.prototype.setCount = setCount;
    var counter = new Counter(document.querySelectorAll('.buton-lice'), 0);






    var myForm = document.getElementById('comentForm');


    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(this);

       var name= data.get("rating");
        console.log(name);
    })



})();