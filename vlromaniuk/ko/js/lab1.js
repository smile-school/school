function Customer() {
    this.firstName = ko.observable();
    this.lastName = ko.observable();
    this.fullName = ko.computed(function () {
        return (this.firstName() && this.lastName()) ? this.firstName() + ' ' + this.lastName() : '' ;
    }, this);
    this.setName = function () {
        var ans = (prompt('What is your name?'));
        ans  = ans.split(' ');
        this.firstName(ans[0]);
        this.lastName(ans[1]);
    };
}

ko.applyBindings(new Customer());
