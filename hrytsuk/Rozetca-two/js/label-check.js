(function () {
    var elementAction = {
        label1: document.querySelector('.viv-one'),
        label2: document.querySelector('.viv-two'),
        blocInpunt: document.querySelector('.sel-bloc-input'),
        labelCheck: 'color-label-checked',
        labeldisconnected: 'fill-color'
    };

    elementAction.blocInpunt.addEventListener('click', checkedLabel);

    function checkedLabel(event) {
        for (var i = 0; i < elementAction.blocInpunt.childNodes.length; i++) {
            if (elementAction.blocInpunt.childNodes[i].tagName === 'LABEL') {
                var elem = elementAction.blocInpunt.childNodes[i];
                elem.classList.remove(elementAction.labelCheck);
                event.target.classList.add(elementAction.labelCheck);
                if (elem.classList.contains(elementAction.labelCheck)) {
                    elem.classList.add(elementAction.labeldisconnected);
                }
            }
        }

    }


})();