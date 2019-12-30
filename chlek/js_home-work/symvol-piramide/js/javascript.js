/*---------------------------------------
-----Варіант з тернарним оператором------
----------------------------------------*/
(function () {
    function createPiramide(height) {
        if (+height && typeof +height != "number") {
            console.log("Incorrect value");
            return false;
        }
        var div = document.querySelector("#piramide"), char = '';
        for (var i = 0; i < +height; i++) {
            for (var y = 0; y <= (+height * 2 + 2); y++) {
                char = (y >= +height - i && y < +height + 1 || y <= +height + i + 3 && y > +height + 2) ? "#" : "&nbsp;&nbsp";
                div.innerHTML += char;
            }
            div.innerHTML += "<br/>"
        }
    }

    createPiramide(prompt("Enter height."));
})();
