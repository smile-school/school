const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector('a.toggle-nav');
const input = document.querySelector('input.categories-container-search-field');
const iconWrapper = document.querySelector('span.categories-container-search-icon');

function changeImage(e) {
  activeImage.src = e.target.src;
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));
navItem.addEventListener('click', toggleNavigation);

input.onblur = function(e) {
  if (e.target.value.length > 0) {
    iconWrapper.classList.add('hide-icon');
  } else {
    iconWrapper.classList.remove('hide-icon');
  }
};

input.onfocus = function() {
  iconWrapper.classList.add('hide-icon');
};
