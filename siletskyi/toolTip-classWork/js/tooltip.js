(function () {
    function Tooltip(options) {
        if (!options) options = {};
        var self = this;
        this.tooltips;
        this.beforeTooltip = options.beforeTooltip;
        this.afterTooltip = options.afterTooltip;
        this.offset = options.offset || 5;
        this.tooltipWrapper = document.createElement('div');
        this.status = false;
        this.tooltip = function (elem) {
            //console.log(elem)
            if (!elem.classList.contains('active')) {
                if (this.status) this.remElemActive();
                if (this.beforeTooltip) this.beforeTooltip(elem);
                elem.classList.add('active');
                var coords = this.getCoords(elem);
                console.log(coords);
                this.tooltipWrapper.textContent = elem.dataset.tooltip;
                this.tooltipWrapper.classList.add('active');
                this.tooltipWrapper.style.top = coords.top - (this.tooltipWrapper.offsetHeight + this.offset) + 'px';
                this.tooltipWrapper.style.left = (coords.left + coords.width / 2) - (this.tooltipWrapper.offsetWidth / 2) + 'px';
                this.status = true;
                if (this.status) {
                    setTimeout(function () {
                        document.addEventListener('click', self.closeTooltipBody, false);
                    }, 100);
                }
                if (this.afterTooltip) this.afterTooltip(elem);
            } else {
                this.closeTooltip();
            }
        };
        this.closeTooltipBody = function (e) {
            if (self.tooltipWrapper === e.target || e.target.classList.contains('active')){
                return false;
            }
            //console.log('d')
            self.closeTooltip();
        };
        this.closeTooltip = function () {
            this.tooltipWrapper.classList.remove('active');
            this.remElemActive();
            this.status = false;
            document.removeEventListener('click', self.closeTooltipBody, false);
        };
        this.remElemActive = function () {
            document.querySelector('.tooltip-js.active').classList.remove('active');
        };
        this.getCoords = function (elem) {
            elem = elem.getBoundingClientRect();
            return {
                top: elem.top + window.pageYOffset,
                left: elem.left + window.pageXOffset,
                width: elem.width
            }
        };
        this.init = function () {
            //console.log(this);
            document.addEventListener('DOMContentLoaded', function () {
                //console.log(this);
                this.tooltips = document.querySelectorAll('.tooltip-js');
                this.tooltipWrapper.classList.add('tooltip-box');
                document.querySelector('body').appendChild(this.tooltipWrapper);
                for (var i = 0; i < this.tooltips.length; i++){
                    this.tooltips[i].addEventListener('click', function (e) {
                        e.preventDefault();
                        self.tooltip(this);
                    })
                }
            }.bind(this))
        };
        this.init();
    }
    window.Tooltip = Tooltip;
})();
