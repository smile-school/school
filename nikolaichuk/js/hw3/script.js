(function () {
    function ToolTip(tooltipElem) {
        this.element = tooltipElem;
        this.isVisible = false;;
    }
    ToolTip.prototype.setVisibility = setVisibility;

    function setVisibility(e) {
        if(e.target === this.element){
            if (this.isVisible){
                removeTooltip(this.element);
            }
            else{
                addTooltip(this.element);
            }
            this.isVisible = !this.isVisible;
            e.stopPropagation();
        }
    }

    function addTooltip(target) {
        var node = document.createElement('span');
        node.textContent = target.dataset.text;
        node.classList.add("tooltip-info");
        target.appendChild(node);
    }

    function removeTooltip(target) {
        target.children[0].remove();
    }

    function clickHandler(e) {
        var elements = document.querySelectorAll(".tooltip-js"), tmp;
        for (var i = 0; i < elements.length; i++) {
            if(elements[i].isVisible){
                removeTooltip(elements[i]);
                elements[i].isVisible = false;
            }
        }
    }
    var tooltip_elements = document.querySelectorAll(".tooltip-js"), tmp;
    var container = document.querySelector(".container");
    container.addEventListener('click', clickHandler);
    for (var i = 0; i < tooltip_elements.length; i++){
        tmp = new ToolTip(tooltip_elements[i]);
        tooltip_elements[i].addEventListener('click', tmp.setVisibility.bind(tmp));
    }
})();