(function () {
    function AddReview(option) {
        var self = this;
        this.options = {
            buttons: {
                openButton: document.querySelector('.' + option.addReviewClass),
               /* closeButton: document.querySelector('.' + option.closeFormClass),*/
                formWindow: document.querySelector('.' + option.formWindowClass),
            },
        };

        function build(collection){
           for (var key in collection){
               addEvent(collection[key]);
           }
        }
/**/
        function addEvent(elem){
            elem.addEventListener('click', toggleForm);
        }

        function toggleForm(){
           self.options.buttons.formWindow.classList.toggle('active');
        }

        build(self.options.buttons);
    }

    window.AddReview = AddReview;
})();