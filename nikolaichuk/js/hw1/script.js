(function () {
    function createPiramide(height) {
        height = +height;
        if(height && typeof (height) != 'number') return;
        var div = document.querySelector("#container"), char = "";
        for (var i = 0; i < height; i++){
          for (var j = height - 1; j >= 0; j--){
              char = (j <= i) ? "#" : "_";
              div.innerHTML += char;
          }
          div.innerHTML += "__";
          for (var k = 0; k < height; k++){
              char = (k <= i) ? "#" : "_";
              div.innerHTML += char;
          }
          div.innerHTML += "<br/>";
        }
    }

    createPiramide(prompt("Enter height: "));

    var ids = [
        [1, 2, 1, 3, 4, 3, 2, 3, 4, 5, 6, 7, 8, 6, 5, 3, 9, 45, 34, 34, 3, 10, 11, 12, 11, 14],
        [2, 3, 2, 4, 5, 4, 3, 4, 5, 6, 7, 8, 9, 7, 6, 4, 10, 46, 35, 35, 4, 11, 12, 13, 12, 15],
        [3, 4, 3, 5, 6, 5, 4, 5, 6, 7, 8, 9, 10, 8, 7, 5, 11, 47, 36, 36, 5, 12, 13, 14, 13, 16],
        [7, 8, 7, 9, 10, 9, 8, 9, 10, 11, 12, 13, 14, 12, 11, 9, 15, 51, 40, 40, 9, 16, 17, 18, 17, 20],
        [12, 13, 12, 14, 15, 14, 13, 14, 15, 16, 17, 18, 19, 17, 16, 14, 20, 56, 45, 45, 14, 21, 22, 23, 22, 25],
        [13, 14, 13, 15, 16, 15, 14, 15, 16, 17, 18, 19, 20, 18, 17, 15, 21, 57, 46, 46, 15, 22, 23, 24, 23, 26],
        [8, 9, 8, 10, 11, 10, 9, 10, 11, 12, 13, 14, 15, 13, 12, 10, 16, 52, 41, 41, 10, 17, 18, 19, 18, 21]
    ];
    var res = [];

    function createSortList() {
        for (var i = 0; i < ids.length; i++){
            for (var j = 0; j < ids[i].length; j++){
                if (isUniq(ids[i][j])){
                    addElement(ids[i][j]);
                }
            }
        }
    }
    function isUniq(id) {
        for (var i = 0; i < res.length; i++){
            if(id === res[i]){
                return false;
            }
        }
        return true;
    }

    function addElement(id) {
        if(res.length == 0){
            res.push(id);
            return;
        }
        else if (res.length == 1){
            (res[0] < id) ? res.push(id) : res.unshift(id);
            return;
        }
        for(var i = 0; i < res.length; i++){
            if (i == res.length-1){
                (res[i] < id) ? res.push(id) : res.splice(i, 0, id);
                break;
            }
            if (res[i] > id){
                if (i == 0){
                    res.unshift(id);
                    break;
                }
                else {
                    res.splice(i, 0, id);
                    break;
                }
            }
        }
    }
    createSortList();
    console.log(res);
})();