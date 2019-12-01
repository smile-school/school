$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 66.9,
        max: 290,
        values: [ 66.9, 290 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ]  );
            $( "#amount1" ).val( "$" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount1" ).val( $( "#slider-range" ).slider( "values", 1 ) );
} );