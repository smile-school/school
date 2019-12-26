var priceFilter = $("#price-slider").slider({
    range: true,
    min: 0,
    max: 320,
    values: [0, 320],
    slide: function (event, ui) {
        $("#min").val(ui.values[0]);
        $("#max").val(ui.values[1]);
    }
});
$("#min").val($("#price-slider").slider("values", 0));
$("#max").val($("#price-slider").slider("values", 1));
