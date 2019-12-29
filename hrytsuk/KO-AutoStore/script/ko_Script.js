function setFilterPrice(maxPrice) {
    var max = document.querySelector('.price-max');
    if (maxPrice > +max.value){
        max.value = +maxPrice;
    }
}

function Attributes() {
    this.color = ko.observableArray([]);
    this.brand = ko.observableArray([]);
    this.model = ko.observableArray([]);
    this.year = ko.observableArray([]);
    this.countBrand = function (brand) {
        var count = 0,
            products = productList.productList();
        for(var i = 0; i < products.length; i++){
            if(products[i].brand() === brand) count++;
        }
        return count;
    }
    this.setFilter = function(data, e, filter){
        for(var i = 0; i < productList.productList().length; i++){
            console.log( productList.productList(),productList.productList()[i].visible,productList.productList()[i][filter]());
            productList.productList()[i].visible(!(productList.productList()[i][filter]() !== data));
        }
    }
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
    this.qty = ko.observable(0);
    this.prices = ko.computed(function () {
        var html = '';
        if(this.sale()){
            html += '<span class="full-price">$' + this.salePrice() + '</span>';
            html += '<span class="old-price">$' + this.price() + '</span>';
        }
        else{
            html += '<span class="full-price">$' + this.price() + '</span>'
        }
        return html;
    }, this);
    this.compaired = ko.observable(false);
    this.favorite = ko.observable(false);
    this.visible = ko.observable(true);
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
    this.color = ko.observable();
    this.brandOptions = attributes.brand;
    this.brand = ko.observable();
    this.modelOptions = attributes.model;
    this.model = ko.observable();
    this.yearOptions = attributes.year;
    this.year = ko.observable();
    this.addAttribute = function (nameAttribute) {
        console.log(nameAttribute, this);
        var value = prompt('Enter ' + nameAttribute);
        console.log(this);
        if(value){
            this[nameAttribute + 'Options'].push(value);
        }
    };
    this.required = ko.observable(false);
    this.addProduct = function () {
        if(this.title() && this.img() && this.price() && this.color() && this.brand() && this.model() && this.year()){

            setFilterPrice(this.sale() ? this.salePrice() : this.price());

            productList.productList.push(new Product(this.title(), this.img(), this.price(), this.salePrice(), this.newAction(),
                this.sale(), this.rating(), this.color(), this.brand(), this.model(), this.year()));
            this.required(false);
            this.clearForm();
        } else {
            this.required(true);
        }
    };
    this.clearForm = function () {
        this.title('');
        this.img('');
        this.price('');
        this.salePrice('');
        this.newAction(false);
        this.sale(false);
        this.rating('');
        this.model('');
        this.color(undefined);
        this.brand('');
        this.year('');
    }
}

function Compare() {
    this.compareList = ko.observableArray([]);
    this.removeCompare = function (product) {
        product.compaired(false);
        this.compareList.remove(product);
    }.bind(this);
    this.removeAll = function () {
        if(this.compareList().length){
            this.setCompairedStatus();
            this.compareList.removeAll();
        }
    }.bind(this);
    this.setCompairedStatus = function () {
        for(var i = 0; i < this.compareList().length; i++){
            this.compareList()[i].compaired(false);
        }
    }
}

function Favorites() {
    this.favList = ko.observableArray([]);
}

function Cart() {
    this.cartList = ko.observableArray([]);
    this.totalQty = ko.computed(function () {
        var totalQty = 0,
            list = this.cartList();
        for(var key in list){
            totalQty += list[key].qty();
        }
        return totalQty;
    },this);
    this.totalCart = ko.computed(function () {
        var totalCart = 0,
            list = this.cartList();
        for(var key in list){
            totalCart += list[key].sale() ? list[key].salePrice() * list[key].qty() : list[key].price() * list[key].qty();
        }
        return totalCart;
    },this);
    this.removeCart = function (product) {
        product.qty(0);
        this.cartList.remove(product);
    }.bind(this);
}

function ProductList() {
    this.productList = ko.observableArray([]);
    this.addProduct = function (product) {
        var max = document.querySelector('.price-max');
        console.log(max);
        for (var key in product){
            if (key == 'price'){
                setFilterPrice(product[key]());
                /*if (+product[key]() > +max.value){
                    console.log(product[key]());
                    max.value = +product[key]();
                }*/
            }
            if(key === 'color' || key === 'brand' || key === 'model' || key === 'year'){
                if (attributes[key]().indexOf(product[key]()) === -1) attributes[key].push(product[key]());
            }
        }
        if(product) this.productList.push(product)
    };
    this.addCompare = function (product) {
        if (!product.compaired()){
            console.log(product.compaired());
            compare.compareList.push(product);
            product.compaired(true);
        }
        console.log(product.compaired());
    };
    this.addFavorite = function (product) {
        console.log(product);
        if(!product.favorite()){
            favorite.favList.push(product);
            product.favorite(true);
            console.log(favorite.favList().length);
        }
        else{
            console.log('remove');
            favorite.favList.remove(product);
            product.favorite(false);
        }
    }
    this.addCart = function (product) {
        var status = false;
        var i = 0;
        for(; i < cart.cartList().length; i++){
            if(cart.cartList()[i] === product){
                status = true;
                break;
            }
        }
        product.qty(product.qty() + 1);
        if(!status){
            cart.cartList.push(product);
        }
    }
}

var attributes = new Attributes(),
    compare = new Compare(),
    favorite = new Favorites(),
    product = new Product(),
    addProduct = new AddProduct(),
    productList = new ProductList();
cart = new Cart();

ko.applyBindings(addProduct, document.querySelector('#addProduct'));
ko.applyBindings(attributes, document.querySelector('#filters'));
ko.applyBindings(productList,document.querySelector('#productList'));
ko.applyBindings(compare, document.querySelector("#compare"));
ko.applyBindings(cart, document.querySelector('#minicart'));
ko.applyBindings(favorite, document.querySelector("#favorite"));

/*productList.productList.subscribe(function (value) {
    //console.log(value[0].title);
    var max = document.querySelector('price-max');
    for (var i = 0; i < value.length; i++){
        for (var key in value[i]){
            if (key == 'price'){
                if (+value[i][key]() > + max.value){
                    priceFilter.slider('option', 'max', value[i][key]());
                    priceFilter.slider('value', 1, value[i][key]());
                    document.querySelector('price-max').value(value[i][key]());
                }
            }
        }
    }
});*/
/*productList.productList.push(
    new Product('Car cit', '../ima/car_kit.png', 50, 40, false, false, 5, 'red', 'BMW', 'X5', '2019')
);*/
productList.addProduct(new Product('Car Kit Hands Free Calling', 'ima/related/1.png', 80, 50, false, false, 5, 'red', 'BMW', 'X5', '2019'));
productList.addProduct(new Product('Design in car fm radio', 'ima/related/2.png', 150, 0, false, false, 5, 'black', 'Toyota', 'Corolla', '2012'));
productList.addProduct(new Product('Car cit', 'ima/related/3.png', 100, 50, false, true, 5, 'green', 'Toyota', '6', '2017'));