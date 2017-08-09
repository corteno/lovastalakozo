NodeList.prototype.forEach = Array.prototype.forEach;

let galleryItems = document.querySelectorAll('.gallery-item');
let activeImage = 0;
let duration = 3000;

const fadeIn = (el) => {
    el.className = "gallery-item fade-in";
};

const fadeOut = (el) => {
    setTimeout(2500);
    console.log(el.className);
    el.className = "gallery-item fade-out";
};

const nextImage = () => {
    if(activeImage + 1 > galleryItems.length - 1){
        activeImage = 0
    } else {
        activeImage++;
    }
};

const loop = () => {
    fadeIn(galleryItems[activeImage]);
    setTimeout(1000);
    nextImage();

    setInterval(() => {
        fadeIn(galleryItems[activeImage]);
        setTimeout(1000);
        fadeOut(galleryItems[activeImage]);
        nextImage();
    }, duration);
};

loop();