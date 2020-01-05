var service = {
    createElement: function (descriptor, classes = "", children = null, text = "", attributes = null) {
        var element = {
            descriptor: descriptor,
        };
        if (classes) {
            element.classes = classes;
        }
        if (text) {
            element.text = text;
        }
        if (attributes) {
            element.attributes = attributes;
        }
        if (children) {
            element.children = children;
        }
        return element;
    },
    getFullMonth: function (numberOfMonth) {
        switch (+numberOfMonth + 1) {
            case 1:
                return "January";
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
        }
    },
    getCurrentDate: function () {
        var date = new Date();
        return  (date.getDate() + " " + this.getFullMonth(date.getMonth()) + " " + date.getFullYear());
    },
    createRatingStars: function (rating) {
        var wrap = [], classes;
        var star_icon = this.createElement("i", "fas, fa-star");
        for (var i = 0; i < 5; i++){
            classes = (i < rating) ? "star-js, active-star" : "star-js";
            wrap[i] = this.createElement("span", classes, [star_icon]);
        }
        return wrap;
    },
    clearFormFields: function (form) {
        for (var i = 0; i < form.elements.length; i++) {
            var fieldType = form.elements[i].type.toLowerCase();
            switch (fieldType) {
                case "text":
                case "textarea":
                    form.elements[i].value = "";
                    break;
                case "radio":
                    if (form.elements[i].checked) {
                        form.elements[i].checked = false;
                    }
                    break;
                default:
                    break;
            }
        }
    },
};
