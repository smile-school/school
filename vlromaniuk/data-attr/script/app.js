var style = document.createElement('style');
document.head.appendChild(style);
var tooltip = document.querySelectorAll('.tooltip');

for (var i = 0, n = tooltip.length; i < n; i++) {
    var attr = tooltip[i].getAttribute('data-tooltip');
    if (attr) {
        tooltip[i].addEventListener('click', clickEvent);
    }
}

function clickEvent(event) {
    x = event.x - this.offsetLeft;
    y = event.y - this.offsetTop;
    style.innerHTML = '.tooltip-active[data-tooltip]::after { left: ' + x + 'px; top: ' + y + 'px;opacity:1;  }'
    this.classList.toggle('tooltip-active')
}