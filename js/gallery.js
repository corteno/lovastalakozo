NodeList.prototype.forEach = Array.prototype.forEach;

let galleryItems = document.querySelectorAll('.gallery-item');
let activeImage = 0;
let duration = 3000;
let displayTime = 1500;

const fadeIn = (el) => {
    el.className = "gallery-item fade-in";
};

const fadeOut = (el) => {
    setTimeout(() => {
        el.className = "gallery-item fade-out";
    }, displayTime);
};

const nextImage = () => {
    if (activeImage + 1 > galleryItems.length - 1) {
        activeImage = 0
    } else {
        activeImage++;
    }
};

const loop = () => {
    fadeIn(galleryItems[activeImage]);

    setTimeout(() => {
        fadeOut(galleryItems[activeImage]);
        nextImage();
    }, displayTime);


    //Repeating
    setInterval(() => {
        fadeIn(galleryItems[activeImage]);
        setTimeout(() => {
            fadeOut(galleryItems[activeImage]);
            nextImage();
        }, displayTime);

    }, duration);
};

loop();