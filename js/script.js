/* HIDE NAVBAR ON SCROLL */
const navbar = document.getElementById('nav');
let lastScroll = window.scrollY;


window.onscroll = () => { // Hide nav bar when user scrolls down
    let currentScroll = window.scrollY;

    if (lastScroll > currentScroll) { 
        navbar.style.top = '0';
    }
    else { 
        navbar.style.top = '-50px';;
    }

    lastScroll = currentScroll;
};

/* TYPEWRITER ANIMATION */
let subtitle = document.getElementById('subtitle');
let phrase = 'Front End Web Developer';
let i = 0;

console.log(subtitle);
function type() {
    if(i < phrase.length) { 
        subtitle.innerHTML += phrase.charAt(i);
        i++;
        setTimeout(type, 200);
    }
}

type();

/* VIEW MORE BULLET POINTS IN THE ABOUT SECTION */
const btn = document.getElementById('btn-more');
const list = document.getElementsByClassName('hidden')
let hiddenElements = true;

btn.addEventListener('click', () => { 

    // HTMLcollections are "live" so as the class is removed, the item is also removed from the list.
    // This allows us to check if there are elements left in the list by evaluating the truthy value of length. 
    while(list.length){
        list[0].classList.remove('hidden'); 
    }

    btn.style.display = 'none';
});
