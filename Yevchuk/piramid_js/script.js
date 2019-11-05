(function () {
    function createPyramid(height) {
        height = +height;

        if (isNaN(height)) {
            alert("false value");
            createPyramid(prompt("Enter height"));

            return false;
        }

        var div = document.querySelector("#out");
        var matrix = [];

        for (var i = 0; i < height; i++) {

            matrix[i] = [];

            for (var j = 1; j <= (height * 2 + 2); j++) {
                matrix[i][j] = (j >= height - i && j < height + 1 || j <= height + i + 3 && j > height + 2) ? 1 : 0;
                div.innerHTML += matrix[i][j];
            }
            div.innerHTML += "<br/>";
        }
    }
    createPyramid(prompt('Enter height: '));
})()
