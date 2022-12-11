const navbar = document.getElementById('nav');
let lastScroll = window.scrollY;

// Hide nav bar when user scrolls down
window.onscroll = () => { 
    let currentScroll = window.scrollY;

    if (lastScroll > currentScroll) { 
        navbar.style.top = '0';
    }
    else { 
        navbar.style.top = '-50px';;
    }

    lastScroll = currentScroll;
};