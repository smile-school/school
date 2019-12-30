(function () {
    function Tooltip(options) {
        if (!options) options = {};
        var self = this;
        this.status = false;
        this.tooltips;
        this.tooltipsWrapper = document.createElement('div');
        this.tooltip = function (elem) {
            if (!elem.classList.contains('active')) {
                elem.classList.add('active');
                var coords = this.getCoords(elem);
                this.tooltipsWrapper.textContent = elem.dataset.tooltip;
                this.tooltipsWrapper.classList.add('active');
                this.tooltipsWrapper.style.top = coords.top - (this.tooltipsWrapper.offsetHeight + this.offset) + 'px';
                this.tooltipsWrapper.style.left = (coords.left + coords.width / 2) - (this.tooltipsWrapper.offsetWidth / 2) + 'px';
                this.status = true;

            } else {
                this.closeTooltip();
                elem.classList.remove('active');
            }
        };

        this.closeTooltip = function () {
            this.tooltipsWrapper.classList.remove('active');
            this.remElemActive();
            this.status = false;
            document.removeEventListener('click', self.closeTooltipBody, false);
            setTimeout(function () {
                document.addEventListener('click', self.closeTooltipBody, false);
            }, 100);
        };

        this.closeTooltipBody = function () {
            if (self.tooltipsWrapper === e.target || e.target.classList.contains('active')) {
                return false;
            }
            self.closeTooltip();
        };

        this.remElemActive = function () {
            document.querySelector('.tooltip-js.active').classList.remove('active');
        };

        this.getCoords = function (elem) {
            elem = elem.getBoundingClientRect();
            return {
                top: elem.top + window.pageYOffset,
                left: elem.left + window.pageYOffset,
                width: elem.width
            }
        };

        this.init = function () {
            document.addEventListener('DOMContentLoaded', function () {
                this.tooltips = document.querySelectorAll('.tooltip-js');
                this.tooltipsWrapper.classList.add('tooltip-box');
                document.querySelector('body').appendChild(self.tooltipsWrapper);
                for (var i = 0; i < this.tooltips.length; i++) {
                    this.tooltips[i].addEventListener('click', function (e) {
                        e.preventDefault();
                        self.tooltip(this);
                    })
                }
            }.bind(this));
        };

        this.init();
    }

    window.Tooltip = new Tooltip();
})();
