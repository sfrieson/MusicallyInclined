console.log("Scripts");
var slideshow = 0;
var index = 0;
var bg = document.querySelector('.image');
bg.style.transition.length = 500;
bg.style.backgroundSize         = "cover";
bg.style.backgroundPosition     = "50% 30%";

var bgPos = {
  //image_name.JPG       : " x=  y="
  "/images/IMG_4344.JPG" : "50% 30%",
  "/images/IMG_4407.JPG" : "40% 40%",
  "/images/IMG_4410.JPG" : "40% 40%",
  "/images/IMG_4421.JPG" : "40% 20%",
  "/images/IMG_4338.JPG" : "50% 30%",
  "/images/IMG_4581.JPG" : "50% 20%"
}

function next () {
    if (++index === loaded.length) index = 0;
    bg.style.background         = "url(" + loaded[index] + ")";
    bg.style.transition.length  = 500;
    bg.style.backgroundSize     = "cover";
    bg.style.backgroundPosition = bgPos[loaded[index].match(/\/images\/IMG_[0-9]{4}.jpg/i)[0]];
}
var loaded = [];
function completed(src){
    loaded.push(src);
    if(!slideshow){
        slideshow = setInterval(next, 2750);
        window.scrollTo(0,1); //Hide the address bar
    }
}
