(function () {
    var Tabs = function(){
        var self = this;
        self.selected = ko.observable(null);
        self.init = ko.observable(1);
        self.getHref = function(){
            var target;
            var element = event.target.hash;
            target = element.substr(1);
            return target;
        };
        self.showTabs = function(){
            var target = self.getHref();
            self.selected(target);
            self.init(2);
        };
    };
})();
