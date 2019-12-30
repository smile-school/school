(function () {

 $.widget('smile.smilecarousel',{
     options:{
         sliderWidth : 0,  //Ширина любого елемента
         toShow : 4,                               //кількість слайдів
         itemWidth : 0,              //ширина одного слайда
         sliderItems : 0, //отримємо внутрішні елементи дітей
         countSlide : 0, //кількість внутрішніх елементів
         itemWraperWidth : 0,
         sliderItemWraper : $('<div class="scarousel_item_wrapper"></div>'),
         arrowNext : $('<a class="arrow next" href="#"></a>'),
         arrowPrev : $('<a class="arrow prev" href="#"></a>'),
         toSide : 1,
         delay : 500,
         currentSlide : 0,

     },
     _create : function () {
         var items = this.element.children();   //
         this.options.sliderWidth = this.element.outerWidth();
         this.options.itemWidth = this.options.sliderWidth / this.options.toShow;
         this.options.countSlide = items.length;
         items.addClass('item-scarousel').width(this.options.itemWidth);  // додали клас

         $.each(items,function (index, item) {
             $(item).attr('data-item', index);       //додали дата атрибут
         });

         this.options.itemWraperWidth = this.options.itemWidth * this.options.countSlide;  // ширина слайда
         items.wrapAll(this.options.sliderItemWraper);
         this.itemWrap = this.element.children();
         this.itemWrap.width( this.options.itemWraperWidth);
         this.itemWrap.wrap('<div class="scarousel_wrapper" style="width:' + this.options.sliderWidth +'"></div>');
         this.itemWrap.append(this.options.arrowNext, this.options.arrowPrev);

         $.each(this.element.find('.arrow'), $.proxy(function (i, item) {
             var prop = item.classList.contains('next') ? 'next' : 'prev';
             item.dataset.goTo = prop;
             this[prop] = $(item);
             this._on(this[prop],{
                 click : " _goTo"
             });
         }, this));
            this.element.addClass('smile-carousel-inet');

         // console.log(this);
     },
     _goTo : function () {
        this._getCurrentSlide(e.target.dataset._goTo == 'next');
     },
     _getCurrentSlide : function (direction) {
         if (direction){
             this.options.currentSlide = (this.options.currentSlide != this.options.countSlide - this.options.toShow) ?
                 (( this.options.currentSlide + this.options.toSide) < (this.options.countSlide - this.options.toShow))?
                     this.options.currentSlide + this.options.toShow :
                     this.options.countSlide - this.options.toShow :
                 this.options.countSlide - this.options.toShow;
         }
         else {
             this.options.currentSlide = (this.options.currentSlide !=0)?
                 ((this.options.currentSlide - this.options.toSide) > 0)?
                     this.options.currentSlide - this.options.toSide :
                     0 : 0;
         }
     },
     _go:function () {
         this.itemWrap.animate({'marginLeft' : -(this.options.currentSlide * this.options.itemWidth) + 'px'},this.options.delay,function (){

         })
     },
     _setArrow:function () {
         if (this.options.currentSlide == this.options.countSlide - this.options.toShow){
             this.options.arrows.filter('.next').addClass('disable');
         }
         else if(this.options.countSlide == 0){
             this.options.arrows.filter('.prev').addClass('disable');
         }
         else{
             this.options.arrows.removeClass('disable');
         }
     }

 });



})();
