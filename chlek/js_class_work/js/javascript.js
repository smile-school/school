(function () {
    function createPiramide(height) {
        if (+height && typeof +height != "number") {
            console.log("Incorrect value");
            return false;
        }
        var div = document.querySelector("#piramide"), char = '';
        for (var i = 0; i < +height; i++) {
            for (var y = +height - 1; y >= 0; y--) {
                char = (y <= i) ? "#" : "&nbsp";
                div.innerHTML += char;
            }
            div.innerHTML += "<br/>"
        }

    }
    createPiramide(prompt("Enter height."));
})();
