(function () {
    var openFormBtn = document.querySelector(".openFormBtn-js"),
        pageOverlay = document.querySelector(".page-overlay"),
        formRespond = document.querySelector("#form-respond"),
        cancelRespond = document.querySelector(".cancelRespondBtn-js");
    
    openFormBtn.addEventListener('click', function () {
        pageOverlay.classList.add("show");
    });
    
    cancelRespond.addEventListener("click",function () {
        pageOverlay.classList.remove("show");
        clearFormFields(formRespond);
    });
    
    formRespond.addEventListener("submit", function () {
        var data = new FormData(this);
        data.forEach(function (item, key) {
            console.log(key + " - " + item);
        })
    });
    
    function clearFormFields(form) {
        console.log(form.elements);
        for (var i = 0; i < form.elements.length; i++){
            if(form.elements[i].value){
                form.elements[i].value = "";
            }
        }
    }
})();
