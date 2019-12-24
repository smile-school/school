$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 67,
        max: 290,
        values: [ 67, 290 ],
        slide: function( event, ui ) {
            $("#price-min").val(ui.values[0]);
            $("#price-max").val(ui.values[1]);
        }
    });

    $("#price-min").val($("#slider-range").slider("values",0));
    $("#price-max").val($('#slider-range').slider("values",1));
} );