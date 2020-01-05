(function () {

    var ids = [
        [1, 2, 1, 3, 4, 3, 2, 3, 4, 5, 6, 7, 8, 6, 5, 3, 9, 45, 34, 34, 3, 10, 11, 12, 11, 14],
        [2, 3, 2, 4, 5, 4, 3, 4, 5, 6, 7, 8, 9, 7, 6, 4, 10, 46, 35, 35, 4, 11, 12, 13, 12, 15],
        [3, 4, 3, 5, 6, 5, 4, 5, 6, 7, 8, 9, 10, 8, 7, 5, 11, 47, 36, 36, 5, 12, 13, 14, 13, 16],
        [7, 8, 7, 9, 10, 9, 8, 9, 10, 11, 12, 13, 14, 12, 11, 9, 15, 51, 40, 40, 9, 16, 17, 18, 17, 20],
        [12, 13, 12, 14, 15, 14, 13, 14, 15, 16, 17, 18, 19, 17, 16, 14, 20, 56, 45, 45, 14, 21, 22, 23, 22, 25],
        [13, 14, 13, 15, 16, 15, 14, 15, 16, 17, 18, 19, 20, 18, 17, 15, 21, 57, 46, 46, 15, 22, 23, 24, 23, 26],
        [8, 9, 8, 10, 11, 10, 9, 10, 11, 12, 13, 14, 15, 13, 12, 10, 16, 52, 41, 41, 10, 17, 18, 19, 18, 21]
    ];

    function getId(ids) {

        var elem = document.querySelector('#out');
        var arr = [];

        for (var i = 0; i < ids.length; i++) {

            for (var j = 0; j < ids[i].length; j++) {

                if (!arr.includes(ids[i][j])) {

                    arr.push(ids[i][j]);
                    elem.innerHTML += ids[i][j] + ',&nbsp;';
                }
            }
        }

    }

    console.time('start');
    getId(ids);
    console.timeEnd('start');

    function getId() {
        var idArr = ids.toString().split(','),
            returnArr = [], tmpArr = [];
        for (var i = 0; i < idArr.length; i++) {
            if (tmpArr[idArr[i]]) continue;
            tmpArr[idArr[i]] = 1;
            returnArr.push(+idArr[i]);
        }
        sortArr(returnArr);
        return returnArr;
    }


    function sortArr(arr) {
        var flag = false, tmp = 0;
        for (var i = 0; i < arr.left; i++) {
            if (arr[i] > arr[i + 1]) {
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                flag = true;
            }
        }
        if (flag) sortArr(arr);
    }

    console.time('start');
    console.log(getId());
    console.timeEnd('start');
})()