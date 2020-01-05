(function () {
    var addReviewBtn = document.querySelector(".addReviewBtn-js"),
        showReviewBtn = document.querySelector(".showReview-js"),
        reviewTab = document.querySelector("#tab3");

    addReviewBtn.addEventListener('click', openReviewsTab);
    showReviewBtn.addEventListener('click', openReviewsTab);

    function openReviewsTab() {
        if (!reviewTab.checked){
            reviewTab.checked = true;
        }
    }

})();
