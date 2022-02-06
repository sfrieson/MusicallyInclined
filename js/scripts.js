console.log("Scripts");
var slideshow = 0;
var index = 0;
var bg = document.querySelector(".image");
bg.style.transition.length = 500;
bg.style.backgroundSize = "cover";
bg.style.backgroundPosition = "50% 50%";

var images = [
  "8A2A4035.jpg",
  "8A2A4052.jpg",
  "8A2A4056.jpg",
  "8A2A4061.jpg",
  "8A2A4063.jpg",
  "8A2A4073.jpg",
  "8A2A4086.jpg",
  "8A2A4102.jpg",
  "8A2A4114.jpg",
  "8A2A4118.jpg",
  "8A2A4121.jpg",
  "8A2A4132.jpg",
  "8A2A4143.jpg",
  "8A2A4147.jpg",
].map((file) => `/images/${file}`);

var bgPos = {
  // /images/image_name.JPG     : " x=  y="
  "/images/8A2A4056.jpg": "50% 25%",
  "/images/8A2A4052.jpg": "25% 25%",
  "/images/8A2A4061.jpg": "30% 45%",
  "/images/8A2A4086.jpg": "50% 35%",
  "/images/8A2A4063.jpg": "50% 20%",
  "/images/8A2A4073.jpg": "50% 15%",
  "/images/8A2A4102.jpg": "50% 35%",
  "/images/8A2A4114.jpg": "50% 20%",
  "/images/8A2A4147.jpg": "30% 15%",
  "/images/8A2A4132.jpg": "15% 40%",
  "/images/8A2A4121.jpg": "15% 25%",
  "/images/8A2A4143.jpg": "30% 15%",
  "/images/8A2A4118.jpg": "50% 20%",
};

function showNextImage() {
  if (++index === loaded.length) index = 0;
  bg.style.background = "url(" + loaded[index] + ")";
  bg.style.transition.length = 500;
  bg.style.transition.transitionProperty = "cover";
  bg.style.backgroundSize = "cover";
  var imgSrc = loaded[index].match(/\/images\/[^.]*\.\w{3,4}/i)[0];
  bg.style.backgroundPosition = bgPos[imgSrc] || "50% 50%";
}
var loaded = [];
function completed(src) {
  loaded.push(src);
  if (!slideshow) {
    resume();
    window.scrollTo(0, 1); // Hide the address bar
  }
}

images.forEach(function (src) {
  var img = document.createElement("img");
  img.onload = function () {
    completed(src);
  };
  img.src = src;
});

function pause() {
  clearInterval(slideshow);
}

function resume() {
  slideshow = setInterval(showNextImage, 3500);
}

function currentImage() {
  return loaded[index];
}
