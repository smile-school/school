(function () {
    function createPiramide(height) {
        height = +height;
        if(height && typeof (height) != 'number') return;
        var div = document.querySelector("#container"), char = "";
        for (var i = 0; i < height; i++){
          for (var j = height - 1; j >= 0; j--){
              char = (j <= i) ? "#" : "&nbsp;";
              div.innerHTML += char;
          }
          div.innerHTML += "<br/>";
        }
    }
    createPiramide(prompt("Enter height: "));

    var arr = [1, 2, 8, true, 5, 6, 'd'];
    arr.forEach(function (value, i, array) {
        console.log(value, i, array[i+1]);
    });

    for(var key in arr){
        console.log(arr[key], key, arr);
    }

    arr.push('vbhkn');
    console.log(Array.isArray(arr));

    arr.splice(1,1);//delete
    arr.splice(1,0,"111");//add

    var str = "name, name2, name3, name4";
    var p = str.split(',');
    console.log(p.join('=>'));
})();