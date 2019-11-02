(function () {
    function createPyramid(height){
        if(+height && typeof +height != 'number') return;
        var div = document.querySelector('#p'), char = '';
        for(var i = 0; i < +height; i++){
            for (var y = +height - 1; y >= 0; y--){
                char = (y <= i) ? '#' : '&nbsp';
                div.innerHTML += char;}
            div.innerHTML += '<br>'
        }
    }
    //createPyramid(prompt('Enter height: '))

    var arr = [1,2,3,4,5,6,'5',56];
    arr.forEach(function (value, index, array) {
        console.log(value, index, array)
    });
    for (var key in  arr){
        console.log(arr[key], key, arr)
    }

})();