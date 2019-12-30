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

    /*function getUniqueIds(arr) {
        var container = document.querySelector('.ids'),
            uniqueIds = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (!uniqueIds.includes(arr[i][j])) {
                    uniqueIds.push(arr[i][j]);
                    /!*container.innerHTML += arr[i][j] + ',&nbsp;';*!/
                }
            }
        }
        return arr;
       /!* console.log(uniqueIds);*!/
    }*/

    function getID(ides) {
        var idArr = ides.toString().split(','),
            retArr = [], tmpArr = [];
        for (var i = 0; i < idArr.length; i++) {
            if (tmpArr[idArr[i]]) continue;
            tmpArr[idArr[i]] = 1;
            retArr.push(+idArr[i]);
        }
        sortArr(retArr);
        return retArr;
    }

    function sortArr(arr) {
        var flag = false, tmp = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                flag = true;
            }
        }
        if (flag) sortArr(arr);
    }

    var obj = {
        firstName: 'Vasya',
        lastName: 'Petrov',
        age: 18,
        education: ['hig', 'school', 'STEP'],
        say: talk,
    };

    var obj2 = {
        firstName: 'Petua',
        lastName: 'Ivanov',
        age: 18,
        education: ['hig', 'school', 'STEP'],
        say: talk,
    };

    function talk() {
        console.log(this);
        console.log(this.firstName + ' ' + this.lastName);
    }

    console.log(obj.say());

    /* console.time('start');
     getUniqueIds(ids);
     console.timeEnd('start');*/
    getID(ids);
    console.log(getID(ids));
})();
