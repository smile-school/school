$(function() {
    $( "#slider_price" ).slider({
        range: true,
        min: 66,
        max: 290,
        values: [ 66.9, 290],
        slide: function( event, ui ) {
            $( "#price" ).val(ui.values[0]);
            $("#price2").val(ui.values[1]); }
    });
    $( "#price" ).val($( "#slider_price" ).slider( "values", 0 ));
    $("#price2").val($("#slider_price").slider( "values", 1 ));

    // $('#price').val(priceFilter.slider('values', 0)).on('change', function () {
    //     var val = +this.value;
    //     if(val >= priceFilter.slider('option','min') && val < priceFilter.slider('option','max')) {
    //         priceFilter.slider('values', 0, val);
    //     }
    // });
    // $('#price2').val(priceFilter.slider('values',1).on(){
    //     priceFilter.slider('values',1,+this.value);
    // }

    function Attributes() {
        this.color = ko.observableArray([]);
        this.brand = ko.observableArray([]);
        this.model = ko.observableArray([]);
        this.year = ko.observableArray([]);
    }

    function Product(title, img, price, salePrice, newAction, sale, rating, color, brand, model, year) {
        this.title = ko.observable(title || 'asdasd');
        this.img = ko.observable(img || '');
        this.price = ko.observable(price || '');
        this.salePrice = ko.observable(salePrice || '');
        this.newAction = ko.observable(newAction || false);
        this.sale = ko.observable(sale || false);
        this.rating = ko.observable(rating || '');
        this.color = ko.observable(color || '');
        this.brand = ko.observable(brand || '');
        this.model = ko.observable(model || '');
        this.year= ko.observable(year || '');
        this.prices = ko.computed(function () {
            var html ='<p class="for-sale" data-bind="prices">$' + this.price() + '</p>';
            if(this.sale()){
                html += '<span>' + this.salePrice() + '</span>';
            } else {

            }
            return html;
        }, this);
    }

    function ProductList() {
        this.productList = ko.observableArray([]);

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
            var value = prompt('Enter ' + nameAttribute);
            console.log(this);
            if(value){
                this[nameAttribute + 'Options'].push(value);
            }
        };
        this.addProduct = function () {

        };
    }

    var attributes = new Attributes(),
        product = new Product(),
        addProduct = new AddProduct(),
        productList = new ProductList();

    ko.applyBindings(addProduct, document.querySelector('#addProduct'));
    ko.applyBindings(attributes, document.querySelector('#filters'));
    ko.applyBindings(productList, document.querySelector('#productList'));

    productList.productList.subscribe( function () {
        console.log(this);
    });
    console.log(productList);
    productList.productList.push(
        new Product('title', 'ima/related/2.png', 50, 0, false, true, 2, 'red', 'bmw', 'x5', '2019'),
        new Product('title22', 'ima/related/2.png', 500, 100, false, true, 5, 'red', 'bmw', 'x5', '2019')
    )
});
