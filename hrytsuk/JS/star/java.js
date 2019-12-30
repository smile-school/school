(function () {
    function Rating (ratingElem) {
         this.count = 0;
           this.sum = 0;
           this.rating = 0;
           this.ratingElem = ratingElem;
    }

    Rating.prototype.setSum = setSum;
    Rating.prototype.counter = counter;
    Rating.prototype.setRetingValue = setRetingValue;
    Rating.prototype.setReting = setReting;


    function setReting(e) {
      this.setSum(e);
      this.counter();
      this.setRetingValue();
    }

    function setSum(e) {
        for (var i =0; i < this.ratingElem.children.length; i++){
            if (e.target.parentNode === this.ratingElem.children[i]){
                 this.sum += i+1;
                 break;
            }
        }
    }

    function counter() {
        this.count++;
        this.rating = +(this.sum / this.count).toFixed(2);
    }


    function setRetingValue() {
         for (var i = 0; i< this.ratingElem.children.length; i++){
             if (this.rating !== 0){
                 if (Math.ceil(this.rating) > i){
                     this.ratingElem.children[i].lastElementChild.style.width =
                         (~~this.rating > i) ? "100%" : Math.floor(this.rating % 1 * 100) + "%" ;
                 }
                 else {
                     this.ratingElem.children[i].lastElementChild.style.width = "0";
                 }
             }
         }                                                                                  
    
    }
    var ratings = document.querySelectorAll(".rating"), tmp;
  
    for(var i =0; i<ratings.length; i++){
        tmp = new Rating(ratings[i]);
       ratings[i].addEventListener("click", tmp.setReting.bind(tmp));
     
    }
})();
