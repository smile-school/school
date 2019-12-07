(function () {
    function Attributes() {
        this.color = ko.observableArray([]);
        this.brand = ko.observableArray([]);
        this.model = ko.observableArray([]);
        this.year = ko.observableArray([]);
    }

    function Product(title, image, price, salePrice, newAction, sale, rating, color, brand, model, year) {
        this.title = ko.observable(title || '');
        this.image = ko.observable(image || '');
        this.price = ko.observable(price || '');
        this.salePrice = ko.observable(salePrice || '');
        this.newAction = ko.observable(newAction || false);
        this.sale = ko.observable(sale || false);
        this.rating = ko.observable(rating || '');
        this.color = ko.observable(color || '');
        this.brand = ko.observable(brand || '');
        this.model = ko.observable(model || '');
        this.year = ko.observable(year || '');


    }

    function AddProduct() {
        this.title = product.title;
        this.img = product.img;
        this.price = product.price;
        this.salePrice = product.salePrice;
        this.newAction = product.newAction;
        this.sale = product.sale;
        this.rating = product.rating;
        this.colorOptions = attributes.color;
        this.brandOptions = attributes.brand;
        this.modelOptions = attributes.model;
        this.yearOptions = attributes.year;
        this.addAttribute = function (nameAttribute) {
            console.log(nameAttribute);
           var value =  prompt('Enter' + nameAttribute);
           if (value){
                this[nameAttribute + 'Options'].push(value);
           }
        };
        this.addProduct = function () {

        };
    }
    function ProductList() {
        this.productList = ko.observable([])
    }

    var attributes = new Attributes(),
        product = new Product(),
        addProduct = new AddProduct(),
        productList = new ProductList()
        parentCont = document.querySelector('#add-product');
        ko.applyBindings(addProduct, parentCont);
})();
