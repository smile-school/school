/*---------------------------------------
----Варіант без тернарного оператора-----
----------------------------------------*/
(function () {
    function createPiramide(height) {
        if (+height && typeof +height != "number") {
            console.log("Incorrect value");
            return false;
        }
        var div = document.querySelector("#piramide"), char = '';
        for (var i = 0; i < +height; i++) {

            for (var j = +height - i; j > 0; j--) {
                char = "&nbsp;&nbsp;";
                div.innerHTML += char;
            }
            for (var k = 0; k <= i; k++) {
                char = "#";
                div.innerHTML += char;
            }
            for (var y = 0; y < 2; y++) {
                char = "&nbsp;&nbsp;";
                div.innerHTML += char;
            }
            for (var t = 0; t <= i; t++) {
                char = "#";
                div.innerHTML += char;
            }
            div.innerHTML += "<br/>";
        }
    }

    createPiramide(prompt("Enter height."));
})();
