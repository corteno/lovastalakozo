window.onload = () => {
    let navbar = document.querySelector('.nav-bar');
    let hamburger = document.querySelector('.hamburger');
    let isOpen = false;

    const toggleMenu = () => {
        console.log('clicked');
        if(!isOpen){
            navbar.className = "nav-bar nav-open";
            isOpen = !isOpen;
        } else {
            navbar.className = "nav-bar nav-open nav-close";
            setTimeout(() => {
                navbar.className = "nav-bar";
                isOpen = !isOpen;
            }, 500);

        }


    };

    hamburger.addEventListener('click', () => {
        toggleMenu();
    });

};


