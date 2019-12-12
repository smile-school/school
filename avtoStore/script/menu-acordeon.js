
function blocAcordeon() {
    var aElement = document.querySelector('.home-mod'),
        hoverBloc = document.querySelector('.menu-hover-bloc');

    aElement.addEventListener('click',function (e) {
        e.preventDefault();
        if(hoverBloc.classList.contains('modef-hover-bloc')){
            hoverBloc.classList.remove('modef-hover-bloc');
        }
        else {
            hoverBloc.classList.add('modef-hover-bloc');
        }
    })

}
blocAcordeon();