/*
var cust = {
    name: ko.observable('vasya'),
    location: ko.observable('Rivne')
};
document.querySelector('#setName').addEventListener('click', function () {
    cust.name(prompt('What is your name' , cust.name()))
});
document.querySelector('#setLocation').addEventListener('click', function () {
    cust.location(prompt('What is your name' , cust.location()))
});
ko.applyBindings(cust);
console.log(cust.name('Olya'))
*/

function Customer() {
    this.name = ko.observable('vasya');
    this.location = ko.observable('Rivne');
    this.info = ko.computed(function () {
        return ' Hello ' + this.name() + ' from ' + this.location();
    }, this);
    this.setName = function () {
        this.name(prompt('What is your name' , this.name()))
    };
    this.setLocation = function () {
        this.location(prompt('What is your living' , this.location()))
    }
}
ko.applyBindings(new Customer());

