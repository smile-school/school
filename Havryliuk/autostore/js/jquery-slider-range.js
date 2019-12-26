$(function() {
    var priceFilter = $("#slider_price").slider({
        range: true,
        min: 66,
        max: 290,
        values: [66, 290],
        slide: function (event, ui) {
            $("#price").val(ui.values[0]);
            $("#price2").val(ui.values[1]);
        }
    });
    $('#price').val(priceFilter.slider('values', 0)).on('change', function () {
        var val = +this.value;
        if (val >= priceFilter.slider('option', 'min') && val < priceFilter.slider('option', 'max')) {
            priceFilter.slider('values', 0, val);
        }
    });
    $('#price2').val(priceFilter.slider('values', 1)).on('change', function () {
        priceFilter.slider('values', 1, +this.value);
    });

    var el = document.querySelector('.aside-navigation'),
        trigger = document.querySelector('#filter-btn');
    trigger.addEventListener('click', function () {
        el.classList.toggle('visibility');
        trigger.classList.toggle('active');
    },false);
})();
(function () {
    $('.feedback-btn').on('click', function () {
        $('.overlay').toggleClass('active');
        $('#formFeedback').toggleClass('active');
    });
    $('.overlay').on('click', function () {
        $('.overlay').toggleClass('active');
        $('#formFeedback').toggleClass('active');
    });
    $('.close').on('click', function () {
        $('.overlay').toggleClass('active');
        $('#formFeedback').toggleClass('active');
    });
    $('button#submitForm').on('click', function () {
        $('.overlay').removeClass('active');
        $('#formFeedback').removeClass('active');
    });
    function Message(name, comment, advantages, disadvantages) {
        this.name = ko.observable(name);
        this.comment = ko.observable(comment);
        this.advantages = ko.observable(advantages);
        this.disadvantages = ko.observable(disadvantages);
    }
    function Messages() {
        this.name = ko.observable('');
        this.comment = ko.observable('');
        this.advantages = ko.observable('');
        this.disadvantages = ko.observable('');
        this.messagesList = ko.observableArray([]);
        this.submitForm = function () {
        };
        this.clearForm = function () {
            this.name('');
            this.comment('');
            this.advantages('');
            this.disadvantages('');
            this.required(false);
        };
        this.addMessage = function () {
            if(this.name() && this.comment() && this.advantages() && this.disadvantages()){
                this.messagesList.push(new Message(this.name(), this.comment(), this.advantages(), this.disadvantages()));
            }
            console.log(this.comment())
        };
    }
    ko.applyBindings(new Messages());
})();

