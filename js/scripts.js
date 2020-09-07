console.log('Scripts');
var slideshow = 0;
var index = 0;
var bg = document.querySelector('.image');
bg.style.transition.length = 500;
bg.style.backgroundSize = 'cover';
bg.style.backgroundPosition = '50% 30%';

var images = [
  '/images/IMG_4338.JPG',
  '/images/IMG_4344.JPG',
  '/images/IMG_4407.JPG',
  '/images/IMG_4410.JPG',
  '/images/IMG_4421.JPG',
  '/images/IMG_4581.JPG',
  '/images/5P0A3661.jpg',
  '/images/5P0A3679.jpg',
  '/images/5P0A3740.jpg',
  '/images/5P0A3776.jpg'
];

var bgPos = {
  // image_name.JPG     : " x=  y="
  '/images/IMG_4344.JPG': '50% 30%',
  '/images/IMG_4407.JPG': '40% 40%',
  '/images/IMG_4410.JPG': '40% 40%',
  '/images/IMG_4421.JPG': '40% 20%',
  '/images/IMG_4338.JPG': '50% 30%',
  '/images/IMG_4581.JPG': '50% 20%',
  '/images/5P0A3661.jpg': '50% 50%',
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
  var imgSrc = loaded[index].match(/\/images\/IMG_[0-9]{4}.jpg/i)[0];
  bg.style.backgroundPosition = bgPos[imgSrc];
}
var loaded = [];
function completed (src) {
  loaded.push(src);
  if (!slideshow) {
    slideshow = setInterval(showNextImage, 2750);
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
