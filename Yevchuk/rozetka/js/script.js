function setCount() {

   ++this.counts;
    console.log(this.counts);
}

function Counter (elem, count){

    this.targetElem = elem;
    this.counts = count;
    this.targetElem.addEventListener('click',  setCount);
}

Counter.prototype.setCount = setCount;


var counter = new Counter( document.querySelector('.favorites'), 0);

var counter1 = new Counter( document.querySelector('.favorites1'), 1);

