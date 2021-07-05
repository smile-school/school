function CountPrice() {
    var self = this;
    this.prises = {
        borsch: 10,
        salad: 5,
        puree: 8,
        steak: 20,
    };
    this.allOrders = {};
    this.digitPrice = 0;
    this.price = ko.observable(0);
    this.order = ko.observable();
    this.enterDish = function () {
        this.order(prompt('Enter your order "Dish, number of servings"'));
        this.makePrice(this.order());
    };
    this.makePrice = function (str) {
        var dish = str.split(',')[0].trim().toLowerCase(),
            servings = (str.split(',')[1]) ? +(str.split(',')[1].trim()) : 1;
        for (var key in this.prises) {
            if (key === dish) {
                this.digitPrice += servings * this.prises[key];
                this.price(this.digitPrice);
                this.allOrders[dish] = ko.observable(servings);
                break;
            }
        }
        console.log(this.price());
        return this.price();
    };

    this.getPrice = ko.computed(function () {
        return (this.price() + ' UAH');
    },this)
}

ko.applyBindings(new CountPrice);
