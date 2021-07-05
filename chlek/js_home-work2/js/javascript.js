(function () {
    function tooltip() {
        var self = this;
        this.elements = document.querySelectorAll('.tab');
        this.tooltipElement = document.querySelector('.tooltip');
        this.wrapper = document.querySelector('.wrapper')

        function build() {
            addEvent(self.wrapper, tooltipToggle)
        }

        function addEvent(elem, func) {
            elem.addEventListener('click', func);
        }

        function tooltipToggle(event) {
            var target = event.target;
            if (target.tagName === 'LI') {
                self.tooltipElement.classList.add('active');
                self.tooltipElement.style.left = event.x + 'px';
                self.tooltipElement.style.top = event.y - self.tooltipElement.clientHeight + 'px';
                tooltipContent(target.dataset.tooltip);
            } else {
                self.tooltipElement.classList.remove('active');
            }
        }

        function tooltipContent(content) {
            self.tooltipElement.children[0].innerHTML = content;
        }

        build();
    }

    tooltip();
})();
