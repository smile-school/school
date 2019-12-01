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
});
