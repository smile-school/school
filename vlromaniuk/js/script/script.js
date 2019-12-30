(function () {
    function createPyramid(height){
        if(+height && typeof +height != 'number') return;
        var div = document.querySelector('#p'), char = '';
        for (var i=0; i< +height; i++){
            for (var y = +height - 1; y>=0; y--){
                char = (y <= i) ? "#" : "&nbsp;";
                div.innerHTML += char;
            }
            div.innerHTML += "&nbsp;&nbsp;";
            for (var j = 0; j<= +height; j++){
                char = (j <= i) ? "#" : "&nbsp;";
                div.innerHTML += char;
            }
            div.innerHTML += '<br>'
        }
    }
    function createMatrix(heightt){
        if(+heightt && typeof +heightt != 'number') return;
        var span = document.querySelector('span'), mat = '';
        for (var i=0; i< +heightt; i++){
            for (var z = +heightt; z>=0; z--){
                mat = (z <= i) ? "0" : '1';
                span.innerHTML += mat;
            }
            span.innerHTML += "&nbsp;";
            for (var c = 0; c <= +heightt; c++){
                mat = (c <= i) ? "0" : "1";
                span.innerHTML += mat;
            }
            span.innerHTML += '<br>'
        }
    }
    createPyramid(prompt('Enter height: '))
    createMatrix(prompt('Enter height: '))

    /*var arr = [1,2,3,4,5,6,'5',56];
    arr.forEach(function (value, index, array) {
        console.log(value, index, array)
    });
    for (var key in  arr){
        console.log(arr[key], key, arr)
    }*/

})();