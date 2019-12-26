$( function() {
    var slider_range = $("#slider-range"),
        min = $("#price-min"),
        max = $("#price-max");

    slider_range.slider({
        range: true,
        min: 67,
        max: 290,
        values: [ 67, 290 ],
        slide: function( event, ui ) {
            min.val(ui.values[0]);
            max.val(ui.values[1]);
        }
    });

    min.val(slider_range.slider("values",0));
    max.val(slider_range.slider("values",1));
    min.change(function () {
        slider_range.slider("values", 0, min.val());
    });
    max.change(function () {
       slider_range.slider("values", 1, max.val());
    });


} );