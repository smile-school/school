function Course(title, price, reqs, discount) {
    this.title = ko.observable(title);
    this.price = ko.observable(price);
    this.reqs = (reqs) ? reqs : [];
    this.discount = ko.observable((discount) ? discount : 0);
    this.discountText = ko.computed(function () {
        return "Discount " + this.discount() + '% <br> New price: ' + (this.price() - this.discount() / 100 * this.price());
    }, this);
    this.sale = function () {
        return ((this.discount() > 40) ? 'sale' : 'small-sale');
    }
}

function Custer() {
    this.wasDellCourse = ko.observableArray([]);

    this.courseList = ko.observableArray([
        new Course('HTML/CSS', 9150, [], 30),
        new Course('WebMastering', 13400, ['HTML/CSS'], 50),
        new Course('JavaScript', 15150, ['HTML/CSS', 'WebMastering'], 10),

    ]);

    this.setName = function () {
        this.name(prompt('What is your name', this.name()));
    };

    this.setLocation = function () {
        this.location(prompt('From where you are?', this.location()));
    };

    this.addCourse = function () {
        var newCourse = getCourse();
        ('title' in newCourse) && this.courseList.push(new Course(newCourse.title, newCourse.price, newCourse.reqs));
    };

    this.removeCourse = function (course) {
        if(!this.wasDellCourse().length){
            var table = document.querySelector('.rem-table');
            table.classList.add('active');
        }
        this.wasDellCourse.push(arguments[0]);
        this.courseList.remove(course);

        console.log(this.wasDellCourse());
    }.bind(this);

    this.restoreCourse = function (course) {
        this.wasDellCourse.remove(course);
        this.courseList.push(arguments[0]);
        console.log(arguments);
    }.bind(this);

    this.delCourse = function (course) {
        this.wasDellCourse.remove(course);
        if(!this.wasDellCourse().length){
            var table = document.querySelector('.rem-table');
            table.classList.remove('active');
        }
    }.bind(this);

}

ko.applyBindings(new Custer);
