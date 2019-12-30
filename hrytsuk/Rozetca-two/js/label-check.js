(function () {

    var self = this;

    this.elementAction = {
        label1: document.querySelector('.viv-one'),
        label2: document.querySelector('.viv-two'),
        blocInpunt: document.querySelector('.sel-bloc-input'),
        labelCheck: 'color-label-checked',
        labeldisconnected: 'fill-color'
    };

    this.elementAction.blocInpunt.addEventListener('click', checkedLabel);

    function checkedLabel(event) {
        for (var i = 0; i < self.elementAction.blocInpunt.childNodes.length; i++) {
            if (self.elementAction.blocInpunt.childNodes[i].tagName === 'LABEL') {
                var elem = self.elementAction.blocInpunt.childNodes[i];
                elem.classList.remove(self.elementAction.labelCheck);
                event.target.classList.add(self.elementAction.labelCheck);
                if (elem.classList.contains(self.elementAction.labelCheck)) {
                    elem.classList.add(self.elementAction.labeldisconnected);
                }
            }
        }

    }


})();