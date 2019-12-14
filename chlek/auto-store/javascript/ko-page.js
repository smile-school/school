$(function () {
    var priceFilter = $("#select-wrap").slider({
        range: true,
        min: 0,
        max: 200,
        values: [0, 200],
        slide: function (event, ui) {
            $("#priceProd").val(ui.values[0]);
            $("#priceProd2").val(ui.values[1]);
        }
    });
    $('#priceProd').val(priceFilter.slider('values', 0)).on('change', function () {
        var val = +this.value;
        if (val >= priceFilter.slider('option', 'min') && val < priceFilter.slider('option', 'max')) {
            priceFilter.slider('values', 0, val);
        }
    });
    $('#priceProd2').val(priceFilter.slider('values', 1)).on('change', function () {
        priceFilter.slider('values', 1, +this.value);
    });

    function Attributes() {
        this.color = ko.observableArray([]);
        this.brand = ko.observableArray([]);
        this.model = ko.observableArray([]);
        this.year = ko.observableArray([]);
    }

    function Product(title, img, price, salePrice, newAction, sale, rating, color, brand, model, year) {
        this.title = ko.observable(title || '');
        this.img = ko.observable(img || '');
        this.price = ko.observable(price || '');
        this.salePrice = ko.observable(salePrice || '');
        this.newAction = ko.observable(newAction || false);
        this.sale = ko.observable(sale || false);
        this.rating = ko.observable(rating || '');
        this.color = ko.observable(color || '');
        this.brand = ko.observable(brand || '');
        this.model = ko.observable(model || '');
        this.year = ko.observable(year || '');
        this.prices = ko.computed(function () {
            var html = '<p><b>' + this.price() + '</b></p>';
            if (!this.sale()) {
                html += '<p><b>' + this.salePrice() + '</b></p>';
            }
            return html;
        }, this)
    }

    function productList() {
        this.productList = ko.observableArray([]);
        this.addProduct = function (product) {
            for (var key in product) {
                if (key == 'price') {
                    if (product[key]() > +priceFiletr.slider('option', 'max')) {
                        priceFiletr.slider('option', 'max', product[key]());
                        priceFiletr.slider('values', 1, product[key]());
                        $('#price2').val(product[key]());
                    }
                }

                if (key === 'color' || key === 'brand' || key === 'model' || key === 'year') {
                    if (attributes[key]().indexOf(product[key]()) === -1) attributes[key].push(product[key]());
                }
            }
            this.productList.push(product)
        }
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
        this.color = ko.observable();
        this.brand = ko.observable();
        this.model = ko.observable();
        this.year = ko.observable();
        this.addAttribute = function (nameAttribute) {
            var value = prompt('Enter ' + nameAttribute);
            if (value) {
                this[nameAttribute + 'Options'].push(value)
            }
        };
        this.required = ko.observable(false);
        this.addProduct = function () {
            if (this.title && this.img() && this.price() && this.color() && this.brand() && this.model() && this.year()) {

            } else {
                this.required = true;
            }
        }
    }

        var attributes = new Attributes(),
            product = new Product(),
            addProduct = new AddProduct(),
            productList = new productList();
        ko.applyBindings(addProduct, document.querySelector('#add-product'));
        ko.applyBindings(attributes, document.querySelector('#filters-wrap'));
        ko.applyBindings(productList, document.querySelector('#products'));

    productList.productList.subscribe(function (value) {
       for (var i = 0; i < value.length; i++){
           for (var key in value[i]){
               if (key === 'price'){
                  if (value[i][key]() > +priceFiletr.slider('option', 'max')){
                      priceFiletr.slider('option', 'max', value[i][key]());
                      priceFiletr.slider(value, 1 , value[i][key]());
                      $('#price2').val(value[i][key]());
                  }
               }
           }
       }
    });


    productList.productList.push(
        new Product('title', 'img/design_in-car.png', 40 ,30, false, false, 4,'red', 'bmw', 'x5', 2015),
        new Product('title', 'img/design_in-car.png', 40 ,30, false, false, 4,'red', 'bmw', 'x5', 2015),
        new Product('title', 'img/design_in-car.png', 40 ,30, false, false, 4,'red', 'bmw', 'x5', 2015),
    );
    productList.addProduct(new Product('title', 'img/design_in-car.png', 40 ,30, false, false, 4,'red', 'bmw', 'x5', 2015));
    productList.addProduct(new Product('Audi', 'img/design_in-car.png', 490 ,399, false, false, 5,'black', 'audi', 's8', 2019));
    productList.addProduct(new Product('Audi', 'img/design_in-car.png', 400 ,350, false, false, 5,'black', 'audi', 's8', 2020));
});