(function () {
    function Tooltip(options) {
        if (!options) options = {};
        var self = this;
        this.tooltips;
        this.beforeTooltip = options.beforeTooltip;
        this.afterCloseTooltip = options.afterCloseTooltip;
        this.offset = options.offset || 5;
        this.wrapperClass = options.containerClassName || "tooltip-box";
        var activeClass = options.activeClassName || "active";
        this.tooltipWrapper = document.createElement('div');
        this.status = false;
        this.tooltip = function (elem) {
            if (!elem.classList.contains(activeClass.toString())) {
                if (this.status) this.remElemActive();
                if (this.beforeTooltip) this.beforeTooltip(elem);
                elem.classList.add(activeClass.toString());
                var coords = this.getCoords(elem);
                if (this.tooltipWrapper.classList.contains(activeClass.toString())){
                    this.showPrevTooltipText(this.tooltipWrapper.textContent);
                }
                this.tooltipWrapper.textContent = elem.dataset.tooltip;
                this.tooltipWrapper.classList.add(activeClass.toString());
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
            if (self.tooltipWrapper === e.target || e.target.classList.contains(activeClass.toString())){
                return false;
            }
            self.closeTooltip();
        };
        this.closeTooltip = function () {
            this.tooltipWrapper.classList.remove(activeClass.toString());
            this.showPrevTooltipText(this.tooltipWrapper.textContent);
            this.remElemActive();
            this.status = false;
            document.removeEventListener('click', self.closeTooltipBody, false);
        };
        this.remElemActive = function () {
            document.querySelector('.tooltip-js.active').classList.remove(activeClass.toString());
        };
        this.getCoords = function (elem) {
            elem = elem.getBoundingClientRect();
            return {
                top: elem.top + window.pageYOffset,
                left: elem.left + window.pageXOffset,
                width: elem.width
            }
        };
        this.showPrevTooltipText = function(text){
            if (this.afterCloseTooltip) this.afterCloseTooltip(text);
        }
        this.init = function () {
            document.addEventListener('DOMContentLoaded', function () {
                this.tooltips = document.querySelectorAll('.tooltip-js');
                this.tooltipWrapper.classList.add(this.wrapperClass);
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
