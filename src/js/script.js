// WEBP

function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

// SLICK

$(document).ready(function () {
   $('.fs-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
   });
   $('.solutions__slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
   });
});
