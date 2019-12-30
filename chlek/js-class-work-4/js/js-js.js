window.addEventListener('resize', function () {
   setTimeout(function () {
       console.log(this.outerWidth);
   }, 0)
});