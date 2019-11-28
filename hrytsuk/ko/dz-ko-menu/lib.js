var list = [
    {
        "title": "Борщ",
        "price": 80,
    },
    {
        "title": "Суп",
        "price": 50,

    },
    {
        "title": "Салат-Цезар",
        "price": 40,
    },
    {
        "title": "Салат-Мрія",
        "price": 25,
    },
    {
        "title": "Печене-мясо",
        "price": 90
    },
    {
        "title": "Пивна-нарізка",
        "price": 150
    },
    {
        "title": "Горілка",
        "price": 130
    },
    {
        "title": "Пиво",
        "price": 35
    },
    {
        "title": "Картопля-тушена",
        "price": 60
    }
];

function getCourse() {
    if (list.length > 0) {
        return list.splice(array_rand(list, 1), 1)[0];
    } else {
        alert('Курсов больше нет');
        return {};
    }
}


function array_rand(input, num_req) {
    var indexes = [];
    var ticks = num_req || 1;
    var checkDuplicate = function (input, value) {
        var exist = false,
            index = 0,
            il = input.length;
        while (index < il) {
            if (input[index] === value) {
                exist = true;
                break;
            }
            index++;
        }
        return exist;
    };

    if (Object.prototype.toString.call(input) === '[object Array]' && ticks <= input.length) {
        while (true) {
            var rand = Math.floor((Math.random() * input.length));
            if (indexes.length === ticks) {
                break;
            }
            if (!checkDuplicate(indexes, rand)) {
                indexes.push(rand);
            }
        }
    } else {
        indexes = null;
    }

    return ((ticks == 1) ? indexes.join() : indexes);
}

var work = [
    'Школьник',
    'Студент',
    'Рабочий',
    'Олихгарх',
    'Креакл'
];
var coursesList = [
    {title: 'HTML', value: "html"},
    {title: 'JavaScript-1', value: "js-1"},
    {title: 'JavaScript-2', value: "js-2"},
    {title: 'jQuery', value: "jq"},
    {title: 'PHP-1', value: "php-1"},
    {title: 'PHP-2', value: "php-2"}
];
