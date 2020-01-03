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
    createSVG: function (idSVG, widthSVG, heightSVG, classes = "") {
        var use =
                this.createElement("use", undefined, undefined, undefined, {"xlink:href": idSVG}),
            svg =
                this.createElement("svg", classes, [use], undefined, {width: widthSVG, height: heightSVG});
        return svg;
    },
    getFullMonth: function (numberOfMonth) {
        switch (+numberOfMonth + 1) {
            case 1:
                return "января";
            case 2:
                return 'февраля';
            case 3:
                return 'марта';
            case 4:
                return 'апреля';
            case 5:
                return 'мая';
            case 6:
                return 'июня';
            case 7:
                return 'июля';
            case 8:
                return 'августа';
            case 9:
                return 'сентября';
            case 10:
                return 'октября';
            case 11:
                return 'ноября';
            case 12:
                return 'декабря';
        }
    },
    getCurrentDate: function () {
        var date = new Date();
        return  (date.getDate() + " " + this.getFullMonth(date.getMonth()) + " " + date.getFullYear());
    },
    createRatingStars: function (rating) {
        var wrap = [], classes;
        for (var i = 0; i < 5; i++){
            classes = (i < rating) ? "star-js, active-star" : "star-js";
            wrap[i] = this.createSVG("#rating-star", 14, 14, classes);
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
