(function () {
    function createPiramide(height) {
        if (+height && typeof +height != "number") {
            console.log("Incorrect value");
            return false;
        }
        var div = document.querySelector("#piramide");
        var arr = [];
        for (var i = 0; i < +height; i++) {
            arr[i] = [];
            for (var y = 1; y <= (+height * 2 + 2); y++) {
                arr[i][y] = (y >= +height - i && y < +height + 1 || y <= +height + i + 3 && y > +height + 2) ? 1 : 0;
                div.innerHTML += (arr[i][y] + "&nbsp");
            }
            div.innerHTML += "<br/>"
        }
    }

    createPiramide(prompt("Enter height."));
})();
