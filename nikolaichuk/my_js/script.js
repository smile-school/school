(function () {
    /*-----1 class work-----*/
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

    /*------2 class work-----*/
    var ids = [
        [1, 2, 1, 3, 4, 3, 2, 3, 4, 5, 6, 7, 8, 6, 5, 3, 9, 45, 34, 34, 3, 10, 11, 12, 11, 14],
        [2, 3, 2, 4, 5, 4, 3, 4, 5, 6, 7, 8, 9, 7, 6, 4, 10, 46, 35, 35, 4, 11, 12, 13, 12, 15],
        [3, 4, 3, 5, 6, 5, 4, 5, 6, 7, 8, 9, 10, 8, 7, 5, 11, 47, 36, 36, 5, 12, 13, 14, 13, 16],
        [7, 8, 7, 9, 10, 9, 8, 9, 10, 11, 12, 13, 14, 12, 11, 9, 15, 51, 40, 40, 9, 16, 17, 18, 17, 20],
        [12, 13, 12, 14, 15, 14, 13, 14, 15, 16, 17, 18, 19, 17, 16, 14, 20, 56, 45, 45, 14, 21, 22, 23, 22, 25],
        [13, 14, 13, 15, 16, 15, 14, 15, 16, 17, 18, 19, 20, 18, 17, 15, 21, 57, 46, 46, 15, 22, 23, 24, 23, 26],
        [8, 9, 8, 10, 11, 10, 9, 10, 11, 12, 13, 14, 15, 13, 12, 10, 16, 52, 41, 41, 10, 17, 18, 19, 18, 21]
    ];

    //console.time('start');
    //console.timeEnd('start');

    function getId(idsArr) {
        if (!Array.isArray(idsArr)) return;
        var idArr = ids.toString().split(','),
            returnArr = [], tmpArr = []
        for(var i = 0; i < idArr.length; i++){
            if(tmpArr[idArr[i]])continue;
            tmpArr[idArr[i]] = 1;
            returnArr.push(+idArr[i]);
        }
        sortArr(returnArr);
        return returnArr;
    }

    function sortArr(arr){
        var flag = false, tmp = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                flag = true;
            }
        }
        if(flag) sortArr(arr);
    }
    console.time('start');
    console.log(getId(ids));
    console.timeEnd('start');

    var obj = {
        firstName: "Vasya",
        lastName: "Petrov",
        age: 18,
        education: ["hight school", "Step"],
        say: say
    };
    var obj2 = {
        firstName: "Petya",
        lastName: "Ivanov",
        age: 18,
        education: ["hight school", "Step"],
        say: say
    };
    function say(){
        var self = this;
        setTimeout(function () {
            console.log(self.firstName + " " + self.lastName);
        }, 1000);
    }

    function Persona(firsName, lastName, age){
        this.firstName = firsName || "Vasya";
        this.lastName = lastName || "Ivanov";
        this.age = age || 20;
        /*this.say = say;*/
    }
    Persona.prototype.say = say;
    var vasya = new Persona("Vasya", "Petrov", 15);
    console.log(vasya);
    //console.log(obj.say(), obj2.say());

    /*function counter() {
        var count = 0;
        return function () {
            console.log(count);
            return ++count;
        }
    }
    var count1 = counter(),
        count2 = counter(),
        button1 = document.querySelector('#d1').addEventListener('click', count1);*/
    /*console.log(button1());
    console.log(button1());
    console.log(button2());
    console.log(button1());
    console.log(button2());
    console.log(button1());*/
})();