(function () {
    function form() {
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
            })
        });

    }

    form();


    function setCount(spn) {
        spn.innerHTML = this.option.counts + ++spn.textContent;
    }
    function Counter(param) {
        this.option = {
            btn:{
                like : document.querySelectorAll(param.like),
                dizLike : document.querySelectorAll(param.dizLike),
            },
            counts : param.countLIke,
        };
        for (var key in this.option.btn){
            if (key === 'like' ||  key === 'dizLike'){
                for (var i =0; i<this.option.btn[key].length;i++){
                    this.option.btn[key][i].addEventListener('click',function () {
                        var spn = this.children[1];
                        counter.setCount(spn);
                    });
                }
            }

        }
    }

    Counter.prototype.setCount = setCount;

    var counter = new Counter({
        like:'.buton-lice',
        dizLike : '.buton-diz',
        countLIke:0,
    });



})();
