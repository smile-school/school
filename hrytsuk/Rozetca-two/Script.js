(function () {

    function Form() {
        var btn = document.querySelector("#actForm"),
            actForm = document.querySelector(".action-form-bloc"),
            exidForm = document.querySelectorAll(".ehitForm");

        btn.addEventListener('click', function () {
            actForm.classList.add("acForm");
        });

        for (var elem of exidForm){
            elem.addEventListener("click", function () {
                actForm.classList.remove("acForm");
            })
        }

    }




Form();



})();