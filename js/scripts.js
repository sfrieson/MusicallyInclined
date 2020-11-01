console.log('Scripts');
var slideshow = 0;
var index = 0;
var bg = document.querySelector('.image');
bg.style.transition.length = 500;
bg.style.backgroundSize = 'cover';
bg.style.backgroundPosition = '50% 30%';

var images = [
  '/images/5P0A3661.jpg',
  '/images/5P0A3683.jpg',
  '/images/5P0A3769.jpg',
  '/images/5P0A3679.jpg',
  '/images/5P0A3740.jpg',
  '/images/5P0A3776.jpg'
];

var bgPos = {
  // /images/image_name.JPG     : " x=  y="
  '/images/5P0A3661.jpg': '50% 50%',
  '/images/5P0A3683.jpg': '50% 50%',
  '/images/5P0A3769.jpg': '50% 50%',
  '/images/5P0A3679.jpg': '50% 50%',
  '/images/5P0A3740.jpg': '50% 50%',
  '/images/5P0A3776.jpg': '50% 50%'
};

function showNextImage () {
  if (++index === loaded.length) index = 0;
  bg.style.background = 'url(' + loaded[index] + ')';
  bg.style.transition.length = 500;
  bg.style.transition.transitionProperty = 'cover';
  bg.style.backgroundSize = 'cover';
  var imgSrc = loaded[index].match(/\/images\/[A-Z0-9]{8}.jpg/i)[0];
  bg.style.backgroundPosition = bgPos[imgSrc];
}
var loaded = [];
function completed (src) {
  loaded.push(src);
  if (!slideshow) {
    slideshow = setInterval(showNextImage, 3500);
    window.scrollTo(0, 1); // Hide the address bar
  }
}

images.forEach(function (src) {
  var img = document.createElement('img');
  img.onload = function () {
    completed(src);
  };
  img.src = src;
});
